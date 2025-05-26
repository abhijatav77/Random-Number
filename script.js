const input = document.getElementById('input');
const btn = document.querySelector('button');



btn.addEventListener('click', ()=> {

    const inp1 = parseInt(document.getElementById('input1').value);
    const inp2 = parseInt(document.getElementById('input2').value);
    
    const random = Math.floor(Math.random()* (inp2 - inp1 + 1)) + inp1;
    input.innerHTML = random

})




// btn.addEventListener('click', ()=> {
// })