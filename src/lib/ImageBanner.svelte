<script>
  import { onDestroy, onMount } from "svelte";

  let { image } = $props();

  let yOffset = $state(0);

  const handleScroll = () => {
    yOffset = window.scrollY * 0.5; // Adjust the multiplier for the desired effect
  };

  onMount(() => {
    window && window.addEventListener("scroll", handleScroll);
  });
</script>

<div class="h-screen overflow-hidden flex justify-center items-center relative">
  <div
    class="h-full w-full img-container grayscale"
    style="transform: translateY({yOffset}px); transition: transform 0.1s linear;"
  >
    <img src={image} alt="hero" class="object-cover h-full w-full" />
  </div>

  <div class="absolute">
    <slot></slot>
  </div>
</div>
