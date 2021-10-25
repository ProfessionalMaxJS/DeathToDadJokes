let marks = document.createElement("div");
document.body.appendChild(marks);
let fives = document.createElement("span");
fives.classList.add("line-thru");
marks.appendChild(fives);
let ones = document.createElement("span");
ones.classList.add("red");
marks.appendChild(ones);

let testSubject = Math.ceil(Math.random()*100);

console.log(testSubject);
let quotient = Math.floor(testSubject/5);
console.log(quotient);
let remainder = (testSubject%5);
console.log(remainder);

for(let i=0; i<quotient; i++){
    let tallies = "";    
    tallies += "||||  ";
    fives.append(tallies);
}
for(let k=0; k<remainder; k++){
    let tally = "";
    tally += "|"
    ones.append(tally);
}

let featJoke = document.createElement("div");
document.body.appendChild(featJoke);
let featSetup = document.createElement("p");
featJoke.appendChild(featSetup);
let featPunchline = document.createElement("p");
featJoke.appendChild(featPunchline);

let punchButton = document.getElementById("punch-button");
let jokeObj = {};
let jokeStr = "";
console.log(jokeStr);

fetch("https://icanhazdadjoke.com",{headers: {"Content-Type":"application/json", "Accept":"application/json"}})
.then(resp => resp.json())
.then(data => {
    punchButton.classList.add("hide-me");
    console.log(data.joke)
    jokeObj = data;
    jokeStr = data.joke;    
if (data.joke.includes("?")){
    let parsedJoke = data.joke.split("?", 2);
    featSetup.textContent=`${parsedJoke[0]}?`
    jokeStr = `${parsedJoke[1]}`
    punchButton.classList.remove("hide-me");
}
else{
    featSetup.textContent = jokeStr;
}})

punchButton.addEventListener("click", (event)=>{
    punchButton.classList.add("hide-me");
    featPunchline.textContent = jokeStr;
})

    // featPunchline.textContent = `${parsedJoke[1]}`
    // jokeStr = parsedJoke[1];
    // console.log(jokeStr);

    