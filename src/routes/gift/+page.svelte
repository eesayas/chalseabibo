<script>
  import Button from "$lib/components/Button.svelte";
  import FadeIn from "$lib/components/FadeIn.svelte";

  import Jumbotron from "$lib/components/Jumbotron.svelte";
</script>

<FadeIn fluid>
  <Jumbotron
    src="https://res.cloudinary.com/dzuwr9eug/image/upload/v1742658178/iStock-1474946774_ryipiy.png"
    type="image"
    height={350}
    parallax
  >
    <div class="text-white text-center">
      <div class="text-4xl sm:text-5xl md:text-6xl font-medium my-2">Gift</div>
    </div>
  </Jumbotron>
</FadeIn>

<FadeIn class="bg-[#F9F9F9]">
  <div class="flex items-center flex-col text-xl text-center">
    <p class="w-full sm:w-3/4 lg:w-1/2">
      If you’d like to give a gift, we kindly prefer monetary contributions to
      help us build our future together. However, if you wish to give a
      different type of gift, you’re welcome to bring it on our wedding day ❤️
      <br /><br />
      - Bibo & Cha
    </p>
  </div>
</FadeIn>

<FadeIn>
  <div class="text-center text-xl">
    Here are a few options:
    <div class="my-2">
      Via <strong>E-transfer</strong>: chalseabibo@gmail.com
    </div>
    <div class="my-2">
      Via <strong>Paypal</strong> (with fee): chalseabibo@gmail.com
    </div>
  </div>
</FadeIn>

<FadeIn fluid>
  <Jumbotron
    height={400}
    type="video"
    src="https://res.cloudinary.com/dzuwr9eug/video/upload/v1742667540/My_Movie_5_jugbfw.mp4"
  >
    <div
      class="text-white text-center sm:w-3/4 px-10 md:px-36 md:right-0 my-auto box-border text-xl"
    >
      <div class="text-5xl">Our Story</div>
      <br />
      <p>
        From an unexpected meeting to a persevering love, God's providence
        guided our paths, shaping our lives to bring us together in His perfect
        timing.
      </p>
      <br />
      <Button to="/our-story">READ OUR STORY</Button>
    </div>
  </Jumbotron>
</FadeIn>
