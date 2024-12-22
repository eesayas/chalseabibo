<script>
  let { title } = $props();
</script>

<div class="flex flex-col justify-center items-center text-center p-10">
  <div class="text-5xl font-extralight my-2">
    <slot name="icon"></slot>
  </div>
  <div class="text-3xl my-4">{title}</div>

  <div class="md:w-1/2 sm:w-full text-xl">
    <slot></slot>
  </div>
</div>
