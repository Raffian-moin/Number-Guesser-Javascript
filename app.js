//game values

let min=1,
	max=10,
	winningNum=2,
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


guessBtn.addEventListener('click',function(){
	let guess=parseInt(guessInput.value);

	if(isNaN(guess) || guess < min || guess > max){
		setMessage(`please enter a number between ${min} and ${max}`,'red')
		console.log('wrong');
	}

	if(guess===winningNum){
		gameOver(true,`Your guess is correct.You win!`)
	}else{
		guessesLeft-=1;
		if(guessesLeft===0){
			
			gameOver(false,`your guess is Wrong.YOU LOST!the correct number was ${winningNum}`);
		}else{

			guessInput.style.borderColor='red';

			guessInput.value='';

			setMessage(`your guess is Wrong.Your guess left is ${guessesLeft}`,'red')


		}
	}
});

function gameOver(won,msg){
	let color;
	won === true? color = "green" : color = "red";
	guessInput.disabled=true;
	guessInput.style.borderColor=color;

	setMessage(msg,color);
}

function setMessage(msg,color){
	message.style.color=color;
	message.textContent=msg;
}

