<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    image?: string;
    children?: Snippet;
    full?: boolean;
    gradient?: number;
  }

  const { image, children, full, gradient = 65 }: Props = $props();
  const heightClass = full ? "h-screen" : "h-96";
</script>

<div
  class="{heightClass} overflow-hidden relative flex justify-center items-center"
>
  <div
    class="absolute top-0 left-0 w-full h-full bg-cover bg-fixed bg-center grayscale"
    style="background-image: url({image});"
  ></div>

  <div
    class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/{gradient.toString()} to-transparent"
  ></div>

  {#if children}
    {@render children()}
  {/if}
</div>
