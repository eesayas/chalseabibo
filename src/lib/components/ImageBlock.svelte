<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children?: Snippet;
    image?: string;
  }

  const { image, children }: Props = $props();
</script>

<div class="flex flex-col md:flex-row w-full lg:w-3/4 mx-auto">
  <div class="w-full md:w-1/2">
    <div
      class="bg-gray-500 w-3/4 h-96 md:h-full mx-auto bg-cover bg-center"
      style="background-image: url({image});"
    ></div>
  </div>
  <div class="w-full md:w-1/2 text-left">
    <div class="w-3/4 mx-auto my-10">
      {#if children}
        {@render children()}
      {/if}
    </div>
  </div>
</div>
