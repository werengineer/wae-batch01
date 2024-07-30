let count = 0;
let position = [];
const box = document.getElementsByClassName("box")
let won = false;

function addXO(e) {

    if (!won && position.filter(p => p.position == e.id).length === 0) {
        if (count % 2 == 0) {
            e.innerText = "X"
            count += 1
            position.push({ position: e.id, value: "X" })
        } else {
            e.innerText = "O"
            count += 1
            position.push({ position: e.id, value: "O" })
        }
    }
    detectWin();
    // console.log(e.id)
}

let winState = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

function detectWin() {
    
    
    for (let i = 0; i < winState.length; i++) {
        const [a, b, c] = winState[i];
        const boxA = box[a];
        const boxB = box[b];
        const boxC = box[c];

        if (boxA.innerText && boxA.innerText === boxB.innerText && boxA.innerText === boxC.innerText) {
            alert(boxA.innerText + " wins!");
            won = true;
            break;
        }
    }

    if (!won && count === 9) {
        alert("It's a draw!");
    }
}

const resetGame = () =>{
    window.location.reload()
}