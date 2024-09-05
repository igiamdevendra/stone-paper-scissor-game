const computerOptions = ["rock", "paper", "scissor"];
const computerImg = document.querySelector('.leftHand');
const userImg = document.querySelector('.rightHand');
const resultText = document.getElementById('resultText');

function computerChoice() {
    const randomIndex = Math.floor(Math.random()*3);
    return computerOptions[randomIndex];
}

function checkResult(e) {
    const userChoosed = e.target.alt;
    const computerChoosed = computerChoice();

    computerImg.src = 'images/rock.png';
    userImg.src = 'images/rock.png';
    resultText.style.visibility = 'hidden';

    computerImg.classList.add('left-hand-animation');
    userImg.classList.add('right-hand-animation');

    setTimeout(()=> {
        computerImg.src = 'images/' + computerChoosed + '.png';
        userImg.src = 'images/' + userChoosed + '.png';
        resultText.style.visibility = 'visible';

        computerImg.classList.remove('left-hand-animation');
        userImg.classList.remove('right-hand-animation');
        
        if(userChoosed == computerChoosed) {
            resultText.innerHTML = "Draw"
        }
    
        else if(userChoosed == 'rock') {
            if(computerChoosed == "paper") {
                resultText.innerHTML = "Computer won";
            }
            else {
                resultText.innerHTML = "You won";
            }
        }
    
        else if(userChoosed == "paper") {
            if(computerChoosed == "rock") {
                resultText.innerHTML = "You won";
            }
            else{
                resultText.innerHTML = "Computer won";
            }
        }
    
        else if(userChoosed == "scissor") {
            if(computerChoosed == "rock") {
                resultText.innerHTML = "Computer won";
            }
            else{
                resultText.innerHTML = "You won";
            }
        }
    }, 1000);

    
}
    