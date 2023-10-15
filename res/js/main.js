const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade");
const clickUpgrade2 = document.getElementById("clickUpgrade2");
const clickUpgrade3 = document.getElementById("clickUpgrade3");
const autoClickerUpgrade = document.getElementById("autoClickerUpgrade");
const autoClickerUpgrade2 = document.getElementById("autoClickerUpgrade2");
const autoClickerUpgrade3 = document.getElementById("autoClickerUpgrade3");
const micPrice = document.getElementById("micPrice")
const pizzaPrice = document.getElementById("pizzaPrice")
const phonePrice = document.getElementById("phonePrice")
const willPrice = document.getElementById("willPrice")
const markPrice = document.getElementById("markPrice")
const goldPrice = document.getElementById("goldPrice")


let numberOfCookies = 0;
let costOfClickUpgrade = 20;
let costOfClickUpgrade2 = 750;
let costOfClickUpgrade3 = 5000;
let clickUpgradeIncrease = 1;
let autoClickIncrease = 0;
let autoClickIncrease2 = 0;
let autoClickIncrease3 = 0;
let autoclicker;
let autoclickerCost = 100;
let autoclicker2Cost = 1000;
let autoclicker3Cost = 15000;


autoClickerUpgrade3.onclick = () => {
    if (numberOfCookies >= autoclicker3Cost){
        numberOfCookies -= autoclicker3Cost;
        autoclicker3Cost *= 2;
        autoClickerUpgrade.innerText = "Buy Freddy: " + autoclicker3Cost;
        counter.innerHTML = "FazCoins: " + numberOfCookies;
        goldPrice.innerText = "Cost: " + autoclicker3Cost;
        autoClickIncrease3++;
        autoClickIncrease3 += 199;
        clearInterval(autoclicker)
       autoclicker = setInterval(() => {
        numberOfCookies += autoClickIncrease3;
        numberOfCookies += autoClickIncrease2;
        numberOfCookies += autoClickIncrease;
         counter.innerHTML = "FazCoins: " + numberOfCookies;
        },  1000);
        
    } 
}


autoClickerUpgrade2.onclick = () => {
    if (numberOfCookies >= autoclicker2Cost){
        numberOfCookies -= autoclicker2Cost;
        autoclicker2Cost *= 2;
        autoClickerUpgrade.innerText = "Buy Markiplier upgrade: " + autoclicker2Cost;
        counter.innerHTML = "FazCoins: " + numberOfCookies;
        markPrice.innerText = "Cost: " + autoclicker2Cost;
        autoClickIncrease2++;
        autoClickIncrease2 += 9;
        clearInterval(autoclicker)
       autoclicker = setInterval(() => {
        numberOfCookies += autoClickIncrease3;
        numberOfCookies += autoClickIncrease2;
        numberOfCookies += autoClickIncrease;
         counter.innerHTML = "FazCoins: " + numberOfCookies;
        },  1000);
        
    } 
}


autoClickerUpgrade.onclick = () => {
    if (numberOfCookies >= autoclickerCost){
        numberOfCookies -= autoclickerCost;
        autoclickerCost *= 2;
        autoClickerUpgrade.innerText = "Buy William upgrade: " + autoclickerCost;
        counter.innerHTML = "FazCoins: " + numberOfCookies;
        willPrice.innerText = "Cost: " + autoclickerCost;
        autoClickIncrease++;
        autoClickIncrease += 0;
        clearInterval(autoclicker)
       autoclicker = setInterval(() => {
        numberOfCookies += autoClickIncrease3;
        numberOfCookies += autoClickIncrease;
        numberOfCookies += autoClickIncrease2;
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




clickUpgrade.onclick = () => {
    if (numberOfCookies >= costOfClickUpgrade){
        numberOfCookies -= costOfClickUpgrade;
        costOfClickUpgrade *= 2;
        counter.innerText = "FazCoins: " + numberOfCookies;
        clickUpgradeIncrease++;
        micPrice.innerText = "Cost: " + costOfClickUpgrade;
    }
};

clickUpgrade2.onclick = () => {
    if (numberOfCookies >= costOfClickUpgrade2){
        numberOfCookies -= costOfClickUpgrade2;
        costOfClickUpgrade2 *= 2;
        counter.innerText = "FazCoins: " + numberOfCookies;
        clickUpgradeIncrease += 24;
        pizzaPrice.innerText = "Cost: " + costOfClickUpgrade2;
    }
};

clickUpgrade3.onclick = () => {
    if (numberOfCookies >= costOfClickUpgrade3){
        numberOfCookies -= costOfClickUpgrade3;
        costOfClickUpgrade3 *= 2;
        counter.innerText = "FazCoins: " + numberOfCookies;
        clickUpgradeIncrease += 199;
        phonePrice.innerText = "Cost: " + costOfClickUpgrade3;
    }
};



function cheats() {
    console.log("Cheats on");
    numberOfCookies += 1000000;
   counter.innerText = "FazCoins: " + numberOfCookies;
};
