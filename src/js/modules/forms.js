const forms = () => {
    const forms = document.querySelectorAll('form');
    const phoneNumber = document.querySelectorAll('input[name="user_phone"]');
    
    phoneNumber.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/ig,'');
        });
    });
    forms.forEach(form => sendForm(form));

    const messages = {
        loading: 'Идет загрузка...',
        success: 'Форма успешно отправлена!',
        fail: 'Ошибка отправки, попробуйте снова!'
    }

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
            
            postData('assets/server.php', formData)
            .then(data => {
                console.log(data);
                message.textContent = messages.success;
            })
            .catch(() => message.textContent = messages.fail)
            .finally(() => {
                setTimeout(() => message.remove(), 3000);
                clearInputs(inputs);
            });
        });
    }
};

export default forms;