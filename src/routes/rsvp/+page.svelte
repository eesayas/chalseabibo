<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import FadeIn from "$lib/components/FadeIn.svelte";
  import Jumbotron from "$lib/components/Jumbotron.svelte";
  import { debounce } from "$lib/utils/debounce";
  import { onMount } from "svelte";

  interface RSVP {
    cell: string;
    group: string;
    name: string;
    response: string;
  }

  let rsvps: RSVP[] = $state([]);

  onMount(async () => {
    try {
      const response = await fetch("/api/rsvp");
      rsvps = await response.json();
    } catch (error) {
      console.error("error", error);
    }
  });

  let name = $state("");
  let guests: RSVP[] = $state([]);
  let status = $state("");

  const search = debounce(() => {
    // Find invitation
    const invitation = rsvps.find(
      (rsvp) => rsvp.name.toLowerCase().trim() === name.toLowerCase().trim(),
    );

    // Retrieve other guests in the same invitation
    guests = rsvps.filter((rsvp) => rsvp.group === invitation?.group);

    if (!guests.length && name.length) {
      status =
        "We can't recover the information. Please try again or contact us at chalseabibo@gmai.com.";
    }
  }, 1000);

  const setResponse = (idx: number, response: "YES" | "NO") => {
    guests[idx] = { ...guests[idx], response };
    guests = [...guests];
  };

  const submit = async () => {
    try {
      await fetch("/api/rsvp", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(guests),
      });

      guests = [];
      status = "Thank you for your response!";
    } catch (error) {
      status = "There was an error in your submission. Please try again.";
      console.error("error", error);
    }
  };
</script>

<FadeIn fluid>
  <Jumbotron
    src="https://res.cloudinary.com/dzuwr9eug/image/upload/v1742683766/IMG_7433_ov8fje.png"
    type="image"
    height={360}
    parallax
  >
    <div class="text-white text-center">
      <div class="text-4xl sm:text-5xl md:text-6xl font-medium my-2">RSVP</div>
    </div>
  </Jumbotron>
</FadeIn>

<FadeIn>
  <div class="flex flex-col w-full sm:w-1/2 mx-auto">
    <div class="text-center text-xl">
      Kindly, type your full name or a member of your group
    </div>
    <br />
    <input
      class="text-xl border border-gray-300 px-5 py-3"
      placeholder="Your Name"
      bind:value={name}
      oninput={() => {
        status = "";
        search();
      }}
    />
  </div>

  <div
    class="text-center text-xl mt-2 w-full sm:w-1/2 mx-auto text-gray-500 italic"
  >
    {status}
  </div>
</FadeIn>

<div
  class="flex flex-col w-full sm:w-1/2 mx-auto px-1 pb-20 justify-center items-center"
  class:hidden={!guests.length}
>
  <div class="text-center text-xl">
    Please verify the names in your group and choose a response
  </div>
  <br />

  {#each guests as guest, index}
    <div class="relative w-full">
      <input
        class="text-xl border-b border-gray-300 px-5 py-3 pr-12 outline-none mb-4 w-full"
        placeholder={`Guest Name ${index + 1}`}
        bind:value={guest.name}
      />
      <div
        class="absolute right-2 top-1/3 transform -translate-y-1/3 p-3 select-none"
      >
        <Button
          color="black"
          small
          active={guest.response === "YES"}
          onClick={() => setResponse(index, "YES")}
        >
          YES
        </Button>
        <Button
          color="black"
          small
          active={guest.response === "NO"}
          onClick={() => setResponse(index, "NO")}
        >
          NO
        </Button>
      </div>
    </div>
  {/each}

  <br />
  <Button color="black" onClick={submit}>SUBMIT</Button>
</div>

<FadeIn fluid>
  <Jumbotron
    src="https://res.cloudinary.com/dzuwr9eug/image/upload/v1742851412/unnamed_clvh6x.jpg"
    type="image"
    height={450}
  >
    <div class="text-white text-center">
      <div class="text-5xl font-medium my-2">Location</div>

      <p class="text-xl w-3/4 mx-auto">
        Our wedding will take place at <strong>Aquila Crystal Palace</strong>,
        in Tagaytay city.
        <br /><br />
        The ceremony will begin at <strong>4:00 PM</strong>. Please arrive by
        <strong>an hour early</strong>
        to enjoy food and drinks as we welcome you.
      </p>

      <br />

      <Button to="/">Learn More</Button>
    </div>
  </Jumbotron>
</FadeIn>
