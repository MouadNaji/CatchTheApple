window.addEventListener("load", start);
let timeLeft = 60;


function tidenGaar() {

    timeLeft--;
    console.log(timeLeft);

    if (timeLeft > 0) {
        setTimeout(tidenGaar, 1000);
    } else {
        gameOver();
    };

    document.querySelector("#tid").textContent = timeLeft;

}


function levelComplete() {
    console.log("levelComplete");
    document.querySelector("#game").classList.add("hide");
    document.querySelector("#settings").classList.add("hide");
    document.querySelector("#gameover").classList.add("hide");
    document.querySelector("#playagain").addEventListener("click", playAgain);
    document.querySelector("#playagain").classList.remove("hide");
    document.querySelector("#playagain2").classList.add("hide");
    document.querySelector("#settings").classList.add("hide");
    document.querySelector("#slukknap").classList.add("hide");
}

function playAgain() {
    console.log("click replay");
    window.location.reload(false);

}






let point = 0;

function pointTæller() {
    console.log("pointTæller");

    point++;
    console.log(point);

    document.querySelector(".antal").textContent = point;
}
let life = 3;

function lifeTæller() {
    console.log("lifeTæller");

    life--;
    console.log(life);

    document.querySelector(".antalminus").textContent = life;
}

function gameStatus() {
    if (life < 1) {
        gameOver();
    }
    if (point == 20) {
        levelComplete();
    }
}

function gameOver() {
    console.log("gameOver");
    document.querySelector("#game").classList.add("hide");
    document.querySelector("#settings").classList.add("hide");
    document.querySelector("#playagain2").addEventListener("click", playAgain);
    document.querySelector("#playagain2").classList.remove("hide");
    document.querySelector("#playagain").classList.add("hide");
    document.querySelector("#settings").classList.add("hide");
    document.querySelector("#slukknap").classList.add("hide");
}

showStart();

function showStart() {
    console.log("showStart");
    //her ser man startskærmen og start knappen med en animation
    document.querySelector("#play_knap").classList.add("pulse");
    document.querySelector("#play_knap").addEventListener("click", hideStart);
    document.querySelector("#play_knap").addEventListener("click", startGame);
    document.querySelector("#play_knap").addEventListener("click", startMusic);
    document.querySelector("#settingsknap").addEventListener("click", showsettings2);
    document.querySelector("#settingsknap").classList.remove("hide");
}

function startMusic() {
    document.querySelector("#myMusic").play();
}

function hideStart() {
    console.log("hideStart");
    document.querySelector("#start").classList.add("hide");
    //her fadder skræmen ud
}

function startGame() {
    console.log("startGame");
    //her forsvinder startskærmen og soil skærmen kommer frem
    document.querySelector("#game").classList.remove("hide");
    document.querySelector("#playagain").classList.add("hide");
    tidenGaar();
}

function start() {
    document.querySelector("#aeble1").classList.add("falling1");
    document.querySelector("#aeble2").classList.add("falling2");
    document.querySelector("#aeble3").classList.add("falling3");
    document.querySelector("#aeble4").classList.add("falling4");
    document.querySelector("#aeble11").classList.add("falling5");
    document.querySelector("#aeble22").classList.add("falling6");





    document.querySelector("#aeble1").addEventListener("click", aeble1dis);
    document.querySelector("#aeble2").addEventListener("click", aeble2dis);
    document.querySelector("#aeble3").addEventListener("click", aeble3dis);
    document.querySelector("#aeble4").addEventListener("click", aeble4dis);
    document.querySelector("#aeble11").addEventListener("click", aeble11dis);
    document.querySelector("#aeble22").addEventListener("click", aeble22dis);
    document.querySelector("#aeble3").addEventListener("click", pointTæller);
    document.querySelector("#aeble4").addEventListener("click", pointTæller);
    document.querySelector("#aeble1").addEventListener("click", lifeTæller);
    document.querySelector("#aeble2").addEventListener("click", lifeTæller);
    document.querySelector("#aeble11").addEventListener("click", lifeTæller);
    document.querySelector("#aeble22").addEventListener("click", lifeTæller);
    document.querySelector("#settingsknap").addEventListener("click", showsettings);
    document.querySelector("#settings").classList.add("hide");
    document.querySelector("#slukknap").classList.add("hide");

}






function aeble1dis() {
    console.log("aeble1dis");
    document.querySelector("#aeble1").classList.add("paused");
    document.querySelector(".aeble1_sprite").classList.add("dissappear");
    document.querySelector("#aeble1").addEventListener("animationend", foodClick);
    document.querySelector("#aeble1").addEventListener("animationend", aeble1Forsvind);
}

function aeble2dis() {
    console.log("aeble1dis");
    document.querySelector("#aeble2").classList.add("paused");
    document.querySelector(".aeble2_sprite").classList.add("dissappear");
    document.querySelector("#aeble2").addEventListener("animationend", foodClick);
    document.querySelector("#aeble2").addEventListener("animationend", aeble2Forsvind);
}

