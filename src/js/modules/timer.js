const timer = () => {
    const endtime = '2022-11-11';
    
    function getTimeRemaining(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date()),
              days = Math.floor(time / (1000 * 60 * 60 * 24)),
              hours = Math.floor((time / (1000 * 60 * 60)) % 24),
              minutes = Math.floor((time / (1000 * 60)) % 60),
              seconds = Math.floor((time / 1000) % 60);
        
        return {
            time,
            days,
            hours,
            minutes,
            seconds
        };
    }

    const day = document.querySelector('#days');
    const hour = document.querySelector('#hours');
    const minute = document.querySelector('#minutes');
    const second = document.querySelector('#seconds');
    const intId = setInterval(setClock, 1000);

    function setZero(num) {
        if(num && num >= 10){
            return num;
        }
        return `0${num}`;
    }

    function setClock() {
        const {time, days, hours, minutes, seconds} = getTimeRemaining(endtime);

        if(time <= 0){
            clearInterval(intId);

            day.textContent = '00';
            hour.textContent = '00';
            minute.textContent = '00';
            second.textContent = '00';

            return;
        }

        day.textContent = setZero(days);
        hour.textContent = setZero(hours);
        minute.textContent = setZero(minutes);
        second.textContent = setZero(seconds);
    }
    
    setClock();
    
};

export default timer;