//flip()
/*1. click card
2. image changes, add class 'open', add class 'king' or 'queen'
3. click card
4. image changes, add class 'open', add class 'king' or 'queen'
5. if class matches, keep cards 'open'
6. if class doesn't match, remove class open*/

$(document).ready(function(){

  var myArray = ["images/King.png","images/King.png","images/Queen.png","images/Queen.png"];
  shuffle(myArray);
  console.log(shuffle(myArray));

  function shuffle(myArray) {
    let counter = myArray.length;
    // While there are elements in the array
        while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        let shuffle = myArray[counter];
        myArray[counter] = myArray[index];
        myArray[index] = shuffle;
      }
    return myArray;
  }

  function winner(msg){
    document.getElementById("winner").innerHTML=msg;
  }

  $("#start").on("click",function(){
    console.log("hello");
    shuffle(myArray);
    $(".cards").attr("src","images/back-of-card.png").removeClass("open keep");
    console.log(shuffle(myArray));
    winner(" ");
  });

  $(".cards").on("click",function(e){
    e.preventDefault();

    if($(this).hasClass("open") || $(this).hasClass("keep")){
      console.log("hi");//hi needs to be inside of "if"
      return;
    }

    var selectedCard = $(this).index();

    // var rand = myArray[Math.floor(Math.random() * myArray.length)];

    if($(".open").length === 2){
      if($($(".open")[0]).attr("src") === $($(".open")[1]).attr("src")){//pulling source from class index
        $(".open").addClass("keep").removeClass("open");
        console.log($($(".open")[0]).attr("src") === $($(".open")[1]).attr("src"));
        console.log($(".open").addClass("keep").removeClass("open"));
      }else{
        $(".open").attr("src","images/back-of-card.png").removeClass("open");
      }
    };

    $(this).attr("src",myArray[selectedCard]).addClass("open");
    console.log(this);

    $("#reset").on("click",function(){
      $(".cards").attr("src","images/back-of-card.png").removeClass("open keep")
    });

    console.log($('.open').length);

    if($(".keep").length === 2 && $(".open").length === 2){
      winner("You've won!");
    }

    // function winner(msg){
    // 	document.getElementById("winner").innerHTML=msg;
    // }

  });

});
