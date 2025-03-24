import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

const server =
  process.env.NODE_ENV === "production"
    ? process.env.BASE_URL
    : "http://localhost:3017";

export default defineConfig({
  plugins: [sveltekit()],

  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: server,
        changeOrigin: true,
      },
    },
  },
});
