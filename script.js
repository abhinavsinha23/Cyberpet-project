const body = document.getElementsByTagName("body");
const createBtn = document.getElementById("createBtn");
const images = document.querySelectorAll("img");
const pet = document.getElementsByName("pet");
// const difficulty = document.getElementsByName("difficulty");
const bottomSection = document.getElementById("bottom-section");
const petName = document.getElementById("petName");
const subtitle = document.getElementById("subtitle");
const petProfile = document.getElementById("petProfile");
const statbars = document.querySelectorAll(".stat-bar");
const healthDecreaseRate = 5;
const funDecreaseRate = 3;
const fitnessDecreaseRate = 2;
const foodWaterDecreaseRate = 4;
const energyDecreaseRate = 1;
const music = document.getElementById("8bitMusic");
const gameOver = document.getElementById("gameOver");
const options = document.getElementById("options");
const retryBtn = document.getElementById("retryBtn");

let timer;

const healthBar = document.getElementById('healthBar');
const healthBtn = document.getElementById('healthBtn');

const funBar = document.getElementById('funBar');
const funBtn = document.getElementById('funBtn');

const fitnessBar = document.getElementById('fitnessBar');
const fitnessBtn = document.getElementById('fitnessBtn');

const foodWaterBar = document.getElementById('foodWaterBar');
const foodWaterBtn = document.getElementById('foodWaterBtn');

const energyBar = document.getElementById('energyBar');
const energyBtn = document.getElementById('energyBtn');

// decreaseTime = [300, 500, 700];

selectionIndex = [];
selectionIndex.length = pet.length;

retryBtn.addEventListener("click", () => {
    window.location.reload();
})

function checkZero(value) {
    return value == 0;
}

for (let i = 0; i < selectionIndex.length; i++) {
    selectionIndex[i] = 0;
}
createBtn.addEventListener("click", () => {
    
    for (var i = 0; i < pet.length; i++) {
        if (pet[i].checked != true) {
            selectionIndex[i] = 0;
        }
        else {
            selectionIndex[i] = 1;
        }
    }
    if (selectionIndex.every(checkZero)) {
        alert("You haven't selected an animal!")
    }
    else if (petName.value == ""){
        alert("You haven't named your pet!")
    }
    // else if ((difficulty[0].checked != true) && (difficulty[1].checked != true) && (difficulty[2].checked != true)){
    //     alert("You haven't selected a difficulty level!");
    // }
    else{
        music.play();
        for (i = 0; i < pet.length; i++) {
            if (pet[i].checked){
                subtitle.textContent = `${petName.value} the ${pet[i].value}`
            }
        }
        for (i = 0; i < selectionIndex.length; i++) {
            if (selectionIndex[i] == 1) {
                showImage(i);
            }
        }
        
        let health = 100;
        let fun = 100;
        let fitness = 100;
        let foodWater = 100;
        let energy = 100;

        // Function to update the decrease rate text for each stat
        function updateDecreaseRates() {
        document.getElementById('healthDecreaseRate').innerText = `- ${healthDecreaseRate} / 10s`;
        document.getElementById('funDecreaseRate').innerText = `- ${funDecreaseRate} / 10s`;
        document.getElementById('fitnessDecreaseRate').innerText = `- ${fitnessDecreaseRate} / 10s`;
        document.getElementById('foodWaterDecreaseRate').innerText = `- ${foodWaterDecreaseRate} / 10s`;
        document.getElementById('energyDecreaseRate').innerText = `- ${energyDecreaseRate} / 10s`;
        }

        // Function to update the stat values and bars every 10 seconds
        function decreaseStats() {

            health -= healthDecreaseRate;
            if (health < 0) {
                music.pause();
                gameOver.play();
                // body.style.backgroundColor = "red";
                health = 0;
                subtitle.textContent = `${petName.value} died`
                for (i = 0; i < statbars.length; i++) {
                    statbars[i].remove();
                }
                options.style.display = "flex";
                clearInterval(timer);
                return;
            }
            healthBar.value = health;

            fun -= funDecreaseRate;
            if (fun < 0) {
                music.pause();
                gameOver.play();
                // body.style.backgroundColor = "red";
                fun = 0;
                subtitle.textContent = `${petName.value} is bored`
                for (i = 0; i < statbars.length; i++) {
                    statbars[i].remove();
                }
                options.style.display = "flex";
                clearInterval(timer);
                return;
            }
            funBar.value = fun;

            fitness -= fitnessDecreaseRate;
            if (fitness < 0) {
                music.pause();
                gameOver.play();
                // body.style.backgroundColor = "red";
                fitness = 0;
                subtitle.textContent = `${petName.value} is unfit`
                for (i = 0; i < statbars.length; i++) {
                    statbars[i].remove();
                }
                options.style.display = "flex";
                clearInterval(timer);
                return;
            }
            fitnessBar.value = fitness;

            foodWater -= foodWaterDecreaseRate;
            if (foodWater < 0) {
                music.pause();
                gameOver.play();
                // body.style.backgroundColor = "red";
                foodWater = 0;
                subtitle.textContent = `${petName.value} died from starvation/dehydration`
                for (i = 0; i < statbars.length; i++) {
                    statbars[i].remove();
                }
                options.style.display = "flex";
                clearInterval(timer);
                return;
            }
            foodWaterBar.value = foodWater;

            energy -= energyDecreaseRate;
            if (energy < 0) {
                music.pause();
                gameOver.play();
                // body.style.backgroundColor = "red";
                energy = 0;
                subtitle.textContent = `${petName.value} has no energy`
                for (i = 0; i < statbars.length; i++) {
                    statbars[i].remove();
                }
                options.style.display = "flex";
                clearInterval(timer);
                return;
            }
            energyBar.value = energy;

            // Add other stats' decrease rate update here, if applicable
        }

        // Get references to the progress bars and buttons

        // Add event listeners to the buttons to increase the values
        healthBtn.addEventListener('click', () => {
        health += 10;
        if (health > 100) health = 100;
        healthBar.value = health;
        });

        funBtn.addEventListener('click', () => {
        fun += 10;
        if (fun > 100) fun = 100;
        funBar.value = fun;
        });

        fitnessBtn.addEventListener('click', () => {
        fitness += 10;
        if (fitness > 100) fitness = 100;
        fitnessBar.value = fitness;
        });

        foodWaterBtn.addEventListener('click', () => {
        foodWater += 10;
        if (foodWater > 100) foodWater = 100;
        foodWaterBar.value = foodWater;
        });

        energyBtn.addEventListener('click', () => {
        energy += 10;
        if (energy > 100) energy = 100;
        energyBar.value = energy;
        });

        // Add other event listeners for other buttons similarly

        // Run the function to update the decrease rates on page load
        updateDecreaseRates();
    
        // Start decreasing stats after 10 seconds


        timer = setInterval(decreaseStats, 350);

    
            

            }
        })

function showImage(index) {
    bottomSection.style.display = "none";
    petProfile.style.display = "flex";
    images[index].style.display = "block";
}

