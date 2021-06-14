const cross = document.querySelector('.cursor');
const target = document.querySelector('.target');
const scoreText = document.querySelector('.score');
const timerText = document.querySelector('.timer');
const highscoreText = document.querySelector('.highscore');
const gunshot = document.querySelector('.gunshot');
const gameover = document.querySelector('.gameover');


var score = 0;
var timerLeft = 7;
var highscore = 0;

window.onload = ()=>{
    if(localStorage.getItem('highscore')){
        highscore = localStorage.getItem('highscore');
        highscoreText.innerHTML = `Highscore ${highscore}`;
    }
    
    scoreText.innerHTML = score;
    timerText.innerHTML = timerLeft;
    changePosition();
    play();
}
const play = ()=>{
    setInterval(()=>{
        timer()
    },1000);
}
const gameOver = ()=>{
    alert(`Game Over \n Your Score = ${score}`);
    if(+localStorage.getItem('highScore') < score){
        localStorage.setItem('highscore', score);
        highscore = score;
        highscoreText.innerHTML = `Highscore ${highscore}`;
    }
    score = 0;
    timeLeft = 7+2;
    scoreText.innerHTML = score;
    timerText.innerHTML = timeLeft;
}
const timer = ()=>{
    if(timerLeft === 0){
        gameover.play();
        gameOver();
        timerLeft = 7+2;
    }
    timerLeft -= 1;
    timerText.innerHTML = timerLeft;
}

document.addEventListener('mousemove',(e)=>{
    cross.style.left = `${e.clientX}px`;
    cross.style.top = `${e.clientY}px`;
});

const changePosition = ()=>{
    const xAxis = Math.floor(Math.random()* 1880);
    const yAxis = Math.floor(Math.random()* 577);
    target.style.top = `${yAxis}px`;
    target.style.left = `${xAxis}px`
};

const scoreIncrease = ()=>{
    gunshot.currentTime = 0;
    gunshot.play();
    score += 1;
    scoreText.innerHTML = score;
    changePosition();
}

target.addEventListener('click', scoreIncrease);