<script lang="ts">
  import { onMount } from "svelte";

  interface Props {
    image?: string; // URL of the parallax image
    children?: any; // Slot for child content
    full?: boolean; // Whether the section is fullscreen
    gradient?: number; // Intensity of gradient overlay (0-100)
    position?: "center" | "bottom" | "left"; // CSS object position (not used in <img>)
    multiplier?: number;
  }

  // Destructure props with default values
  const {
    image,
    children,
    full = false,
    gradient = 65,
    position = "center",
    multiplier = 0.5,
  }: Props = $props();

  const heightClass = full ? "h-screen" : "h-96"; // Height of the container
  let parallaxImage: HTMLElement; // Reference to the parallax image container
  let containerTop = 0; // Distance from the top of the document to the container

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;

    // Check if the container is visible in the viewport
    if (
      scrollPosition + viewportHeight > containerTop &&
      scrollPosition < containerTop + parallaxImage.offsetHeight
    ) {
      const offset = scrollPosition - containerTop;
      parallaxImage.style.transform = `translate3d(0, ${offset * -0.5}px, 0)`; // Adjust multiplier for effect intensity
    }
  };

  const scaleImage = () => {
    const container = parallaxImage;
    const scrollRange = container.scrollHeight - container.clientHeight;

    const T = scrollRange * Math.abs(multiplier);
    const H_scaled = displayHeight + T;
    return H_scaled / imageHeight;
  };

  onMount(() => {
    if (parallaxImage?.parentElement) {
      containerTop = parallaxImage.parentElement.offsetTop; // Calculate container's position
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  let displayWidth = $state(0);
  let displayHeight = $state(0);
  let imageHeight = $state(0);

  let translation = $derived.by(() => {
    return (imageHeight - displayHeight) / 2;
  });

  let scale = $derived.by(() => {
    const container = parallaxImage;

    if (!container) return;

    const scrollRange = container.scrollHeight - container.clientHeight;

    const T = scrollRange * Math.abs(multiplier);
    const H_scaled = displayHeight + T;
    return H_scaled / imageHeight;
  });
</script>

<div
  class="{heightClass} overflow-hidden relative flex justify-center items-center border border-black"
>
  <!-- Parallax Image Layer -->
  <div
    class="absolute top-0 left-0 w-full h-full grayscale"
    bind:offsetHeight={displayHeight}
    bind:offsetWidth={displayWidth}
  >
    <img
      alt="hero"
      src={image}
      bind:offsetHeight={imageHeight}
      style="transform: translateY({-translation}px) scale({scale});"
    />
  </div>

  <!-- Gradient Overlay -->
  <div
    class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/{gradient.toString()} to-transparent"
  >
    {translation}
  </div>

  <!-- Slot Content -->
  {#if children}
    {@render children()}
  {/if}
</div>
