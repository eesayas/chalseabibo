import { handler } from "./build/handler.js";
import express from "express";
import { google } from "googleapis";
import "dotenv/config";
import cors from "cors";

const { SHEET_ID } = process.env;

const camelCase = (str) =>
  str
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
    .replace(/^([A-Z])/, (m) => m.toLowerCase());

const auth = new google.auth.GoogleAuth({
  keyFile: "./google.json",
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/rsvp", async (_, res) => {
  const sheets = google.sheets({ version: "v4", auth });
  const range = "Invitations!A2:C9999"; // C9999 is arbitrary

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range,
    });

    const rawData = response.data.values;
    const headers = rawData[0];

    const offset = 3;

    // Convert data to an object
    const data = rawData.slice(1).map((row, index) =>
      Object.fromEntries([
        ...headers.map((key, index) => {
          return [camelCase(key), row[index]];
        }),
        ["cell", `A${index + offset}`],
      ]),
    );

    return res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

// Update rsvp data
app.patch("/api/rsvp", async (req, res) => {
  const sheets = google.sheets({ version: "v4", auth });
  const guests = req.body;

  const data = guests.map((guest) => {
    const { cell, group, name, response } = guest;

    return {
      range: `Invitations!${cell}`,
      values: [[group, name, response]],
    };
  });

  try {
    await sheets.spreadsheets.values.batchUpdate({
      spreadsheetId: SHEET_ID,
      requestBody: {
        valueInputOption: "USER_ENTERED",
        data,
      },
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

// Svelte app
app.use(handler);

const PORT = process.env.PORT || 3017;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
