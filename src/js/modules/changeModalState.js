import checkNumInputs from './checkNumInputs';

function changeModalState(state) {
    const windowShape = document.querySelectorAll('.balcon_icons_img');
    const windowWidth = document.querySelectorAll('#width');
    const windowHeight = document.querySelectorAll('#height');
    const windowType = document.querySelectorAll('#view_type');
    const windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionToElem(elems, event, prop) {
        elems.forEach((item, num) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN':
                        state[prop] = num;
                        break;
                    case 'INPUT':
                        if(item.getAttribute('type') === 'checkbox'){
                            state[prop] = num === 0 ? "Cold" : 'Hot';
                            elems.forEach((i,n) => {
                                i.checked = false;
                                if(num === n){
                                    i.checked = true;
                                }
                            });
                            return;
                        }

                        state[prop] = +item.value;
                        break;
                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                }
                console.log(state);
            });
        });
    }

    bindActionToElem(windowShape, 'click', 'shape');
    bindActionToElem(windowWidth, 'input', 'width');
    bindActionToElem(windowHeight, 'input', 'height');
    bindActionToElem(windowType, 'change', 'type');
    bindActionToElem(windowProfile, 'change', 'profile');
}

export default changeModalState;