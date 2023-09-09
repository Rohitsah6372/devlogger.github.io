const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')


function setData(){
    const now = new Date();

    const getSecond = now.getSeconds()
    const getMinute = now.getMinutes()
    const getHours = now.getHours()

    const secondDegree=(getSecond/60)*360
    const minuteDegree = (getMinute/60)*360
    const hourDegree =(getHours/12)*360

    second.style.transform = `rotate(${secondDegree}deg)`
    minute.style.transform = `rotate(${minuteDegree}deg)`
    hour.style.transform = `rotate(${hourDegree}deg)`


    console.log(now)

}

setInterval(setData,1000)