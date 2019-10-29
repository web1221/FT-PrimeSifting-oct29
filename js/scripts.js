$(document).ready(function(){
  $('#numberForm').submit(function(event){
    event.preventDefault();
    var numberInput = parseInt($('input#numberInput').val());
    var notPrimes = [];
    var numbers = [];
    var primeNumbers = [];
    for(var i = 1; i <= numberInput; i++ ){
      numbers.push(i);
      // if(numbers[i] % 2 === 0){
      //   notPrimes.slice(numbers[i], 1);
      // }
    }

    numbers.forEach(function(number, i){
      if (number % 2 === 0){
        notPrimes.push(number);
      } else {
        primeNumbers.push(number);
      }
    })
    console.log(notPrimes);
    console.log(primeNumbers);
    // console.log(numberInput);
  });
});
