var teamAscore = 0;
var teamBscore = 0;

function goalteamA() {
    teamAscore++
    document.getElementById("teamAscore").innerHTML = teamAscore;
}

function goalteamB() {
    teamBscore++
    document.getElementById("teamBscore").innerHTML = teamBscore;
}

function teamAminus() {
    teamAscore--
    document.getElementById("teamAscore").innerHTML = teamAscore;
}

function teamBminus() {
    teamBscore--
    document.getElementById("teamBscore").innerHTML = teamBscore;
}

function teamAmanualscore() {
    manualscoreA = prompt("Enter Team A score");
    if(isNaN(manualscoreA)) {
        alert("Score must be number");
        console.log("Entered not number");
    } else {
        teamAscore = manualscoreA;    
        console.log("Entered number");    
    }
    document.getElementById("teamAscore").innerHTML = teamAscore;
}

function teamBmanualscore() {
    manualscoreB = prompt("Enter Team B score");
    if(isNaN(manualscoreB)) {
        alert("Score must be number");
        console.log("Entered not number");
    } else {
        teamBscore = manualscoreB;
        console.log("Entered number");
    }
    document.getElementById("teamBscore").innerHTML = teamBscore;
}

function editTeamAName() {
    document.getElementById("teamAname").innerHTML = prompt("Enter team name");
}

function editTeamBName() {
    document.getElementById("teamBname").innerHTML = prompt("Enter team name");
}