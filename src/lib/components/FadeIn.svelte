<script lang="ts">
  import type { Snippet } from "svelte";
  import fadeInOnScroll from "$lib/utils/fadeInScroll";

  interface Props {
    /**
     * The element to be fade in
     */
    children?: Snippet;
    /**
     * Remove default padding
     */
    fluid?: boolean;
    /**
     * Passed class for styling
     */
    class?: string;
  }

  let props: Props = $props();
</script>

<div
  use:fadeInOnScroll
  {...props}
  class:p-0={props.fluid}
  class:py-20={!props.fluid}
  class:px-5={!props.fluid}
>
  {#if props.children}
    {@render props.children?.()}
  {/if}
</div>
