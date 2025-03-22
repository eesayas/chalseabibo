<script lang="ts">
  import type { Snippet } from "svelte";
  import Image from "./Image.svelte";

  interface Props {
    title: string;
    image: string;
    children?: Snippet;
  }

  const { title, image, children }: Props = $props();
</script>

<div class="flex flex-col md:flex-row w-full mx-auto">
  <div class="w-full md:w-1/2">
    <div class="text-2xl text-center mb-5 block md:hidden">{title}</div>
    <Image src={image} aspect="square" class="w-3/4 mx-auto" />
  </div>

  <div class="w-full md:w-1/2 text-center md:text-left p-5">
    <div class="text-2xl hidden md:block">{title}</div>
    {#if children}
      <div class="mt-5">
        {@render children()}
      </div>
    {/if}
  </div>
</div>
