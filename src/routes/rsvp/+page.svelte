<script>
  import Button from "$lib/components/Button.svelte";
  import FadeIn from "$lib/components/FadeIn.svelte";
  import Jumbotron from "$lib/components/Jumbotron.svelte";
</script>

<FadeIn fluid>
  <Jumbotron
    src="https://res.cloudinary.com/dzuwr9eug/image/upload/v1742683766/IMG_7433_ov8fje.png"
    type="image"
    height={500}
    parallax
  >
    <div class="text-white text-center">
      <div class="text-4xl sm:text-5xl md:text-6xl font-medium my-2">RSVP</div>
    </div>
  </Jumbotron>
</FadeIn>

<FadeIn>
  <div class="flex flex-col w-1/2 mx-auto">
    <div class="text-center text-2xl">Kindly, type your invitation name</div>
    <br />
    <input
      class="text-xl border border-gray-300 px-5 py-3"
      placeholder="Your Invitation Name"
    />
  </div>
</FadeIn>

<div class="flex flex-col w-1/2 mx-auto px-10 pb-20">
  <div class="text-center text-2xl">Please verify the names in your party</div>
  <br />
  <input
    class="text-xl border-b border-gray-300 px-5 py-3 outline-none mb-4"
    placeholder="Guest Name 1"
  />
  <input
    class="text-xl border-b border-gray-300 px-5 py-3 outline-none mb-4"
    placeholder="Guest Name 2"
  />
  <input
    class="text-xl border-b border-gray-300 px-5 py-3 outline-none mb-4"
    placeholder="Guest Name 3"
  />
  <input
    class="text-xl border-b border-gray-300 px-5 py-3 outline-none mb-4"
    placeholder="Guest Name 4"
  />

  <Button dark>SUBMIT</Button>
</div>

<FadeIn fluid>
  <Jumbotron
    type="image"
    src="https://res.cloudinary.com/dzuwr9eug/image/upload/v1742658178/iStock-1474946774_ryipiy.png"
    height={400}
  >
    <div class="text-white text-center">
      <div class="text-5xl font-medium my-2">Gift</div>

      <p class="text-xl w-3/4 mx-auto">
        If you'd like to celebrate our new journey with a gift, we've provided
        options here.
      </p>

      <br />

      <Button>SEE OPTIONS</Button>
    </div>
  </Jumbotron>
</FadeIn>
