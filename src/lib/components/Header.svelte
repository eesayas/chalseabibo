<script>
  import Button from "./Button.svelte";
  import Sidebar from "./Sidebar.svelte";
</script>

<div
  class="flex text-lg w-full text-white bg-transparent absolute top-0 z-50 justify-center sm:justify-between items-center px-10 py-5 border-box"
>
  <a class="text-5xl" href="/">I&C</a>

  <div class="gap-5 md:gap-10 lg:gap-20 hidden sm:flex">
    <a class="cursor-pointer" href="/">Home</a>
    <a class="cursor-pointer" href="/our-story">Our Story</a>
    <a class="cursor-pointer" href="/gift">Gift</a>
  </div>

  <div class="hidden sm:block">
    <Button to="/rsvp">RSVP</Button>
  </div>

  <Sidebar />
</div>
