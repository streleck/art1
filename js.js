let x = Math.floor((0.5 + (window.innerWidth - 10) / (40)));
let y = Math.floor((0.5 + (window.innerHeight - 10) / (40)));

const body = document.querySelector('body');

console.log('x: ', x);
console.log('y: ', y);

for(let i=0; i<x; i++){
  for(let j=0; j<y; j++){
    let newCircle = document.createElement('div');
    newCircle.classList.add("circle");
    String.fromCharCode(97 + j);
    newCircle.setAttribute('id', i + String.fromCharCode(97 + j))
    newCircle.style.setProperty('background-position-x', ((100 / x) * i) + '%');
    newCircle.style.setProperty('background-position-x', ((100 / y) * j) + '%');
    newCircle.style.setProperty('left', (10 + (48 * i)) + 'px');
    newCircle.style.setProperty('top', (10 + (48 * j)) + 'px');
    body.appendChild(newCircle);
  }
  
};


// console.log(String.fromCharCode(94 + i));