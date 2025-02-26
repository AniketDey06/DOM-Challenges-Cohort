/**
 * Write your challenge solution here
 */

const form = document.querySelectorAll('.form-container');

Array.from(form).forEach((input)=>{
    input.addEventListener('keyup', (e) => {
        if (document.getElementById('nameInput').value){
            document.getElementById('nameDisplay').innerText =  document.getElementById('nameInput').value
        }
        if (document.getElementById('jobInput').value){
            document.getElementById('jobDisplay').innerText =  document.getElementById('jobInput').value;
        }
        if (document.getElementById('ageInput').value){
            document.getElementById('ageDisplay').innerText =  document.getElementById('ageInput').value;
        }
        if (document.getElementById('bioInput').value){
            document.getElementById('bioDisplay').innerText =  document.getElementById('bioInput').value;
        }
    })
})