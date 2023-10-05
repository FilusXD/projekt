const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade");
const autoClickerUpgrade = document.getElementById("autoClickerUpgrade");
const autoClickerUpgrade2 = document.getElementById("autoClickerUpgrade2");

let numberOfCookies = 0;
let costOfClickUpgrade = 20;
let clickUpgradeIncrease = 1;
let autoClickIncrease = 0;
let autoClickIncrease2 = 0;
let autoclicker;
let autoclickerCost = 100;
let autoclicker2Cost = 1000;


autoClickerUpgrade2.onclick = () => {
    if (numberOfCookies >= autoclicker2Cost){
        numberOfCookies -= autoclicker2Cost;
        autoclicker2Cost *= 2;
        autoClickerUpgrade.innerText = "Buy Markiplier upgrade: " + autoclicker2Cost;
        counter.innerHTML = "FazCoins: " + numberOfCookies;
        autoClickIncrease2++;
        autoClickIncrease2 += 9;
        clearInterval(autoclicker)
       autoclicker = setInterval(() => {
        numberOfCookies += autoClickIncrease2;
        numberOfCookies += autoClickIncrease;
         counter.innerHTML = "FazCoins: " + numberOfCookies;
        },  1000);
        
    } 
}


autoClickerUpgrade.onclick = () => {
    if (numberOfCookies >= autoclickerCost){
        //odecist cookies
        numberOfCookies -= autoclickerCost;
        autoclickerCost *= 2;
        autoClickerUpgrade.innerText = "Buy William upgrade: " + autoclickerCost;
        //aktualizovat odstavec se susenkama
        counter.innerHTML = "FazCoins: " + numberOfCookies;
        autoClickIncrease++;
        autoClickIncrease += 0;
        //clear
        clearInterval(autoclicker)
        //spustit interval
       autoclicker = setInterval(() => {
            //zvednout o nejake cislo
        numberOfCookies += autoClickIncrease;
        numberOfCookies += autoClickIncrease2;
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
        costOfClickUpgrade *= 2;
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