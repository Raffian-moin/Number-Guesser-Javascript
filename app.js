//game values

let min=1,
	max=7,
	winningNum=getWinningNum(min,max),
	guessesLeft=3;


//UI contstant

const game=document.getElementById('game');

const minNum=document.querySelector('.min-num');

const maxNum=document.querySelector('.max-num');

const guessInput=document.getElementById('guess-input');

const guessBtn=document.getElementById('guess-btn');

const message=document.querySelector('.message');


//assign ui min and max

minNum.textContent=min;
maxNum.textContent=max;

game.addEventListener('mousedown',function(e){
	if(e.target.className ==='play-again'){
		window.location.reload();
	}
})


guessBtn.addEventListener('click',function(){
	let guess=parseInt(guessInput.value);

	console.log(guess);

	if(isNaN(guess) || guess < min || guess > max){
		guessInput.value='';
		setMessage(`please enter a number between ${min} and ${max}`,'red');
	}else{
		if(guess===winningNum){
		gameOver(true,`Your guess is correct.You win!`)
	}else{
		guessesLeft-=1;
		if(guessesLeft===0){
			
			gameOver(false,`your guess is Wrong.YOU LOST!the correct number was ${winningNum}`);
		}else{

			guessInput.style.borderColor='red';

			guessInput.value='';

			setMessage(`your guess is Wrong.Your guess left is ${guessesLeft}`,'red');


		}
	}
}
	}

	);

function gameOver(won,msg){
	let color;
	won === true? color = "green" : color = "red";
	guessInput.disabled=true;
	guessInput.style.borderColor=color;

	setMessage(msg,color);

	guessBtn.value="Play again";

	guessBtn.className +='play-again';
}

function getWinningNum(min,max){
	// Math.floor(Math.random() * (max - min + 1) + min);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function setMessage(msg,color){
	message.style.color=color;
	message.textContent=msg;
}

