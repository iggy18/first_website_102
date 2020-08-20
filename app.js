'use strict'

function askuserforname(){
    var username = prompt('Please Enter Your Name: ');
    alert('Hello ' + username);
    return username;
}


var username = askuserforname();

function whoareyou(){
    if (username === 'Maddy'){
        document.write('<h2>' + 'Welcome Beautiful' + '</h2>');
    } else if (username === 'Cedar'){
        document.write('<h2>' + 'HOW ARE YOU USING THIS PHONE!?!?' + '</h2>');
    } else {
        document.write( '<h2>' + 'welcome ' +username + '</h2>');
        return username;
    }
}

var response = whoareyou();


var food = prompt('how many times have you fed cedar today?: ');

if (food === '4'){
    document.write('<h2>' + 'Cedar is a well fed dog' + '</h2>');
} else {
    document.write( '<h2>' + username + ', Cedar might be hungry'+ '</h2>');
}

// 5 chances to guess correct answer 1-100
// if they get the right answer tell them
// if they do not tell them low or innerHeight
// after 5 inccorct tries give them the answer

function numberguessinggame(){
    var correctanswer = 42;
    var playgame = prompt ('Would you like to know the answer to life, the universe, and everything?');
    while(playgame === 'yes'){
        for(var i = 0; i < 5; i = i + 1){
            var userguess = parseInt(prompt("please enter a number 1-100"));
            if(userguess === correctanswer){
                alert('You guessed correct! So long and thanks for all the fish!')
                break;
            } else if (userguess < correctanswer){
                alert('How many roads must a man walk down?')
            } else if( userguess > correctanswer){
                alert('How many Vogons does it take to change a lightbulb?')
            }
            if(i === 4){
                alert('The correct answer is' + correctanswer);
            }
        }
        playgame = prompt('Did you forget your towel?')
    } 
}

numberguessinggame();