import './slider';

import modals from './modules/modals';
import tabs from './modules/tabs';
import timer from './modules/timer';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';

window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();

    const modalState = {};

    changeModalState(modalState);
    timer('#timer','2022-11-11');
    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration__item', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline');
    forms(modalState);
});