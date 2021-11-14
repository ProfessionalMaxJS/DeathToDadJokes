const werewolf = new Audio(src = ".audio/werewolf.wav");
document.body.appendChild(werewolf);
const lightning = new Audio(src = "./audio/lightning.m4a");
document.body.appendChild(lightning);
const witch = new Audio (src = "./audio/witch.mp3");
document.body.appendChild(witch);

const like5 = document.getElementById("like-5");
const like1 = document.getElementById("like-1");

const kill1 = document.getElementById("kill-1");
const kill5 = document.getElementById("kill-5");

const featJoke = document.getElementById("feat-joke");
const setups = document.getElementById("setups");
const punchlines = document.getElementById("punchlines");

setups.textContent = "I got told off by a javascript function the other day."
let jokeStr = "She said, 'I ain't no calla-back girl!'";
const punchButton = document.getElementById("punch-button");
punchButton.classList.remove("hide-me");
punchlines.textContent="";
const likeBtn = document.getElementById("like-btn");
const killBtn = document.getElementById("kill-btn");
const resetBtn = document.getElementById('reset-btn');
let likeVal = 0;
let killVal = 0;

likeBtn.addEventListener("click", event =>{
    witch.play();
    likeVal+=1;
    tallyMark(likeVal, like1, like5);
    newJoke();
})
killBtn.addEventListener("click", event =>{
    werewolf.play();
    killVal +=1;
    console.log(killVal);
    tallyMark(killVal, kill1, kill5);
    newJoke();
})

function tallyMark(count, ones, fives){
    console.log(count);
    let quotient = Math.floor(count/5);
    console.log(quotient);
    let remainder = (count%5);
    console.log(remainder);
    let tally = ""
    let tallies = ""
    fives.textContent = "";
    ones.textContent = "";

for(let i=0; i<quotient; i++){
    tallies += "||||  ";
}
for(let k=0; k<remainder; k++){
    tally += "|"
}
fives.append(tallies);
ones.append(tally);
}

function newJoke(){
    fetch("https://icanhazdadjoke.com",{headers: {"Content-Type":"application/json", "Accept":"application/json"}})
    .then(resp => resp.json())
    .catch(err => {
        console.error(err);
        setups.textContent = `${err}; please try again`
    })
    .then(data => {
        punchButton.classList.add("hide-me");
        punchlines.textContent = "";
        console.log(data.joke)
        jokeStr = data.joke;    
    if (jokeStr.includes("?")){
        let parsedJoke = jokeStr.split("?");
        setups.textContent=`${parsedJoke[0]}?`
        jokeStr = `${parsedJoke[1]}`
        punchButton.classList.remove("hide-me");
    }
    else{
        setups.textContent = jokeStr;
    }})
}

punchButton.addEventListener("click", (event)=>{
punchlines.textContent = jokeStr;
punchButton.classList.add("hide-me");
})

resetBtn.addEventListener('click', () => {
    lightning.play();
    likeVal = 0
    killVal = 0
    like1.textContent = ""
    kill1.textContent = ""
    like5.textContent = ""
    kill5.textContent = ""
    console.log('hi')
})