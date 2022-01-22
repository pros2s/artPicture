import modals from "./modules/modals";
import sliders from "./modules/sliders";

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  modals();
  sliders('.feedback-slider', '', '.main-prev-btn', 'main-next-btn');
});