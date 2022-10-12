import checkNumInputs from './checkNumInputs';

const forms = (state) => {
    const forms = document.querySelectorAll('form');
    const modals = document.querySelectorAll('[data-modal]');

    function closeWindows() {
        modals.forEach(item => item.style.display = 'none');
        document.body.classList.remove('modal-open');
    }

    checkNumInputs('input[name="user_phone"]');
    forms.forEach(form => sendForm(form));

    const messages = {
        loading: 'Идет загрузка...',
        success: 'Форма успешно отправлена!',
        fail: 'Ошибка отправки, попробуйте снова!'
    };

    async function postData(url, data){
        const res = await fetch(url, {
            method: 'POST',
            body: data
        });

        if(!res.ok){
            throw new Error(`Oops, we get error: ${res.status}`);
        }

        return await res.text();
    }

    function clearInputs(inputs) {
        inputs.forEach(input => input.value = '');
    }

    function sendForm(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const inputs = form.querySelectorAll('input');
        
            const message = document.createElement('div');
            message.classList.add('status');
            message.textContent = messages.loading;
            form.append(message);
            const formData = new FormData(form);
        
            if(form.getAttribute('data-calc') === 'end'){
                for(let key in state){
                    formData.append(key, state[key]);
                }
            }
            
            postData('assets/server.php', formData)
            .then(data => message.textContent = messages.success)
            .catch(() => message.textContent = messages.fail)
            .finally(() => {
                setTimeout(() => message.remove(), 2000);
                setTimeout(() => closeWindows(), 2500);
                clearInputs(inputs);

            });
        });
    }
};

export default forms;