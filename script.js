'use strict';

document.querySelector('body').innerHTML = `
    <header>
        <h1>Guess My Number!</h1>
        <p class="between">(Between 1 and 20)</p>
        <button class="btn again">Again!</button>
        <div class="number">?</div>
    </header>
    <main>
        <section class="left">
        <input type="number" class="guess" />
        <button class="btn check">Check!</button>
    </section>
    <section class="right">
        <p class="message">Start guessing...</p>
        <p class="label-score">💯 Score: <span class="score">20</span></p>
        <p class="label-highscore">
        🥇 Highscore: <span class="highscore">0</span>
        </p>
    </section>
    </main>
    `
//* dom manipulation

// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.message').textContent = "Correct Number 😍");

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10

// document.querySelector('.guess').value = 23
// console.log(document.querySelector('.guess').value)

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highScore = 0

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)

    // ? when there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = "⛔ No number!"
        displayMessage("⛔ No number!")

        //? When player wins
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = "🎉 Correct Number!"
        displayMessage("🎉 Correct Number!")
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').textContent = secretNumber

        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.guess').setAttribute('disabled', 'disabled')

        if (score > highScore) {
            highScore = score
        }
        document.querySelector('.highscore').textContent = highScore
        //? when guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            score--
            // guess > secretNumber ? "📈 Too high!" : "📉 Too low!"
            displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!")
            document.querySelector('.score').textContent = score
        } else {
            // document.querySelector('.message').textContent = "💥 You lost the game!"
            displayMessage("💥 You lost the game!")
            document.querySelector('.score').textContent = 0
            document.querySelector('.guess').setAttribute('disabled', 'disabled')
        }
    }

    //? when guess is too high
    // } else if (guess > secretNumber) {
    //     if (score > 1) {
    //         score--
    //         document.querySelector('.message').textContent = "📈 Too high!"
    //         document.querySelector('.score').textContent = score
    //     } else {
    //         document.querySelector('.message').textContent = "💥 You lost the game!"
    //         document.querySelector('.score').textContent = 0
    //     }

    //     //? when guess is too low
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         score--
    //         document.querySelector('.message').textContent = "📉 Too low!"
    //         document.querySelector('.score').textContent = score
    //     } else {
    //         document.querySelector('.message').textContent = "💥 You lost the game!"
    //         document.querySelector('.score').textContent = 0
    //     }
    // }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20
    secretNumber = Math.trunc(Math.random() * 20) + 1

    // document.querySelector('.message').textContent = "Start guessing..."
    displayMessage("Start guessing...")
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''

    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.guess').removeAttribute('disabled')


})