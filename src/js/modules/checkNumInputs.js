function checkNumInputs(inputSelector) {
    const inputs = document.querySelectorAll(inputSelector);
    inputs.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/ig,'');
        });
    });
}

export default checkNumInputs;