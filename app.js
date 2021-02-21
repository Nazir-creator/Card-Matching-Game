        // Understand the way it works and build your own with a different style.. Good Luck. From Nazir 🤠🤠
        
        // One important secret of learnng Javascript:: "DO NOT RUSH THE PROCESS", & " ALWAYS PRACTICE."


document.addEventListener('DOMContentLoaded', () => {

    //cards Options..... All Images

    const cardArray = [
        {
            name: 'C',
            img: 'images/C.png'
        },
        {
            name: 'C',
            img: 'images/C.png'
        },

        {
            name: 'Calculator',
            img: 'images/Calculator.png'
        },
        {
            name: 'Calculator',
            img: 'images/Calculator.png'
        },


        {
            name: 'Chrome',
            img: 'images/Chrome.png'
        },
        {
            name: 'Chrome',
            img: 'images/Chrome.png'
        },

        {
            name: 'tablet',
            img: 'images/tablet.png'
        },
        {
            name: 'tablet',
            img: 'images/tablet.png'
        },


        {
            name: 'print',
            img: 'images/print.png'
        },
        {
            name: 'print',
            img: 'images/print.png'
        },

        {
            name: 'Retro',
            img: 'images/Retro.png'
        },
        {
            name: 'Retro',
            img: 'images/Retro.png'
        },
    ]

    cardArray.sort( () => 
        0.5 - Math.random()
    )




const resultDisplay = document.getElementById('result');
const grid = document.querySelector('.grid'); 
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []
const match = document.getElementById('match')

    //create your board.


function GameBoard() {
    for(let i = 0; i < cardArray.length; i++) {
        let card = document.createElement('img')
         card.setAttribute('src', 'images/Door.jpg')
        card.setAttribute('data-id', i)
         grid.appendChild(card)
        card.addEventListener('click', flipCard)
       
        
    }
   
}   





// Check for match

function checkForMatch() { 
    let cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if(cardsChosen[0] === cardsChosen[1]) {
        match.innerHTML = ('You found a match')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/Door.jpg')
        cards[optionTwoId].setAttribute('src', 'images/Door.jpg')
        match.innerHTML = ('sorry, try again')
    }
    if(cardsChosenId)
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = '  Congratulations! you won them all!';

         // We clear interval here because we want the countdown to stop immideatly a player wins.
        clearInterval(countDown)
    }
    
     
    if(cardsWon.length >= 6) {
    document.getElementById('audio').play();

    }    
}




// flip your cards Functions

function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
     this.setAttribute('src', cardArray[cardId].img)
     if(cardsChosen.length === 2) {
         setTimeout(checkForMatch, 500)
    }

    
}



// We called Our Game Board Function Here
GameBoard()


let seconds = document.getElementById('timer').textContent;

// setInterval for counter.
let countDown = setInterval(() => {
    seconds--;
    document.getElementById('timer').textContent = seconds;
    if(seconds <= 0) clearInterval(countDown)


    const reloadGameOver = () => {
    window.location.reload();
} 

    if(seconds <= 0){
        alert('Game Over. Click Ok to Restart Game.');
        reloadGameOver();
    }
}, 1000);


})


const reload = () => {
    window.location.reload();
} 

