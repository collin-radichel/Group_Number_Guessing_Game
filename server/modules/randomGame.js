function randomGame(guessToSend, randomNum, dataHistory) {

    console.log(
        'logging: guessToSend:', guessToSend.guessToSend ,
        'logging: randomNum:', randomNum,
        'logging: dataHistory', dataHistory
    )

    guessToSend.forEach(guess => {

    console.log(`Collin's guess is:`, guess.collinGuess);
        if ( guess.collinGuess <  randomNum) {
            dataHistory.push({ number : guess.collinGuess, position : 'too low', class : 'low'});
        } else if (guess.collinGuess >  randomNum){
            dataHistory.push({ number : guess.collinGuess, position : 'too high', class : 'high'});
        } else if (guess.collinGuess ==  randomNum){
            dataHistory.push({ number : guess.collinGuess, position : 'correct', class : 'correct'});
        };

    console.log(`Nate's guess is:`, guess.nateGuess);
          if ( guess.nateGuess <  randomNum) {
            dataHistory.push({ number : guess.nateGuess, position : 'too low', class : 'low'});
        } else if (guess.nateGuess >  randomNum){
            dataHistory.push({ number : guess.nateGuess, position : 'too high', class : 'high'});
        } else if (guess.nateGuess ==  randomNum){
            dataHistory.push({ number : guess.nateGuess, position : 'correct', class : 'correct'});
        };

    console.log(`Sean's guess is:`, guess.seanGuess);
        if (guess.seanGuess <  randomNum) {
            dataHistory.push({ number : guess.seanGuess, position : 'too low', class : 'low'});
        } else if (guess.seanGuess >  randomNum){
            dataHistory.push({ number : guess.seanGuess, position : 'too high', class : 'high'});
        } else if (guess.seanGuess ==  randomNum){
            dataHistory.push({ number : guess.seanGuess, position : 'correct', class : 'correct'});
        };
    });
}

module.exports = randomGame;