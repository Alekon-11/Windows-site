import './slider';

import modals from './modules/modals';
import tabs from './modules/tabs';
import timer from './modules/timer';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();

    timer('#timer','2022-11-11');
    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration__item', 'after_click');
    forms();
});