let secret = document.querySelector(".secret");

let secretNumber = Math.trunc(Math.random()*20) + 1;
let check = document.querySelector(".check");
let message = document.querySelector(".message");
let score = 20;

let guess = parseInt(document.querySelector(".guess").value);
check.addEventListener("click",guessFunction());

   
    function guessFunction(){
        
      
    
        if (!guess){
        message.textContent = "Please enter a number";
        console.log("I am clicked");
    }
    else if(guess === secretNumber ){
        message.textContent = "Correct Number";
        secret.textContent = secretNumber;
        check.classList.add("hidden");
    }
    else if(guess > secretNumber){
        if (score > 1){
            message.textContent = "Too High";
            score = score-1; 
            document.querySelector(".score").textContent = score;
        }
        else{
            message.textContent = "You lost the game";
            document.querySelector(".score").textContent = 0;
            check.classList.add("hidden");
        }
    }
    else if(guess < secretNumber){
        if (score > 1){
            message.textContent = "Too Low";
            score = score-1; 
            document.querySelector(".score").textContent = score;
        }
        else{
            message.textContent = "You lost the game";
            document.querySelector(".score").textContent = 0;
            check.classList.add("hidden");
        }
    }
    }