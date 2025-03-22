<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    dark?: boolean;
    children?: Snippet;
    to?: string;
  }

  const { dark = false, children, to }: Props = $props();
  const color = dark ? "black" : "white";
  const inverted = dark ? "white" : "black";
</script>

<a
  class="px-10 py-2 text-lg border border-{color} text-{color} hover:bg-{color} hover:text-{inverted} duration-300"
  href={to || "#"}
>
  {#if children}
    {@render children()}
  {/if}
</a>
