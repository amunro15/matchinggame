//flip()
/*1. click card
2. image changes, add class 'open', add class 'king' or 'queen'
3. click card
4. image changes, add class 'open', add class 'king' or 'queen'
5. if class matches, keep cards 'open'
6. if class doesn't match, remove class open*/

$(document).ready(function(){

  var myArray = ["images/crabCard.png","images/crabCard.png","images/dolphinCard.png","images/dolphinCard.png","images/fishCard.png","images/fishCard.png","images/shellCard.png","images/shellCard.png"];
  shuffle(myArray);
  console.log(shuffle(myArray));

//SHUFFLE FUNCTION
  function shuffle(myArray) {
    let counter = myArray.length;
    // local variable used inside shuffle instead of defining "counter" outside of the function
        while (counter > 0) {
          //while there are elements in the array
        let index = Math.floor(Math.random() * counter);
          //random number x amount of indeces in the array
        counter--;
          //decrease counter by one to match the array
        let shuffle = myArray[counter];
        myArray[counter] = myArray[index];
        myArray[index] = shuffle;
          //reorganizing the array in a shuffled order
      }
    return myArray;
  }

//WINNER MESSAGE
  function winner(msg){
    document.getElementById("winner").innerHTML=msg;
  }

  function selectedShuffle(){
    shuffle(myArray);
    $(".cards").attr("src","images/waveCard.png").removeClass("open keep");
    winner(" ")
    $(".star").hide();
    $(".star:before").hide();
    $(".star:after").hide();;
  }

  $( ".selectLevel" ).change(function() {
    alert($(this).find(":selected").val());
    var selected = $(this).find(":selected").val();
    if (selected == 2){
      alert("yo");
      myArray = ["images/crabCard.png","images/crabCard.png","images/dolphinCard.png","images/dolphinCard.png"];
      $(".show2").hide();
      selectedShuffle();
    }else if(selected == 3){
      myArray = ["images/crabCard.png","images/crabCard.png","images/dolphinCard.png","images/dolphinCard.png","images/fishCard.png","images/fishCard.png"];
      $(".cards").show();
      $(".show3").hide();
      selectedShuffle();
    }else{
      myArray = ["images/crabCard.png","images/crabCard.png","images/dolphinCard.png","images/dolphinCard.png","images/fishCard.png","images/fishCard.png","images/shellCard.png","images/shellCard.png"];
      $(".cards").show();
      selectedShuffle();
    }
  });

//RESHUFFLE
  $("#reshuffle").on("click",function(){
    selectedShuffle();
  });

  $(".cards").on("click",function(e){
    e.preventDefault();
    if($(this).hasClass("open") || $(this).hasClass("keep")){
      console.log("hi");//hi needs to be inside of "if"
      return; //exit the if statement
    }

    var selectedCard = $(this).index();

    // var rand = myArray[Math.floor(Math.random() * myArray.length)];

    if($(".open").length === 2){
      if($($(".open")[0]).attr("src") === $($(".open")[1]).attr("src")){//pulling source from class index
        $(".open").addClass("keep").removeClass("open");
        console.log($($(".open")[0]).attr("src") === $($(".open")[1]).attr("src"));
        console.log($(".open").addClass("keep").removeClass("open"));
      }else{
        $(".open").attr("src","images/waveCard.png").removeClass("open");
      }
    };

    $(this).attr("src",myArray[selectedCard]).addClass("open");
    console.log(this);

//RESET BUTTON
    $("#reset").on("click",function(){
      $(".cards").attr("src","images/waveCard.png").removeClass("open keep");
      winner(" ");
      $(".star").hide();
      $(".star:before").hide();
      $(".star:after").hide();
    });

    console.log($('.open').length);

//ABILITY TO ADD AS MANY CARDS AS WANT
    if($(".keep").length + $(".open").length === myArray.length){
      winner("You've won!");
      $(".star").show();
      $(".star:before").show();
      $(".star:after").show();
    }

  });

});
