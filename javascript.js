let dayH1 = document.querySelector('.day');
let body = document.querySelector('.body');
let audio = document.querySelector('audio');
let prayer = document.querySelector('.prayer');
// show time 

setInterval(() => {
    let date = new Date();
    today = date.getHours()+' : '+date.getMinutes()+' : '+date.getSeconds();
    dayH1.innerHTML = today;

// change background img by time
 if (date.getHours() === 5 && date.getMinutes() === 20) {
    body.style.backgroundColor = 'red';
    body.style.backgroundImage = 'url(./img/1838407_0.jpg)';
    prayer.innerHTML = 'صلاة الفجر';
    body.style.color = 'black'
    audio.play();
}
else if (date.getHours() === 12 && date.getMinutes() === 0) {
    body.style.backgroundColor = 'red';
    body.style.backgroundImage = 'url(./img/1838407_0.jpg)';
    prayer.innerHTML = 'صلاة الظهر';
    body.style.color = 'black'
    audio.play();
}
else if (date.getHours() === 14 && date.getMinutes() === 51) {
    body.style.backgroundColor = 'red';
    body.style.backgroundImage = 'url(./img/1838407_0.jpg)';
    prayer.innerHTML = 'صلاة العصر';
    body.style.color = 'black'
    audio.play();
} else if (date.getHours() === 17 && date.getMinutes() === 11) {
    body.style.backgroundColor = 'green';
    body.style.backgroundImage = 'url(./img/azan1.jpg)';
    prayer.innerHTML = 'صلاة المغرب';
    body.style.color = 'gold'
    audio.play();
} else if (date.getHours() === 18 && date.getMinutes() === 32) {
    body.style.backgroundColor = 'gold';
    body.style.backgroundImage = 'url(./img/download.jpg)';
    prayer.innerHTML = 'صلاة العشاء';
    body.style.color = 'white'
    audio.play();
}

})


