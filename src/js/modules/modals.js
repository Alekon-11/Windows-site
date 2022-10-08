const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector); 

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if(e.target){
                    e.preventDefault();
                }
    
                modal.style.display = 'block';
                document.body.classList.add('modal-open');
            });
        });

        modal.addEventListener('click', (e) => {
            if(e.target && e.target.matches(modalSelector) || e.target.parentNode.matches(closeSelector)){
                modal.style.display = '';
                document.body.classList.remove('modal-open');
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

    showModalByTime('.popup', 60000);
};

export default modals;