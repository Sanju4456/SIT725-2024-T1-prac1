function changeText() {
    let potentialTexts = ["SIT725", "SIT726", "SIT707", "SIT774", "SIT773"];
    let randomNumber = getRandomNumber(0, potentialTexts.length - 1);
    let textToChangeTo= potentialTexts[randomNumber];
    document.getElementById("heading").innerHTML = textToChangeTo;
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}