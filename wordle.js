var wordIndex;
var playerGuesses = 0;
var answersHistory = "";
var answer;
var playerAnswer;
var numberOfMatch = 0;

//random number
function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // inclusive on min and max
}

//this function will check if player has
//been won or not
function checkGameState(){
    //local variable
    var playerStatus ="";

    //checking if player has been win or not
    if(numberOfMatch != 5){
        if(playerGuesses == 6){
            playerStatus = "Харамсалтай байна, Та ялагдлаа.<br>";
            playerStatus += "Зөв хариулт нь " + answer + ".";

            idShowMessage.innerHTML = output;
            idStartGame.value = "Таах";
            playerGuesses = 0;
            answersHistory = "";
            playerAnswer = "";
            numberOfMarch = 0;
        }
        else{
            playerStatus = "Та буруу таасан байна."
        }
    }
    else{
        playerStatus = "Гайхалтай, Та үгийг олж чадлаа.";
        idStartGame.value = "Таах";
        playerGuesses = 0;
        answersHistory = "";
        playerAnswer = "";
        numberOfMarch = 0;
    }

    //displaying
    idShowMessage.innerHTML = playerStatus;

}

//This function will start the game
function startGame(){
    playerAnswer = idPlayerAnswer.value;
    if(playerGuesses == 0){
        //making answer
        wordIndex = randomInt(0, wordArray.length-1);
        answer = wordArray[wordIndex];
        
        //console
        console.log(answer);

        //This will change our start Game button
        idStartGame.value = "Таах"
    }
    checkMatch(playerAnswer);
    idPlayerAnswer.value = "";
}

//This function will check the match
function checkMatch(){
    //This will add 1 to playerGuesses
    //local variable
    var matchArray = [];

    //The global variables that changes
    numberOfMatch = 0;
    playerGuesses++;
    //Making player's answer all uppercase
    playerAnswer = playerAnswer.toUpperCase();

    //Spliting player's and correct word.
    playerGuessArray = playerAnswer.split("");
    correctAnswerArray = answer.split("");

    //checking match
    //checking match
    for(var i = 0; i <=4; i++){
        if(playerGuessArray[i] == correctAnswerArray[i]){
            playerGuessArray[i] = "<green>"+ playerGuessArray[i] + "</green>"
            numberOfMatch++;
            matchArray.push(i);
        }
    }

    //chacking is there is match but in different place
    for(var i = 0; i <= 4; i++){
        for(var j = 0; j <= 4; j++){
            if(playerGuessArray[i] == correctAnswerArray[j]){
                //checking if matchArray have this or not
                var check = matchArray.includes(j)
                if(check == false){
                    //if its not in matchArray this function will put into it
                    matchArray.push(j)

                    //coloring with color yellow if its match but in different place
                    playerGuessArray[i] = "<yellow>" + playerGuessArray[i] + "</yellow>"
                }
            }
        }
    }

    //putting back them together
    playerGuessArray = playerGuessArray.join("");

    //display show
    answersHistory += "Guess #"+ playerGuesses +": " + playerGuessArray +"<br>"

    //This will display
    idShowHistory.innerHTML = answersHistory;
    checkGameState();
    console.log(playerGuessArray)
    console.log(correctAnswerArray)
    console.log(numberOfMatch)
    console.log(matchArray)
}