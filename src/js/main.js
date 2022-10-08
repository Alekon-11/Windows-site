import './slider';

import modals from './modules/modals';
import tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();

    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration__item', 'after_click');
});