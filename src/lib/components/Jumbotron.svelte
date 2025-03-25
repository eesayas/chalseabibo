<script lang="ts">
  import { onMount, type Snippet } from "svelte";
  import Image from "./Image.svelte";

  interface Props {
    /**
     * The background image
     */
    src: string;

    type: "image" | "video";

    /**
     * Any element to be shown inside Jumbotron
     */
    children?: Snippet;

    /**
     * Add parallax effect when scrolling.
     * NOTE: Only works if Jumbotron is at the top of the screen
     */
    parallax?: boolean;

    height?: number;
  }

  let { src, type, children, parallax, height }: Props = $props();

  let yOffset = $state(0);

  onMount(() => {
    if (parallax) {
      const handleScroll = () => {
        const multiplier = 0.25; // adjust multiplier for desired effect
        yOffset = window.scrollY * multiplier;
      };

      window && window.addEventListener("scroll", handleScroll);
    }
  });
</script>

<div
  class="overflow-hidden flex justify-center items-center relative"
  style:height={height ? `${height}px` : "100vh"}
>
  <div
    class="h-full w-full grayscale"
    style="transform: translateY({yOffset}px); transition: transform 0.1s;"
  >
    {#if type === "video"}
      <video
        autoplay
        muted
        playsinline
        preload="auto"
        loop
        class="min-w-full min-h-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/dzuwr9eug/video/upload/v1742863277/movie_nvpm8t.mp4"
          type="video/mp4"
        />
        <track kind="captions" />
      </video>
    {/if}

    {#if type === "image"}
      <Image {src} class="object-cover h-full w-full" />
    {/if}
  </div>

  <!-- Gradient Overlay -->
  <div
    class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/65 to-transparent"
  ></div>

  <div class="absolute w-full h-full flex items-center justify-center">
    {#if children}
      {@render children()}
    {/if}
  </div>
</div>
