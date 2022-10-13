function images() {
    const workArea = document.querySelector('.works');
    const imgPopup = document.createElement('div');
    const bigImg = document.createElement('img');
    let images = document.querySelectorAll('.preview');
    
    imgPopup.classList.add('popup');
    imgPopup.style.cssText = "display: none; justify-content: center; align-items: center;";
    bigImg.style.cssText = "max-height: 80vh; border-radius: 15px;";
    imgPopup.append(bigImg);
    workArea.appendChild(imgPopup);

    function bindEventClosePhoto(parent, event) {
        parent.addEventListener(event, (e) => {
            if(e.target && e.target.matches('.popup') || e.keyCode === 27){
                document.body.classList.remove('modal-open');
                imgPopup.style.display = '';
            }
        });
    }

    function openImages(item) {
        imgPopup.style.display = 'flex';
        bigImg.alt = item.alt;
        bigImg.src = item.parentNode.href;
        document.body.classList.add('modal-open');

        bindEventClosePhoto(imgPopup, 'click');
        bindEventClosePhoto(window, 'keyup');
    }

    workArea.addEventListener('click', (e) => {
        e.preventDefault();
        images = document.querySelectorAll('.preview');
        if(e.target && e.target.matches('.preview')){
            images.forEach(item => {
                if(e.target === item){
                    openImages(item);
                }
            });
        }

    });
}

export default images;