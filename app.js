let colors = ["green","red","brown"];

let btn = document.getElementById('btn');
let color = document.querySelector('.color');

btn.addEventListener('click', function(){

    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;

})