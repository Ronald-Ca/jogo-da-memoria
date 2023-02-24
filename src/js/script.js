const main = document.getElementById('main');
const scoreboardPoints = document.getElementById('scoreboardPoints');
const nextRound = document.getElementById('nextRound');
let clickOne = null;
let clickTwo = null;
let found = 0;
let scoreboard = 00;
let round = 01;

function renderCard() {

    const repeatCharacters = [...characters, ...characters];
    const shuffledCharacters = shuffleArray(repeatCharacters);

    for (let i = 0; i < shuffledCharacters.length; i++) {
        let cards = document.createElement('img');
        cards.id = shuffledCharacters[i].id

        cards.addEventListener('click', flippedCard);

        cards.src = "./src/img/QuestionBlock.png";
        main.appendChild(cards);

    }
}
renderCard();

function flippedCard(event) {
    const clickedImg = event.target;
    let clickedCard = event.target.id;
    let characterClicked = characters.find(character => character.id === clickedCard);
    clickedImg.src = characterClicked.img;

    if (clickOne == null) {
        clickOne = clickedImg;
    } else {
        clickTwo = clickedImg;
        parCards();
    }

}

function parCards() {
    if (clickOne.id === clickTwo.id) {
        clickOne = null;
        clickTwo = null;
        found++;

        if (found === characters.length) {
            scoreboard++;
            round++;
            scoreboardPoints.innerHTML = scoreboard;
            nextRound.innerHTML = round;
            found = 0;
            setTimeout(() => {
                main.innerHTML = "";
                renderCard();
            }, 2000)

        }
    } else {
        setTimeout(() => {
            clickOne.src = "./src/img/QuestionBlock.png";
            clickTwo.src = "./src/img/QuestionBlock.png";
            clickOne = null;
            clickTwo = null;
        }, 1000);

    }
}

function shuffleArray(shuffle) {
    for (let i = shuffle.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffle[i], shuffle[j]] = [shuffle[j], shuffle[i]];
    }
    return shuffle;
}