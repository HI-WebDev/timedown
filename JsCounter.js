let days = document.querySelector('.up .days')
let hours = document.querySelector('.up .hours')
let minutes = document.querySelector('.up .minutes')
let seconds = document.querySelector('.up .seconds')
let cong = document.querySelector('.up .cong')


// let count = setInterval(() => {
//     // hado lkhask ththom wst setinterval bach yban lik counting { 

//     //get event date
//     let eventDate = new Date('december 02, 2023 11:59:59').getTime();
//     // get date now 
//     let DateNow = new Date().getTime();
//     // get the difference btn dates
//     let diffDate = eventDate - DateNow;
//     //set the times
//     let ddays = Math.floor(diffDate / (1000 * 60 * 60 * 24));
//     let hhours = Math.floor(diffDate % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
//     let mminutes = Math.floor(diffDate % (1000 * 60 * 60) / (1000 * 60));
//     let sseconds = Math.floor(diffDate % (1000 * 60) / (1000))
//     //}

//     //put  to the body
//     days.innerHTML = ddays;
//     hours.innerHTML = hhours;
//     minutes.innerHTML = mminutes;
//     seconds.innerHTML = sseconds;

//     // stop counting and happy birthday message;
//     if (diffDate < 0) {
//         clearInterval(count);
//         cong.innerHTML = 'Happy Birthday To You Ismail'
//     }
// }, 1000)


// kanchdo kharij lqisma oqlidya ta3 diffdate (7yam) ela sway3 w dkchy li bqa howa hours knhawloh l hours w ghada

cong.style.display='none'

let count=setInterval(() => {
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

    if (timeRest <= 0) {
        clearInterval(count);
        cong.style.display='block';
        cong.innerHTML = 'Happy New Year Ismail';
    }
}, 1000)
