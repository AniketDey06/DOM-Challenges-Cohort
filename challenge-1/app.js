/**
 * Write your challenge solution here
 */


const  tbtn = document.getElementById('toggleButton');
const  bulb = document.getElementById('bulb');
const  body = document.getElementById('body');
const  state = document.getElementById('status');


tbtn.addEventListener('click', ()=>{

    if(bulb.classList[1] == "off"){
        bulb.classList.remove("off")
        body.classList.add("dark-mode")
        tbtn.innerText = "Turn Off"
        state.innerText = `Status On`
    }else{
        bulb.classList.add("off")
        body.classList.remove("dark-mode")
        tbtn.innerText = "Turn On"
        state.innerText = `Status Off`
    }
})