const advice = document.getElementById("advice"); 
const dice = document.querySelector('button[type="button"]'); 

async function fetchAdvice() { 
    const response = await fetch("https://api.adviceslip.com/advice"); 
    const adviceSlip = await response.json(); 

    console.log(adviceSlip); 

    showAdvice(adviceSlip); 
}

function showAdvice(adviceSlip) { 

    const quote = adviceSlip.slip.advice; 
    advice.textContent = `${quote}`; 
}

dice.addEventListener("click", fetchAdvice); 

fetchAdvice(); 