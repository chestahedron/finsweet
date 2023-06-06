import { gsap } from 'gsap';

//import { greetUser } from '$utils/greet';
gsap.to('.ball', { x: '35vw', duration: 1, delay: 0.5, stagger: 1 });

/*
window.Webflow ||= [];
window.Webflow.push(() => {
  //console.log('hi');
  gsap.to('.ball', { x: '35vw', duration: 1, delay: 0.5, stagger: 0.5 });
});
*/
