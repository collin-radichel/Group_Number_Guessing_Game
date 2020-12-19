

$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!");

  // getGuesses();


  $('#submitBtn').on('click', handleAddGuess);
}


let round = 0;

let guessToSend = [];


function handleAddGuess() {

  console.log('clicked submitBtn');

  //object to send to the server
  //equal to the values of 
  guessToSend =[ 
    {
      name: 'Collin',
      collinGuess: $('#collinGuess').val(),
    },
    {
      name: 'Nate',
      nateGuess: $('#nateGuess').val(),
    },
    {
      name: 'Sean',
      seanGuess: $('#seanGuess').val(),
    }
  ];
  console.log(guessToSend);

  //send to server

  $.ajax({
    url: '/sendGuessesToExpress',
    type: 'POST',
    //data becomes req.body on server
    data: {
      guessToSend
    }
  }).then(function (response) {
    console.log(response);
    //after success of POST, redo a GET
    getGuesses();
    clearInputs();
  })
  round++;
  appendRound();

}

function getGuesses() {
  // go to the server and ask for data
  //

  $.ajax({
    url: '/runGame',
    type: 'GET'
  }).then(function (response) {
    console.log(response);
    // for (let guess of response) {
    //   $()
    // }
  })
}



function appendRound() {
  $('.round').empty();
  $('.round').append(`
        <p>Round :${round}</p>
      `);
}

function clearInputs() {
  $('.playerInput').val('');
}