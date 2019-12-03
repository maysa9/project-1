// let count = 1;
// let cur= 0;
// let xwin =0 
// let owin =0
// winner=function(){
//     if ( cur === true ){
//     $(".winner").html("<h2>you are the winner x</h2>");
//     xwin++
//     $(".x").html(xwin);
//     }
//     else {
//     $(".winner").html("<h2>you are the winner o</h2>");}
// }

// function game(event) {
//     if (count % 2 === 0){
//         $(event.target).text('x')
//         cur= true;
//     }  
//     else {
//         $(event.target).text('o')
//         cur=false;
//         console.log("momo")
//     }
//     $(event.target).off()
    
    
//     if($(".0").text() ===  $(".1").text() && $(".1").text() === $(".2").text() && $(".1").text() != ""){
//         winner();
//         return logReset()
//     }
//     else if($(".3").text() ===  $(".4").text() && $(".4").text() === $(".5").text() && $(".4").text() != ""){
//         winner();
//         return logReset()
//     }
//     else if($(".6").text() ===  $(".7").text() && $(".7").text() === $(".8").text() && $(".7").text() != ""){
//         winner();
//         return logReset()
//     }
//     else if($(".0").text() ===  $(".3").text() && $(".3").text() === $(".6").text() && $(".3").text() != ""){
//         winner();
//         return logReset()
//     }
//     else if($(".1").text() ===  $(".4").text() && $(".4").text() === $(".7").text() && $(".4").text() != ""){
//         winner();
//         return logReset()
//     }
//     else if($(".2").text() ===  $(".5").text() && $(".5").text() === $(".8").text() && $(".5").text() != ""){
//          winner();
//         return logReset()
//     }
//     else if($(".6").text() ===  $(".7").text() && $(".7").text() === $(".8").text() && $(".7").text() != ""){
//          winner();
//         return logReset()
//     }
//     else if($(".0").text() ===  $(".4").text() && $(".4").text() === $(".8").text() && $(".4").text() != ""){
//          winner();
//         return logReset()
//     }
//     else if($(".2").text() ===  $(".4").text() && $(".4").text() === $(".6").text() && $(".4").text() != ""){
//          winner();
//         return logReset()
//     }
//     else if(count === 9){
//         $(".winner").html("<h2>tie</h2>");
//         return logReset()
//     }
//     count++;
    
// }
// function logReset() {
//     setTimeout(function(){
//         count = 1;
//     $(".box  > div").html("");
//     $('.box > div').off()
//     return $('.box > div').on('click', game)
//     }, 800)
    
// }
// $('.box > div').on('click', game)

