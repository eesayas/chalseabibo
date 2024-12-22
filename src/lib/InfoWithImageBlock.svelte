<script lang="ts">
  let { image, reverse } = $props();
</script>

<div
  class="flex w-3/4 md:flex-row flex-col mx-auto my-20 text-xl items-center text-center md:text-left text-center"
  class:md:flex-row-reverse={reverse}
>
  <div class="md:w-1/2 w-full flex items-center justify-center md:my-0 mb-10">
    <div class="lg:w-1/2 md:w-full w-1/2">
      <img src={image} alt="pic" />
    </div>
  </div>

  <div class="md:w-1/2 w-full flex items-center justify-center">
    <div class="w-full sm:w-3/4">
      <slot></slot>
    </div>
  </div>
</div>
