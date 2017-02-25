
  var wins = 0;
  var losses = 0;
  
  var numberOptions = [19, 20, 21, 22, 23, 24, 25, 30, 40, 45, 50, 55, 60, 65, 70, 80, 81, 84, 90, 99, 100, 112, 120];
  var counter = 0;

  var crystalNumber = [1, 3, 10, 12];
  var targetNumber = numberOptions[Math.floor(Math.random() * numberOptions.length)];
  $("#number").text(targetNumber);

  
  
  for ( var i = 0; i < crystalNumber.length; i++) {

    var crystal = $("<img>");
    crystal.addClass("crystal-gun");
    crystal.attr("src", "assets/images/crystalGun.jpg");
    crystal.attr("data-value", crystalNumber[Math.floor(Math.random() * crystalNumber.length)]);
    $("#crystalGun").append(crystal);
  };
  



  $(".crystal-gun").on("click", function () {

   var value = ($(this).attr("data-value"));
   value = parseInt(value);

   counter += value; 
   $("#score").text(counter);

   var reset = function () {
    targetNumber = numberOptions[Math.floor(Math.random() * numberOptions.length)];
    $("#number").text(targetNumber);
    counter = 0;
    
  };

    

    if (counter === targetNumber) {
      wins++;
      alert("You WIN:):)!!");
      $("#win").text(wins);

      reset();
    }

    else if (counter > targetNumber) {
      losses++;
      alert("You lose :( !!");
      $("#losses").text(losses);
      
      reset();
    }
  });