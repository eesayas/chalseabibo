<script>
  import Jumbotron from "$lib/components/Jumbotron.svelte";
  import FadeIn from "$lib/components/FadeIn.svelte";
  import Highlight from "$lib/components/Highlight.svelte";
  import Map from "$lib/components/Map.svelte";
  import Button from "$lib/components/Button.svelte";
  import Schedule from "$lib/components/Schedule.svelte";
</script>

<div>
  <!-- Hero -->
  <FadeIn fluid>
    <Jumbotron
      src="https://res.cloudinary.com/dzuwr9eug/image/upload/v1742661888/hero_dazbh9.jpg"
      type="image"
      parallax
    >
      <div class="text-white text-center">
        <div class="text-xl font-light">06.25.2025</div>
        <div class="text-4xl sm:text-5xl md:text-6xl font-medium my-2">
          Isaias & Chalsea
        </div>
        <div class="text-xl font-light">Tagaytay, Cavite</div>
        <br />
        <Button to="/rsvp">RSVP</Button>
      </div>
    </Jumbotron>
  </FadeIn>

  <!-- Verse -->
  <FadeIn class="bg-[#F9F9F9]">
    <div class="flex items-center flex-col text-xl text-center">
      <p class="w-full sm:w-3/4 lg:w-1/2">
        The steadfast love of the Lord never ceases,<br />
        His mercies never come to an end, they are new every morning.<br />
        Great is thy faithfulness.
      </p>
      <div class="font-semibold mt-10">Lamentations 3:22-23</div>
    </div>
  </FadeIn>

  <!-- Location -->
  <FadeIn>
    <Highlight
      image="https://res.cloudinary.com/dzuwr9eug/image/upload/v1742664384/location_rwyk7c.jpg"
      title="LOCATION"
    >
      <div class="text-xl my-10">
        Our wedding will take place at the stunning
        <strong>Aquila Crystal Palace</strong>, nestled in the picturesque city
        of Tagaytay.
        <br /><br />
        The ceremony will begin at <strong>4:00 PM</strong>. Please arrive by
        <strong>an hour early</strong>
        to enjoy food and drinks as we welcome you.
      </div>
      <Button color="black" to="/rsvp">RSVP</Button>
    </Highlight>
  </FadeIn>

  <Map />
  <FadeIn fluid>
    <Schedule />
  </FadeIn>

  <!-- Our Story -->
  <FadeIn fluid>
    <Jumbotron
      height={400}
      type="video"
      src="https://res.cloudinary.com/dzuwr9eug/video/upload/v1742667540/My_Movie_5_jugbfw.mp4"
    >
      <div
        class="text-white text-center sm:w-3/4 px-10 md:px-36 md:right-0 my-auto box-border text-xl"
      >
        <div class="text-5xl">Our Story</div>
        <br />
        <p>
          From an unexpected meeting to a persevering love, God's providence
          guided our paths, shaping our lives to bring us together in His
          perfect timing.
        </p>
        <br />
        <Button to="/our-story">READ OUR STORY</Button>
      </div>
    </Jumbotron>
  </FadeIn>

  <!-- Our Church -->
  <FadeIn>
    <Highlight
      title="VISIT OUR CHURCH"
      image="https://res.cloudinary.com/dzuwr9eug/image/upload/v1742662169/church_q6bebx.jpg"
    >
      <div class="text-xl mt-10">
        If you're in Metro Manila on a Sunday, we invite you to visit Moonwalk
        Community Bible Church in Parañaque. We'd love to have you join us for
        worship and fellowship!

        <div class="my-5 block font-bold">Sunday Schedule</div>

        <div>Sunday School.......9am</div>
        <div>Morning Worhip.......10:30am</div>
        <div>Evening Worhip.......4:30pm</div>
      </div>
    </Highlight>
  </FadeIn>

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
</div>
