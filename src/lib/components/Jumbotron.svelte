<script lang="ts">
  import { onMount, type Snippet } from "svelte";

  interface Props {
    /**
     * The background image
     */
    image: string;

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

  let { image, children, parallax, height }: Props = $props();

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
    <img src={image} alt="hero" class="object-cover h-full w-full" />
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
