<script lang="ts">
  import FadeIn from "./FadeIn.svelte";
  import Image from "./Image.svelte";

  interface Event {
    image: string;
    aspect?: "square" | "video";
    title?: string;
    details: string;
  }

  const events: Event[] = [
    {
      image:
        "https://res.cloudinary.com/dzuwr9eug/image/upload/v1742674808/sk_dxzvul.png",
      title: "July 27, 2023",
      details:
        "Isaias came back to the Philippines for Simon and Kayla's wedding.",
    },
    {
      image:
        "https://res.cloudinary.com/dzuwr9eug/image/upload/v1742677809/40C568D4-ADD6-4ABD-9029-81566CA69E63_1_qzfdht.png",
      title: "August 9, 2023",
      details: "Our first date was in Philippine National Museum of Fine Arts.",
    },
    {
      image:
        "https://res.cloudinary.com/dzuwr9eug/image/upload/v1742675717/ldr_1_scwy4x.png",
      details:
        "We continued talking to each hoping for a time we can see each other again.",
    },
    {
      image:
        "https://res.cloudinary.com/dzuwr9eug/image/upload/v1742676418/AC12EDD6-D597-48ED-ADB8-BF385D17024C_1_105_c_w9riuc.jpg",
      aspect: "square",
      title: "February 17, 2024",
      details:
        "Isaias came back to the Philippines for Chalsea’s 24th birthday.",
    },
    {
      image:
        "https://res.cloudinary.com/dzuwr9eug/image/upload/v1742689068/relationship_icioue.gif",
      title: "February 21, 2024",
      details: "We became officially in a relationship.",
      aspect: "square",
    },
    {
      image:
        "https://res.cloudinary.com/dzuwr9eug/image/upload/v1742677275/date_1_qx420q.png",
      details: "Date and dates ❤️",
      aspect: "square",
    },
    {
      image:
        "https://res.cloudinary.com/dzuwr9eug/image/upload/v1742675782/DFD6C95B-6BB4-4FE0-837E-3F13DE0DC0DF_1_201_a_hwaotg.jpg",
      details: "Back to long distance 😩",
    },
    {
      image:
        "https://res.cloudinary.com/dzuwr9eug/image/upload/v1742675792/54D1DF3D-AF5B-4E24-997C-369E4AE68029_1_105_c_jbh5bl.jpg",
      details:
        "Chalsea made the most thoughtful and endearing gift for Isaias’ birthday.",
      title: "April 30, 2024",
      aspect: "square",
    },
    {
      image:
        "https://res.cloudinary.com/dzuwr9eug/image/upload/v1742677576/IMG_6586_f3mkco.png",
      details:
        "Shortly after, Isaias bought the ring and officially decided to propose.",
      aspect: "square",
    },
    {
      image:
        "https://res.cloudinary.com/dzuwr9eug/image/upload/v1742676682/propsal_mc62tb.gif",
      title: "August 10, 2024",
      details: "Back where it all started. From year 1 to a lifetime.",
      aspect: "square",
    },
    {
      image:
        "https://res.cloudinary.com/dzuwr9eug/image/upload/v1742676221/IMG_7365_1_tbfipo.png",
      details: "Family bonding in Boracay 🏝️",
      aspect: "square",
    },
    {
      image:
        "https://res.cloudinary.com/dzuwr9eug/image/upload/v1742676247/IMG_7505_1_ii2z0z.png",
      details: "Dating as fiances 😊",
      aspect: "square",
    },
    {
      image:
        "https://res.cloudinary.com/dzuwr9eug/image/upload/v1742676261/hero_2_hzkdwd.png",
      title: "Now",
      details: "Our last time apart, Lord willing.",
    },
  ];
</script>

<div>
  <FadeIn fluid>
    <div class="flex flex-col items-center justify-center p-10 pb-0 sm:pb-10">
      <Image
        src="https://res.cloudinary.com/dzuwr9eug/image/upload/v1742674808/a_whole_new_goodbye_zvnvog.png"
        class="w-5/6 sm:w-1/3"
      />
      <p class="text-xl mt-5 text-center">
        Chalsea and Isaias both grew up attending Moonwalk Community Bible
        Church.
      </p>
    </div>
  </FadeIn>

  {#each events as event, index}
    <FadeIn fluid>
      <div
        class="flex flex-col flex-col-reverse sm:flex-row"
        class:sm:flex-row-reverse={index % 2}
      >
        <div
          class="w-full sm:w-1/2 flex items-center justify-center border-gray-800"
          class:sm:border-l={index % 2}
        >
          <div class="w-5/6 sm:w-1/2 text-center sm:text-left">
            <div class="text-3xl">
              {event.title}
            </div>
            <p class="text-xl">
              {event.details}
            </p>
          </div>
        </div>

        <div
          class="w-full sm:w-1/2 border-gray-800 flex items-center justify-center my-10 sm:my-0 sm:p-10"
          class:sm:border-l={(index + 1) % 2}
        >
          <Image src={event.image} aspect={event.aspect} class="w-3/4" />
        </div>
      </div>
    </FadeIn>
  {/each}

  <FadeIn fluid>
    <div class="flex flex-col items-center justify-center p-10">
      <Image
        src="https://res.cloudinary.com/dzuwr9eug/image/upload/v1742683766/IMG_7433_ov8fje.png"
        class="w-5/6 sm:w-1/3"
        aspect="square"
      />
      <div class="text-3xl mt-6">June 25, 2025</div>
      <p class="text-xl mt-1 text-center">Our wedding.</p>
    </div>
  </FadeIn>
</div>
