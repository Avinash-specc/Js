const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
console.log(buttons)

buttons.forEach(function(button){
  button.addEventListener('click', function (c){
    if(c.target.id === 'grey'){
      body.style.backgroundColor = c.target.id;
    }
    if(c.target.id ==='white'){
      body.style.backgroundColor=c.target.id;
    }
    if(c.target.id ==='yellow'){
      body.style.backgroundColor=c.target.id;
    }
    if(c.target.id ==='blue'){
      body.style.backgroundColor=c.target.id;
    }}
    )})