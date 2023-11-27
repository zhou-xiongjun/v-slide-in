const DISTANCE = 150;
const DURATION = 500;

const map = new WeakMap();

const ob = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const animation = map.get(entry.target);
      if (animation) {
        animation.play();
        ob.unobserve(entry.target);
      }
    }
  });
});

// 判断元素是否再视口之下
function isBelowViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top - DISTANCE > window.innerHeight;
}

export default {
  mounted(el, binding) {
    if (!isBelowViewport(el)) {
      return;
    }

    const distance = binding.value.distance || DISTANCE;
    const duration = binding.value.duration || DURATION;

    const animation = el.animate(
      [
        { transform: `translateY(${distance}px)`, opacity: 0.5 },
        { transform: `translateY(0)`, opacity: 1 },
      ],
      {
        duration: duration,
        easing: "ease-in-out",
        fill: "forwards",
      }
    );
    map.set(el, animation);
    animation.pause();
    ob.observe(el);
  },
  unmounted() {
    ob.unobserve();
  },
};
