<script>
  import Button from "./Button.svelte";
</script>

<div
  class="flex text-lg w-full text-white bg-transparent absolute top-0 z-50 justify-center sm:justify-between items-center px-10 py-5 border-box"
>
  <a class="text-5xl" href="/">I&C</a>

  <div class="gap-5 md:gap-10 lg:gap-20 hidden sm:flex">
    <a class="cursor-pointer" href="/our-story">Our Story</a>
    <div class="cursor-pointer">Travel & Stay</div>
    <div class="cursor-pointer">Registry</div>
  </div>

  <div class="hidden sm:flex">
    <Button>RSVP</Button>
  </div>
</div>
