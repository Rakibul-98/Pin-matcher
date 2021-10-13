function generatePin(){
    const randomNumber = Math.floor(Math.random()*10000);
    if (randomNumber > 1000) {
        document.getElementById("generate-display").value=randomNumber;
    }
}