import { gsap } from 'gsap';

import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Hansi Krüger';
  greetUser(name);
});
