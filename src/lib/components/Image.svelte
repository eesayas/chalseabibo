<script lang="ts">
  interface Props {
    /**
     * Image source
     */
    src: string;

    alt?: string;

    aspect?: "square" | "video";

    class?: string;
  }

  const props: Props = $props();
</script>

<img
  {...props}
  alt={props.alt || "image"}
  class:aspect-square={props.aspect === "square"}
  class:aspect-video={props.aspect === "video"}
  class:object-cover={true}
/>
