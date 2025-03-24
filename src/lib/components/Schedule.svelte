<script lang="ts">
  import Image from "./Image.svelte";

  const events = [
    {
      time: "3:00pm",
      image:
        "https://res.cloudinary.com/dzuwr9eug/image/upload/v1742662804/gate_xtpgcj.png",
      details:
        "Doors open an hour early—enjoy drinks and snacks as we welcome you.",
    },
    {
      time: "4:00pm",
      image:
        "https://res.cloudinary.com/dzuwr9eug/image/upload/v1742662806/rings_kd5lyv.png",
      details: "A heartfelt union blessed with a short sermon.",
    },
    {
      time: "5:00pm",
      image:
        "https://res.cloudinary.com/dzuwr9eug/image/upload/v1742853385/Frame_1_flqqvx.png",
      details:
        "Enjoy snacks, refreshments, and a time of fellowship before we begin the reception.",
    },
    {
      time: "6:00pm",
      image:
        "https://res.cloudinary.com/dzuwr9eug/image/upload/v1742662805/food_tzcdu6.png",
      details: "Celebrate the beginning of our new chapter.",
    },
  ];
</script>

<div class="my-10">
  <div class="text-2xl text-center">SCHEDULE</div>
  <div class="flex flex-col md:flex-row">
    {#each events as event}
      <div class="flex-1">
        <div class="flex-1 my-5 md:my-0 text-center">
          <Image src={event.image} class="w-32 mx-auto" />
          <div class="text-2xl mb-5">{event.time}</div>
          <div class="text-xl w-3/4 sm:w-1/2 mx-auto">
            {event.details}
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
