const fadeInOnScroll = (
  node: HTMLElement,
  { threshold = 0.2, duration = 1000 } = {},
) => {
  console.log("he", node);
  // Apply initial styles
  node.style.opacity = "0";
  node.style.transition = `opacity ${duration}ms`;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        node.style.opacity = "1";

        // Optional: Stop observing after fade-in
        observer.unobserve(node);
      }
    },
    { threshold },
  );

  observer.observe(node);

  return {
    // Cleanup observer when the component is destroyed
    destroy() {
      observer.disconnect();
    },
  };
};

export default fadeInOnScroll;
