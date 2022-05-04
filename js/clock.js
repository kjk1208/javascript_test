const clock = document.querySelector("h2#clock"); 
// clock.innerText = "lalalalala";

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock(); //첨에 00:00:00이 실행되는것을 막기 위해
setInterval(getClock, 1000); //5초마다 쓰레드 돌리는것

