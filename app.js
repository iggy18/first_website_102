'use strict'

var username = prompt('Please Enter Your Name: ');

alert('Hello ' + username);

if (username === 'Maddy'){
    document.write('<h2>' + 'Welcome Beautiful' + '</h2>');
} else if (username === 'Cedar'){
        document.write('<h2>' + 'HOW ARE YOU USING THIS PHONE!?!?' + '</h2>');
} else {
    document.write( '<h2>' + 'welcome ' +username + '</h2>');
}

var food = prompt('how many times have you fed cedar today?: ');

if (food === '4'){
    document.write('<h2>' + 'Cedar is a well fed dog' + '</h2>');
} else {
    document.write( '<h2>' + username + ', Cedar might be hungry'+ '</h2>');
}