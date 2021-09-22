const game = ()=>{
    let pScore = 0;
    let cScore = 0;

    //start the Game
    const startGame = ()=>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const matchScreen = document.querySelector('.match');

        playBtn.addEventListener('click', () =>{
            introScreen.classList.add('fadeOut');
            matchScreen.classList.add('fadeIn');
        });
    };

    //play Match;
    const playMatch = ()=>{
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        //computer Options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach((option)=>{
            option.addEventListener('click', function(){
                //computer choise;
                const computerNumber = Math.floor(Math.random()*3);
                const computerChoise = computerOptions[computerNumber];

                //here is where we calll compare hands
                compareHands(this.textContent, computerChoise);

                //update Images;
                playerHand.src = './assets/'+this.textContent+'.png';
                computerHand.src = `./assets/${computerChoise}.png`;
            })
        })
    };

    const updateScore = ()=> {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p')
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoise, computerChoise) =>{
        const winner = document.querySelector('.winner');
        //we are checking for a tie
        if(playerChoise === computerChoise){
            winner.textContent = "It is a tie";
            return ;
        }
        //check for rock
        if(playerChoise === 'rock'){
            if(computerChoise === 'scissors'){
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }
        //check for scissors
        if(playerChoise === 'scissors'){
            if(computerChoise === 'rock'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }
        //check for paper 
        if(playerChoise === 'paper'){
            if(computerChoise === 'scissors'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }
    }



    //Is call all the inner functions
    startGame();
    playMatch();
    
};


//start the game function
game();
