<script lang="ts">
  interface Props {
    icon?: string;
    title?: string;
    details?: string;
  }

  const { icon, title, details }: Props = $props();
</script>

<div class="flex-1 my-5 md:my-0">
  <div
    class="w-24 h-24 mx-auto bg-center bg-cover"
    style="background-image: url({icon});"
  ></div>
  <div class="text-2xl mb-5">{title}</div>
  <div class="text-xl w-3/4 sm:w-1/2 mx-auto">
    {details}
  </div>
</div>
