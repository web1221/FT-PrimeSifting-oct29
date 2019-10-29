$(document).ready(function(){
  $('#numberForm').submit(function(event){
    event.preventDefault();
    var numberInput = parseInt($('input#numberInput').val());
    var notPrimes = [];
    var numbers = [];
    var primeNumbers = [];
    for(var i = 1; i <= numberInput; i++ ){
      numbers.push(i);
    }

    numbers.forEach(function(number){
      if (number % 2 === 0 && number != 2){
        notPrimes.push(number);
      } else if (number % 3 === 0 && number != 3){
        notPrimes.push(number);
      } else if (number % 5 === 0 && number != 5){
        notPrimes.push(number);
      } else if (number % 7 === 0 && number != 7){
        notPrimes.push(number);
      } else if (number === 1){
        notPrimes.push(number);
      } else {
        primeNumbers.push(number);
      }
    });
    primeNumbers.forEach(function(number){
      $('#primes').append("<li>" + number + "</li>");
    })

    notPrimes.forEach(function(number){
      $('#notPrimes').append("<li>" + number + "</li>");
    })
    $('.results').show();
  });
});
