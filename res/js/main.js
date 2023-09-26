const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade");
const autoClickerUpgrade = document.getElementById("autoClickerUpgrade");

let numberOfCookies = 0;
let costOfClickUpgrade = 20;
let clickUpgradeIncrease = 1;
let autoClickIncrease = 0;
let autoclicker;
let autoclickerCost = 100;

autoClickerUpgrade.onclick = () => {
    if (numberOfCookies >= autoclickerCost){
        //odecist cookies
        numberOfCookies -= autoclickerCost;
        autoclickerCost *= 2;
        autoClickerUpgrade.innerText = "Buy autoclick upgrade: " + autoclickerCost;
        //aktualizovat odstavec se susenkama
        counter.innerHTML = "FazCoins: " + numberOfCookies;
        autoClickIncrease++;
        //clear
        clearInterval(autoclicker);
        //spustit interval
       autoclicker = setInterval(() => {
            //zvednout o nejake cislo
        numberOfCookies += autoClickIncrease
            //aktualizovat odstavec
         counter.innerHTML = "FazCoins: " + numberOfCookies;
        }, 1000);
    } 
}
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
        counter.innerText = "FazCoins: " + numberOfCookies;
        //zvedneme pocet susenek na kliknutí
        clickUpgradeIncrease++;
    }
};

clickUpgrade.onclick = clickUpgradeFunction;

function cheats() {
    console.log("Cheats on");
    numberOfCookies += 1000000;
   counter.innerText = "FazCoins: " + numberOfCookies;
}

const cheatsTwo = () => {
    numberOfCookies *= 2;
    counter.innerText = "FazCoins: " + numberOfCookies;
}
cheats();
cheatsTwo();
