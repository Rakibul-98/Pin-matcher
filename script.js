function handleGenerate(){
    const randomNumber = Math.floor(Math.random()*10000);
    if (randomNumber > 1000) {
        document.getElementById("generate-display").value=randomNumber;
    }
}

function handleTypedPin(){
    const digit = event.target.innerText;
    if (isNaN(digit)) {
        if(digit == 'C'){
            document.getElementById("typed-display").value='';
        }
    }
    else{
        const pin = document.getElementById("typed-display").value;
        const newPin = pin+digit;
        document.getElementById("typed-display").value=newPin;
    }
}
function handleSubmit() {
    const generatedPin = document.getElementById("generate-display").value;
    const typedPin = document.getElementById("typed-display").value;
    if(generatedPin == typedPin){
        document.getElementById("pin-matched").style.display='block';
        document.getElementById("pin-not-matched").style.display='none';
    }
    else{
        document.getElementById("pin-matched").style.display='none';
        document.getElementById("pin-not-matched").style.display='block';
    }
    document.getElementById("generate-display").value='';
    document.getElementById("typed-display").value='';
}