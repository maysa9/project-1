const audioX = new Audio('../sounds/bill.wav');
const audiow = new Audio('../sounds/clapping.wav');

let count = 1;
let cur= 0;
let xwin =0 ;
let owin =0;
let tie=0;
// winnig printing function 
winner=function(){
    if ( cur === true  ){
        audiow.play();//clapping audio
    $('.box > div').off()
    $(".winner").html("<h2>you are the winner x</h2>");
    xwin++
    $(".x").html(xwin);
    }
    else {
        audiow.play();
    $('.box > div').off()
    $(".winner").html("<h2>you are the winner o</h2>");
    owin++
    $(".o").html(owin);
}
}

function game(event) {
    audioX.play();// ring bill audio
    if (count % 2 === 0){
        $(event.target).text('x')
        cur= true; 
    }  
    else {
        $(event.target).text('o')
        cur=false;
        // console.log("momo")
    }
    $(event.target).off()
    
    
    if
       ( ($(".0").text() ===  $(".1").text() && $(".1").text() === $(".2").text() && $(".1").text() != "")
       ||( $(".3").text() ===  $(".4").text() && $(".4").text() === $(".5").text() && $(".4").text() != "")
       ||(  ($(".6").text() ===  $(".7").text() && $(".7").text() === $(".8").text() && $(".7").text() != ""))
       ||(  ($(".0").text() ===  $(".3").text() && $(".3").text() === $(".6").text() && $(".3").text() != ""))
       ||( ($(".1").text() ===  $(".4").text() && $(".4").text() === $(".7").text() && $(".4").text() != ""))
       ||( ($(".2").text() ===  $(".5").text() && $(".5").text() === $(".8").text() && $(".5").text() != ""))
       ||( ($(".0").text() ===  $(".4").text() && $(".4").text() === $(".8").text() && $(".4").text() != ""))
       ||($(".2").text() ===  $(".4").text() && $(".4").text() === $(".6").text() && $(".4").text() != ""))
      {
          winner();
      return logReset()
       }
       
     else if(count === 9){
        $(".winner").html("<h2>tie</h2>");
        tie++
        $(".tie").html(tie);
        return logReset()
    }
    count++;
    
}
function logReset() {
    setTimeout(function(){
        count = 1;
    $(".box  > div").html("");
    $('.box > div').off()
    return $('.box > div').on('click', game)
    }, 900)
    
}
$('.box > div').on('click', game)

const reset =function (){
    location.reload()
    }

$("button").click(reset)

