import { gsap } from 'gsap';

//import { greetUser } from '$utils/greet';
gsap.to('.ball', {
  x: '65dvw',
  duration: 2,
  delay: 1,
  stagger: 0.3,
  ease: 'power2.inOut',
  margin: '3rem',
  yoyo: true,
  repeat: 1,
});

/*
window.Webflow ||= [];
window.Webflow.push(() => {
  gsap.to('.ball', { x: '35vw', duration: 1, delay: 0.5, stagger: 0.5 });
});
*/
