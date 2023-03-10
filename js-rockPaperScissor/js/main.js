//rock, paper, scissor challenge

function rpsGame(yourChoice) {
    console.log(yourChoice);

    var humanChoice, botChoice; // 
    humanChoice = yourChoice.id;   //
    
    botChoice = numberToChoice(randToRpsInt()); 
    console.log('computerChoice:', botChoice);
    
    results = decideWinner(humanChoice, botChoice); //[1,0]=human win   [0.5,0.5]=draw  [0,1]=human loss
    console.log(results);
    
    message=finalMessage(results);  //message = finalMessage(results);    m//you won   //you lost  //draw 
    console.log(message);
    
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {        //rpsFrontend(yourChoice.id, botChoice, message);
    return Math.floor(Math.random() *3);
       
}

function numberToChoice(number) {
    return['rock', 'paper', 'scissor'][number];
    
}
function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock':0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper':0.5, 'scissor': 0},
        'scissor': {'paper': 1, 'scissor': 0.5, 'rock': 0}
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    
return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {   //('message': You won!, 'color': 'green')
    if (yourScore===0) {
    return{'message': 'You Lost! Try again', 'color': 'red'};
    }
    else if (yourScore===1) {
    return{'message': 'Congrats! You won!', 'color': 'green'};
    } 
    else {
        return{'message': 'Draw!!!', 'color': 'yellow'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var ImgDatabase= {
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src,
}
        document.getElementById('rock').remove();
        document.getElementById('paper').remove();
        document.getElementById('scissor').remove();

        var humanDiv = document.createElement('div');
        var botDiv = document.createElement('div');
        var messageDiv = document.createElement('div');

        humanDiv.innerHTML = "<img src='" + ImgDatabase[humanImageChoice] + "' height=250, width=250 style='box-shadow: 0px 10px 50px rgba(30, 50, 200, 1);'>"
        messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 40px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
        botDiv.innerHTML = "<img src='" + ImgDatabase[botImageChoice] + "'height=250, width=250 style='box-shadow: 0px 10px 50px rgba(30, 50, 200, 1);'>"


        document.getElementById('flex-box-rps-div').appendChild(humanDiv);
        document.getElementById('flex-box-rps-div').appendChild(messageDiv);
        document.getElementById('flex-box-rps-div').appendChild(botDiv);
}
