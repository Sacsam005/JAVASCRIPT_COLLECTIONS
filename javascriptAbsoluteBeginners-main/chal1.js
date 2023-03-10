/*  Coding Challenge1: we  give three parameters to a function, two numbers and an operator, 
now when the function operates, it will take the values from the console and perform the calculations accordingly.  */

function cal(a, b, opt) {
    switch(opt){
        case '+': 
            return console.log('Addition: ' + (a +b));
        case '-':
            return console.log('Subtraction: ' + (a - b));
        case '*':
            return console.log('Multiplication: ' + (a * b ));
        case '/':
            return console.log('Division: ' + (a / b));
        default :
            return console.log('Operator is incorrect');

            }       
}

cal(2,2, '/');
cal(2,2, '*');
cal(2,2, '-');
cal(2,2, '+');
