<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children?: Snippet;
    class?: string;
    onClick?: () => void;

    color?: "black" | "white";
    to?: string;
    fullWidth?: boolean;
    small?: boolean;
    active?: boolean;
    hidden?: boolean;
  }

  let props: Props = $props();
  let { color = "white", children, small, to, onClick } = props;
</script>

<a
  onclick={onClick}
  href={to}
  type="button"
  class={(props.class || "") +
    "border text-lg w-fit duration-300 cursor-pointer select-none"}
  class:px-10={!small}
  class:py-2={!small}
  class:text-lg={!small}
  class:px-4={small}
  class:py-0={small}
  class:text-base={small}
  class:border-black={color === "black"}
  class:border-white={color === "white"}
  class:bg-black={color === "black" && props.active}
  class:bg-white={color === "white" && props.active}
  class:text-black={color === "black" || (color === "white" && props.active)}
  class:text-white={color === "white" || (color === "black" && props.active)}
  class:hover:bg-black={color === "black"}
  class:hover:bg-white={color === "white"}
  class:hover:text-white={color === "black"}
  class:hover:text-black={color === "white"}
>
  {#if children}
    {@render children()}
  {/if}
</a>
