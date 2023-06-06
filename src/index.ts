import { gsap } from 'gsap';

//import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  gsap.from('.headline', { opacity: 0, duration: 5 });
});
