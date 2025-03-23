<script lang="ts">
  let open = false;

  const toggle = () => {
    open = !open;

    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };
</script>

<div
  class="bg-white w-full absolute top-0 left-0 text-black h-screen flex justify-center"
  class:hidden={!open}
>
  <div class="flex flex-col text-4xl gap-5 my-20">
    <a class="cursor-pointer" href="/" on:click={toggle}>Home</a>
    <a class="cursor-pointer" href="/our-story" on:click={toggle}> Our Story</a>
    <a class="cursor-pointer" href="/gift" on:click={toggle}>Gift</a>
    <a class="cursor-pointer" href="/rsvp" on:click={toggle}>RSVP</a>
  </div>
</div>

<button
  class="hamburger flex flex-col justify-between w-6 h-4 absolute right-8 block sm:hidden"
  aria-label="menu"
  on:click={toggle}
>
  <div
    class="bar w-full h-0.5 rounded transition-all duration-300"
    class:bg-black={open}
    class:bg-white={!open}
    class:rotate-45={open}
    class:translate-y-[7px]={open}
  ></div>
  <div
    class="bar w-full h-0.5 rounded transition-all duration-300"
    class:hidden={open}
    class:bg-black={open}
    class:bg-white={!open}
  ></div>
  <div
    class="bar w-full h-0.5 rounded transition-all duration-300"
    class:-rotate-45={open}
    class:-translate-y-[7px]={open}
    class:bg-black={open}
    class:bg-white={!open}
  ></div>
</button>
