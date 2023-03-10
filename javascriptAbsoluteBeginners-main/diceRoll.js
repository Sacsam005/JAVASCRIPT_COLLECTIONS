/*  Function to create a dice roll, problem here is that while generating a random number we gotta take care of the decimal values and control it using Math.floor also, 
we gotta add 1 add the end of our functional statement so as to avoid 0 cause everytime Math.random function generates random no, it could also generate 0 which we dont 
wanna happen, so +1 makes it greater than 0 and meaningful as dice roll does not have value 0 in real  */

function random(side) {     //Math.random generates random values
    var dice=Math.floor((Math.random() *side) + 1); //Math.floor brings down the decimal value rounding off to the least integer
    return console.log(dice);   
}

random(6);
