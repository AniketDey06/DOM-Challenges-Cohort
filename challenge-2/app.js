/**
 * Write your challenge solution here
 */

const mainHeading = document.getElementById('mainHeading');
const btns = document.querySelectorAll('.color-buttons');


Array.from(btns).forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        console.log(e.target.innerHTML);

        if( e.target.innerHTML == "Reset") mainHeading.style.color = "black";

        mainHeading.style.color = e.target.innerHTML;
        
    })
})

