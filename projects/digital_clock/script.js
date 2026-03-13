const clock = document.getElementById('clock')

setInterval(function(){
    const time = new Date();
    clock.innerHTML = time.toLocaleTimeString();

    const r = Math.floor(Math.random() *256)
    const g = Math.floor(Math.random()*256)
    const b = Math.floor(Math.random()*256)

clock.style.color = `rgb(${r}, ${g}, ${b})`;
},1000)

