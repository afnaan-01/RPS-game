let choices = document.querySelectorAll('.choices > div');
let message = document.querySelector('.message');
let userScore = 0;
let compScore = 0;


    let draw = ()=>{
        message.innerHTML = `Draw`;
        message.style.backgroundColor = 'rgb(25, 39, 70)';
    };

    let result = (userWin,userChoice,compChoice)=>{
         if(userWin == true){
              userScore += 1;
              document.querySelector('#user-score').innerHTML = userScore;
              message.innerHTML = `Your ${userChoice} beats ${compChoice}`;
              message.style.backgroundColor = 'green';
         }
         else{
            compScore += 1;
            document.querySelector('#comp-score').innerHTML = compScore;
            message.innerHTML = `${compChoice} beats Your ${userChoice}`;
            message.style.backgroundColor = 'red';
         }
    }

   choices.forEach(choice =>{
        choice.addEventListener('click',()=>{
        let options = ['rock','paper','scissor'] 
        let userChoice = choice.id;
        let compChoice = options[Math.floor(Math.random() * 3)];

         if(userChoice === compChoice){
              draw();
         }
         else{
              let userWin = true;
              if(userChoice == 'rock'){
                    userWin = compChoice == 'scissor' ? true : false;
              }
              else if(userChoice == 'paper'){
                    userWin = compChoice == 'scissor' ? false : true;
              }
              else{
                    userWin = compChoice == 'paper' ? true : false;
              }
              result(userWin,userChoice,compChoice);
            }

        });
   });