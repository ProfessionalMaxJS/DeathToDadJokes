let marks = document.getElementById("marks");
let fives = document.getElementById("fives");
let ones = document.getElementById("ones");

let featJoke = document.getElementById("feat-joke");
let featSetup = document.getElementById("feat-setup");
let featPunchline = document.getElementById("feat-punchline");

let punchButton = document.getElementById("punch-button");
let jokeStr = "";

const likeButton = document.getElementById("like-button");

let totalVal = 0;

likeButton.addEventListener("click", event =>{
    totalVal+=1;
    tallyMark(totalVal);
    newJoke();
})

function tallyMark(count){
    console.log(count);
    let quotient = Math.floor(count/5);
    console.log(quotient);
    let remainder = (count%5);
    console.log(remainder);
    let tally = ""
    let tallies = ""

for(let i=0; i<quotient; i++){
    fives.textContent="";
    ones.textContent="";
    tallies += "||||  ";
    fives.append(tallies);
}
for(let k=0; k<remainder; k++){
    ones.textContent="";
    tally += "|"
    ones.append(tally);
}}

function newJoke(){
    fetch("https://icanhazdadjoke.com",{headers: {"Content-Type":"application/json", "Accept":"application/json"}})
    .then(resp => resp.json())
    .then(data => {
        punchButton.classList.add("hide-me");
        featPunchline.textContent = "";
        console.log(data.joke)
        jokeStr = data.joke;    
    if (data.joke.includes("?")){
        let parsedJoke = data.joke.split("?");
        featSetup.textContent=`${parsedJoke[0]}?`
        jokeStr = `${parsedJoke[1]}`
        punchButton.classList.remove("hide-me");
    }
    else{
        featSetup.textContent = jokeStr;
    }})
}



punchButton.addEventListener("click", (event)=>{
   featPunchline.textContent = jokeStr;
   punchButton.classList.add("hide-me");
})
