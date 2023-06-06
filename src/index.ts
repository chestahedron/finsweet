import { gsap } from 'gsap';

//import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('hi');
  gsap.from('.headline', { opacity: 0, duration: 5 });
});
