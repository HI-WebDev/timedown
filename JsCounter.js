let days = document.querySelector('.up .days')
let hours = document.querySelector('.up .hours')
let minutes = document.querySelector('.up .minutes')
let seconds = document.querySelector('.up .seconds')
let cong = document.querySelector('.up .cong')


cong.style.display = 'none'

let count = setInterval(() => {
    //you need to put this into the set interval to see the counting working
    let eventDate = new Date("December 31,2023 23:59:59").getTime();
    let dateNow = new Date().getTime();
    let timeRest = eventDate - dateNow;

    //calc
    let Tdays = Math.floor(timeRest / (1000 * 60 * 60 * 24))
    let Thours = Math.floor(timeRest % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    let Tminutes = Math.floor(timeRest % (1000 * 60 * 60) / (1000 * 60))
    let Tseconds = Math.floor(timeRest % (1000 * 60) / (1000))

    // set time
    days.innerHTML = Tdays;
    hours.innerHTML = Thours;
    minutes.innerHTML = Tminutes;
    seconds.innerHTML = Tseconds;

    //time stop
    if (timeRest <= 0) {
        clearInterval(count);
        cong.style.display = 'block';
        cong.innerHTML = 'Happy New Year To You';
    }
}, 1000)


// kanchdo kharij lqisma oqlidya ta3 diffdate (7yam) ela sway3 w dkchy li bqa howa hours knhawloh l hours w ghada