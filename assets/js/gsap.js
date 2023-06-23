gsap.registerPlugin(ScrollTrigger);



gsap.from('.sticker-box img', {
  stagger:{
    from:"random",
    amount:0.5,
  },
  opacity: 0,
  scale:0.8
});



// const fadeinEls = document.querySelectorAll(".sticker-box img");

// fadeinEls.forEach(function (textanimation, index) {
//   gsap.to(textanimation, {
//     delay: (index + 1) * 0.3,
//     opacity: 1,
//   });
// });
 



