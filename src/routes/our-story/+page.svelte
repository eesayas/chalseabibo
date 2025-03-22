<script lang="ts">
  import FadeIn from "$lib/components/FadeIn.svelte";
  import Jumbotron from "$lib/components/Jumbotron.svelte";
  import Timeline from "$lib/components/Timeline.svelte";
</script>

<div>
  <Jumbotron
    src="https://res.cloudinary.com/dzuwr9eug/image/upload/v1742659134/museum_mbvtzr.png"
    type="image"
    height={500}
    parallax
  >
    <div class="text-white text-center">
      <div class="text-4xl sm:text-5xl md:text-6xl font-medium my-2">
        Our Story
      </div>
    </div>
  </Jumbotron>

  <Timeline />

  <FadeIn class="bg-[#F9F9F9] p-10" fluid>
    <div class="flex items-center flex-col text-xl text-center">
      <p class="w-full sm:w-3/4 lg:w-1/2">
        We recognize God's sustaining hand in every step of our journey. He
        brought us together, faithfully provides for our needs, and strengthens
        us in the sacrifices we make for each other.
        <br /><br />
        Truly, <strong>Great is Thy Faithfulness.</strong>
        <br /> <br />
        - Bibo & Cha
      </p>
    </div>
  </FadeIn>
</div>
