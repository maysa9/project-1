
# Tic tac toe game project 


Introduction


its a tic tac toe game Requires 2 player 
and a counter to count the Winning and tie Rounds

# my Project Deployment 





# the Languages used in the Project :
* HTML
* CSS 
* JS 
* Jquery
* sound 
* animated 

___
# Wireframes and Stories :

* counting the score for each player.
* play reset button to play a new game.
* When the score apper the click should be off 
* adding a audio to react with the players
__
# the Developing stepes:
Starting with a simple HTML file and basic CSS.
Dividing my game into steps .
start with a o for the first click .
switching between X and O.
Recognise the winner and print it .
Get the score for each player and display it underneath the board.
restarting the game without refresh the page it self .
Adding audio when clicking on the divs and if someone wins .
____


[google](https://www.google.com/?hl=ar.)


# Interfaces :

# game Bored 
<img src="images/bored.png" alt="Kitten"
	title="game bored" width="400" height="400" />
```    
![Wireframe](images/bored.png)
```
___

### print the winner name using Jquery Function

```js 
winner=function(){
    if ( cur === true  ){
        audiow.play();
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
```
# Difficulties :
How to determine the correct boxs like when boxs matched or not.

# Unsolved and Uncomplicated Features :
add option if the user want to play with (X or O) or with images or their names.
add a timer