function aeble3dis() {
    console.log("aeble1dis");
    document.querySelector("#aeble3").classList.add("paused");
    document.querySelector(".aeble3_sprite").classList.add("dissappear");
    document.querySelector("#aeble3").addEventListener("animationend", foodClick);
    document.querySelector("#aeble3").addEventListener("animationend", aeble3Forsvind);
}

function aeble4dis() {
    console.log("aeble1dis");
    document.querySelector("#aeble4").classList.add("paused");
    document.querySelector(".aeble4_sprite").classList.add("dissappear");
    document.querySelector("#aeble4").addEventListener("animationend", foodClick);
    document.querySelector("#aeble4").addEventListener("animationend", aeble4Forsvind);
}

function aeble11dis() {
    console.log("aeble11dis");
    document.querySelector("#aeble11").classList.add("paused");
    document.querySelector(".aeble11_sprite").classList.add("dissappear");
    document.querySelector("#aeble11").addEventListener("animationend", foodClick);
    document.querySelector("#aeble11").addEventListener("animationend", aeble11Forsvind);
}

function aeble22dis() {
    console.log("aeble22dis");
    document.querySelector("#aeble22").classList.add("paused");
    document.querySelector(".aeble22_sprite").classList.add("dissappear");
    document.querySelector("#aeble22").addEventListener("animationend", foodClick);
    document.querySelector("#aeble22").addEventListener("animationend", aeble22Forsvind);
}

function aeble1Forsvind() {
    document.querySelector("#aeble1").classList.remove("paused");
    document.querySelector(".aeble1_sprite").classList.remove("dissappear");
    console.log("aebleForsvind");
    let fallingNumber = Math.floor((Math.random() * 12) + 1);
    console.log("falder 1234" + fallingNumber);
    this.classList = "falling" + fallingNumber;
    gameStatus();
    document.querySelector("#aeble1").addEventListener("animationend", foodClick);

}



function aeble2Forsvind() {
    console.log("aebleForsvind");
    document.querySelector("#aeble2").classList.remove("paused");
    document.querySelector(".aeble2_sprite").classList.remove("dissappear");

    let fallingNumber = Math.floor((Math.random() * 12) + 1);
    console.log("falder 1234" + fallingNumber);
    this.classList = "falling" + fallingNumber;
    gameStatus();
    document.querySelector("#aeble2").addEventListener("animationend", foodClick);
}

function aeble3Forsvind() {
    document.querySelector("#aeble3").classList.remove("paused");
    document.querySelector(".aeble3_sprite").classList.remove("dissappear");
    console.log("aebleForsvind");
    let fallingNumber = Math.floor((Math.random() * 12) + 1);
    console.log("falder 1234" + fallingNumber);
    this.classList = "falling" + fallingNumber;
    gameStatus();

    document.querySelector("#aeble3").addEventListener("animationend", foodClick);
}

function aeble4Forsvind() {
    document.querySelector("#aeble4").classList.remove("paused");
    document.querySelector(".aeble4_sprite").classList.remove("dissappear");
    console.log("aebleForsvind");
    let fallingNumber = Math.floor((Math.random() * 12) + 1);
    console.log("falder 1234" + fallingNumber);
    this.classList = "falling" + fallingNumber;
    gameStatus();
    document.querySelector("#aeble4").addEventListener("animationend", foodClick);

}

function aeble11Forsvind() {

    console.log("aebleForsvind");
    let fallingNumber = Math.floor((Math.random() * 12) + 1);
    console.log("falder 1234" + fallingNumber);
    this.classList = "falling" + fallingNumber;

}

function aeble22Forsvind() {
    console.log("aebleForsvind");
    let fallingNumber = Math.floor((Math.random() * 12) + 1);
    console.log("falder 1234" + fallingNumber);
    this.classList = "falling" + fallingNumber;
    gameStatus();

}



function showsettings() {
    console.log("slololo");
    document.querySelector("#settings").classList.remove("hide");
    document.querySelector("#slukknap").classList.remove("hide");
    document.querySelector("#game_elements").classList.add("hide");
    document.querySelector("#game_ui").classList.add("hide");
    document.querySelector("#slukknap").addEventListener("click", hidesettings);
    gameStatus();
}

function showsettings2() {
    console.log("settings2");
    document.querySelector("#settings").classList.remove("hide");
    document.querySelector("#slukknap").classList.remove("hide");
    document.querySelector("#slukknap").addEventListener("click", hidesettings);
    document.querySelector("#settings_screen").classList.remove("hide");
    gameStatus();

}

function hidesettings() {
    console.log("hidesettings");
    document.querySelector("#settings").classList.add("hide");
    document.querySelector("#slukknap").classList.add("hide");
    document.querySelector("#game_elements").classList.remove("hide");
    document.querySelector("#game_ui").classList.remove("hide");
    gameStatus();
}

function foodClick() {
    console.log("foodClick");

    if (this.classList.contains("greenaeble")) {
        document.querySelector("#haps1").currentTime = 0;
        document.querySelector("#haps1").play();
    } else if (this.classList.contains("redaeble")) {
        document.querySelector("#prut1").currentTime = 0;
        document.querySelector("#prut1").play();
    }
}
