<script>
  import ImageBanner from "$lib/ImageBanner.svelte";
  import InfoBlock from "$lib/InfoBlock.svelte";
  import InfoWithImageBlock from "$lib/InfoWithImageBlock.svelte";

  import hero1 from "../assets/hero1.jpg";
  import mcbc1 from "../assets/mcbc1.jpeg";
  import museum from "../assets/museum.png";

  import IconMapMarker from "~icons/mdi/map-marker-outline";
  import IconAirplane from "~icons/mdi/airplane";
  import IconBedOutline from "~icons/mdi/bed-outline";
  import IconCarOutline from "~icons/mdi/car-outline";
</script>

<ImageBanner image={hero1}>
  <div class="text-white text-center">
    <div class="text-5xl font-medium">Isaias & Chalsea</div>
    <div class="text-xl font-light">06.25.2025</div>
    <br />
    <button class="border border-white px-5 rounded-sm">RSVP</button>
    <button class="border border-white px-5 rounded-sm">GIFT GIVING</button>
  </div>
</ImageBanner>

<InfoBlock title="LOCATION">
  <IconMapMarker slot="icon"></IconMapMarker>
  <div class="text-2xl">Aquila Crystal Palace, Tagaytay, Cavite</div>
  <a href="#" class="text-xl underline font-semibold">See directions</a>
</InfoBlock>

<InfoBlock title="TRAVEL">
  <IconAirplane slot="icon"></IconAirplane>
  <div>
    You will be flying into Ninoy Aquino International Airport (NAIA), either
    Terminal 1 or Terminal 3, in Metro Manila.
  </div>
</InfoBlock>

<InfoBlock title="COMMUTE">
  <IconCarOutline slot="icon"></IconCarOutline>
  <div>
    If you're unfamiliar with the public transportation, we recommend using the
    <span class="font-bold">Grab</span>
    app for a more convenient ride from Metro Manila to Tagaytay (~2 hours).

    <br /><br />
    <span class="underline">Download</span> the app in advance to ensure a smoother
    journey.
  </div>
</InfoBlock>

<InfoBlock title="RECOMMENDED STAYS">
  <IconBedOutline slot="icon"></IconBedOutline>

  <div>
    You can choose to stay in Metro Manila and commute on the day of the
    wedding, or stay closer to the wedding venue in Tagaytay. Either way, here
    are our recommended options.
  </div>

  <div class="flex justify-center">
    <ul class="list-disc text-lg my-10 table">
      <li>Taal Vista Hotel, Tagaytay (7.5km from venue)</li>
      <li>Taal Vista Hotel, Tagaytay (7.5km from venue)</li>
      <li>Taal Vista Hotel, Tagaytay (7.5km from venue)</li>
    </ul>
  </div>

  <div>
    We may be able to arrange overnight lodging after the wedding, especially
    for our international guests. Please let us know if you're interested!
  </div>
</InfoBlock>

<div class="flex flex-col items-center text-center my-10">
  <!-- <IconBook class="text-5xl font-extralight my-2"></IconBook> -->
  <div class="text-3xl my-4">Visit our Church!</div>
</div>

<InfoWithImageBlock image={mcbc1} reverse={false}>
  <div>
    If you're in Metro Manila on a Sunday, we invite you to visit Moonwalk
    Community Bible Church in Parañaque. We'd love to have you join us for
    worship and fellowship!
  </div>

  <a
    href="https://www.google.com/"
    class="text-xl underline font-semibold block mt-2 mb-4"
  >
    142-144 Neil Armstrong, Parañaque, 1709 Metro Manila, Philippines
  </a>

  <div>Sunday School..............9am</div>
  <div>Morning Worhip..........10:30am</div>
  <div>Evening Worhip...........4:30pm</div>
</InfoWithImageBlock>

<!-- - sky ranch - Taal - napa -->

<!-- <div class="text-xl text-center my-20 w-1/2 mx-auto">
  The steadfast love of the Lord never ceases. His mercies never come to an end.
  They are new every morning.
  <span class="font-bold">Great is Thy faithfulness.</span>
  <div class="my-3">Lamentations 3:22-23</div>
</div> -->

<style>
  button:hover {
    background-color: white;
    color: black;
    transition: 0.5s;
  }
</style>
