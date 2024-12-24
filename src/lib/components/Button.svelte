<script lang="ts">
  import type { Snippet } from "svelte";
  interface Props {
    dark?: boolean;
    children: Snippet;
  }

  const { dark = false, children }: Props = $props();
  const color = dark ? "black" : "white";
  const inverted = dark ? "white" : "black";
</script>

<button
  class="px-5 py-2 border border-{color} text-{color} hover:bg-{color} hover:text-{inverted} duration-300"
>
  {@render children()}
</button>
