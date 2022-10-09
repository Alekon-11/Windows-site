const timer = (timerSelector,endtime) => {
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

    function setZero(num) {
        if(num && num >= 10){
            return num;
        }
        return `0${num}`;
    }

    function setClock(timerSelector, endtime){
        const timer = document.querySelector(timerSelector);
        const day = timer.querySelector('#days');
        const hour = timer.querySelector('#hours');
        const minute = timer.querySelector('#minutes');
        const second = timer.querySelector('#seconds');
        const intId = setInterval(updateClock, 1000);

        function updateClock() {
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
        updateClock();
    }
    
    setClock(timerSelector, endtime);
    
};

export default timer;