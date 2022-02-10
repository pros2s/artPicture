import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import loadStyles from "./modules/loadStyles";

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  modals();
  sliders('.feedback-slider-item', '.main-prev-btn', '.main-next-btn');
  sliders('.main-slider-item', '.main-prev-btn', '.main-next-btn', true);
  forms();

  mask('[name="phone"]');

  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');

  loadStyles('.button-styles', '.styles-2');
});