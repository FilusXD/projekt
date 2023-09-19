const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade");

let numberOfCookies = 0;
let costOfClickUpgrade = 20;
let clickUpgradeIncrease = 1;


cookie.onclick = () => {
    console.log("click");
    numberOfCookies += clickUpgradeIncrease;
    console.log(numberOfCookies);
    counter.innerHTML = "FazCoins: " + numberOfCookies;
};

const clickUpgradeFunction = () => {
    if (numberOfCookies >= costOfClickUpgrade){
        //odečteme cenu upgradu
        // pocet susenek a odectu 20
        numberOfCookies -= costOfClickUpgrade;

        //aktualizace odstavce
        counter.innerText = "Fazcoins: " + numberOfCookies;
        //zvedneme pocet susenek na kliknutí
        clickUpgradeIncrease++;
    }
};

clickUpgrade.onclick = clickUpgradeFunction;

function cheats() {
    console.log("Cheats on");
    numberOfCookies += 1000000;
   counter.innerText = "Fazcoins: " + numberOfCookies;
}

const cheatsTwo = () => {
    numberOfCookies *= 2;
    counter.innerText = "Fazcoins: " + numberOfCookies;
}

