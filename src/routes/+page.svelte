<script>
  import { InfoItem, Button, ImageBlock, Parallax } from "$lib/components";
  import location from "$lib/assets/location.jpg";
  import church from "$lib/assets/church.jpeg";
  import { fadeInOnScroll } from "$lib/utils/fadeInScroll";
  import gate from "$lib/assets/gate.png";
  import food from "$lib/assets/food.png";
  import rings from "$lib/assets/rings.png";
  import hero from "$lib/assets/hero.jpg";
  import museum from "$lib/assets/museum.png";
  import airplane from "$lib/assets/airplane.png";
  import gift from "$lib/assets/gift.png";

  const events = [
    {
      time: "3:00pm",
      icon: gate,
      details:
        "Doors open an hour early—enjoy drinks and snacks as we welcome you.",
    },
    {
      time: "4:00pm",
      icon: rings,
      details: "A heartfelt union blessed with a short sermon.",
    },
    {
      time: "5:00pm",
      icon: food,
      details: "Celebrate the beginning of our new chapter.",
    },
  ];

  const infos = [
    {
      title: "Travel & Stay",
      icon: airplane,
      details:
        "We have guests joining us from near and far. Find travel tips and accommodation suggestions here.",
    },
    {
      title: "Gift Registry",
      icon: gift,
      details:
        "For those who wish to bless us with a token of love, our registry can be found here.",
    },
  ];
</script>

<div class="text-center">
  <!-- Hero -->
  <Parallax image={hero} full>
    <div class="text-white absolute">
      <div class="text-xl font-light">06.25.2025</div>
      <div class="text-4xl sm:text-5xl md:text-6xl font-medium my-2">
        Isaias & Chalsea
      </div>
      <div class="text-xl font-light">Tagaytay, Cavite</div>
    </div>
  </Parallax>

  <!-- Verse -->
  <div
    class="my-20 flex items-center flex-col text-lg sm:text-xl"
    use:fadeInOnScroll
  >
    <div class="w-full sm:w-3/4 lg:w-1/2">
      The steadfast love of the Lord never ceases,
      His mercies never come to an end, they are new every morning.
      Great is thy faithfulness.
    </div>
    <div class="font-semibold my-5">Lamentations 3:22-23</div>
  </div>

  <!-- Location -->
  <div class="my-20" use:fadeInOnScroll>
    <ImageBlock image={location}>
      <div class="text-2xl">LOCATION</div>
      <div class="text-xl my-10">
        Our wedding will take place at the stunning
        <strong>Aquila Crystal Palace</strong>, nestled in the picturesque city
        of Tagaytay.
        <br /><br />
        The ceremony will begin at <strong>4:00 PM</strong>. Please arrive by
        <strong>an hour early</strong>
        to enjoy food and drinks as we welcome you.
      </div>
      <Button dark>RSVP</Button>
    </ImageBlock>
  </div>

  <!-- Map -->
  <iframe
    title="map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7738.379775354378!2d120.95668887509714!3d14.124927786306978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd79dc7086fc39%3A0x56d9690c8ba530bb!2sAquila%20Crystal%20Palace%20Tagaytay!5e0!3m2!1sen!2sca!4v1734847372605!5m2!1sen!2sca"
    width="100%"
    height="400"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    use:fadeInOnScroll
    class="my-20"
  ></iframe>

  <!-- Schedule -->
  <div class="my-20" use:fadeInOnScroll>
    <div class="text-2xl">SCHEDULE</div>
    <br /><br />
    <div class="flex flex-col md:flex-row">
      {#each events as event}
        <div class="flex-1">
          <InfoItem
            icon={event.icon}
            title={event.time}
            details={event.details}
          />
        </div>
      {/each}
    </div>
  </div>

  <!-- Our Story -->
  <div class="my-20" use:fadeInOnScroll>
    <Parallax image={museum} gradient={50}>
      <div
        class="absolute text-white text-left sm:w-3/4 px-10 md:px-36 md:right-0 my-auto box-border text-xl"
      >
        <div class="text-3xl sm:text-5xl">Our Story</div>
        <br />
        <div>
          From an unexpected meeting to a lifetime of memories, God's providence
          guided our paths, shaping our lives to bring us together in His
          perfect timing.
        </div>
        <br />
        <button class="border border-black px-5 py-2 border-white"
          >Read Our Story</button
        >
      </div>
    </Parallax>
  </div>

  <div use:fadeInOnScroll class="my-20">
    <ImageBlock image={church}>
      <div class="text-2xl">Visit Our Church</div>
      <br />
      <div class="text-xl">
        If you're in Metro Manila on a Sunday, we invite you to visit Moonwalk
        Community Bible Church in Parañaque. We'd love to have you join us for
        worship and fellowship!

        <a class="my-5 block font-bold underline" href="/">See directions</a>

        <div>Sunday School.......9am</div>
        <div>Morning Worhip.......10:30am</div>
        <div>Evening Worhip.......4:30pm</div>
      </div>
    </ImageBlock>
  </div>

  <div
    use:fadeInOnScroll
    class="my-20 flex flex-col md:flex-row w-full mx-auto lg:w-3/4"
  >
    {#each infos as info}
      <div class="flex-1">
        <InfoItem icon={info.icon} title={info.title} details={info.details} />
      </div>
    {/each}
  </div>

  <br />
  <br />
</div>
