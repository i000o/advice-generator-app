const advice = document.getElementById("advice"); 
const dice = document.querySelector('button[type="button"]'); 
const adviceId = document.getElementById("advice-id"); 
const adviceGeneratorTitle = document.getElementById("advice-generator-title"); 
const adviceGenerateInstruction = document.getElementById("advice-generate-instruction"); 

async function fetchAdvice() { 
    const response = await fetch("https://api.adviceslip.com/advice"); 
    const adviceSlip = await response.json(); 

    console.log(adviceSlip); 

    showAdvice(adviceSlip); 
}

function showAdvice(adviceSlip) { 

    advice.hidden = false; 
    adviceId.hidden = false; 
    adviceGeneratorTitle.textContent = ""; 
    adviceGeneratorTitle.classList.remove("title"); 
    adviceGenerateInstruction.textContent = ""; 
    adviceGenerateInstruction.classList.remove("instruction"); 
    const quote = adviceSlip.slip.advice; 
    advice.textContent = `${quote}`; 
    adviceId.textContent = `Advice #${adviceSlip.slip.id}`; 
}

function defaultValues() { 

    advice.hidden = true; 
    adviceId.hidden = true; 
    adviceGeneratorTitle.textContent = "advice generator"; 
    adviceGeneratorTitle.classList.add("title"); 
    adviceGenerateInstruction.textContent = "Roll the dice below to receive your advice."; 
    adviceGenerateInstruction.classList.add("instruction"); 
}

dice.addEventListener("click", fetchAdvice); 
document.addEventListener("DOMContentLoaded", defaultValues); 
