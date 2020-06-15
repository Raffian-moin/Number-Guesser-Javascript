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

	if(isNaN || guess < min || guess > max){
		setMessage(`please enter a number between ${min} and ${max}`,'red')
		console.log('wrong');
	}

	if(guess===winningNum){
		guessInput.disabled=true;
		guessInput.style.borderColor='green';

		setMessage(`your guess is right.YOU WIN!`,'green')
	}else{
		
	}
});

function setMessage(msg,color){
	message.style.color=color;
	message.textContent=msg;
}

