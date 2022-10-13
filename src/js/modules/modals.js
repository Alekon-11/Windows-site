const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector); 
        const modals = document.querySelectorAll('[data-modal]');

        function closeWindows() {
            modals.forEach(item => item.style.display = 'none');
            document.body.classList.remove('modal-open');
        }

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if(e.target){
                    e.preventDefault();
                }
            
                closeWindows();
    
                modal.style.display = 'block';
                document.body.classList.add('modal-open');
            });
        });

        modal.addEventListener('click', (e) => {
            if(e.target && (e.target.matches(modalSelector) && closeOverlay) || e.target.parentNode.matches(closeSelector)){

                closeWindows();
            }
        });

    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.classList.add('modal-open');
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_close');
    bindModal('.phone_link', '.popup', '.popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

    // showModalByTime('.popup', 60000);
};

export default modals;