const form = document.querySelector('form')

// const height = parseInt(document.querySelector('#height').value)

//This usecase will give us an empty value;

form.addEventListener('submit',function(e){
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  if(height === '' || height<0 || isNaN(height)){
    results.innerHTML = `Please Enter a valid height ${height}`
  }
  else if(weight === '' || weight <0 || isNaN(weight)){
    results.innerHTML = `Please Enter a valid weight ${weight}`
  }
  else{
    const bmi = (weight / ((height*height) /10000)).toFixed(2)
    results.innerHTML = `<span>${bmi}</span>`
    if(bmi<=18.6){
        results.innerHTML += "</br>" + `<span style="font-weight:bolder; color:red">Underweight</span>`
    }
    else if(bmi>=24.9){
        results.innerHTML += "</br>" + `<span style = "font-weight:bolder; color:red"> Overweight </span>`
    }
    else{
        results.innerHTML += "</br>" + `<span style = "font-weight:bolder; color:green">Normal Range</span>`
    }
  }

  
})