let count = 0;
let position = [];

function addXO(e) {
    console.log(count % 2)
    if (count % 2 == 0) {
        e.innerText = "X"
        count += 1
    } else {
        e.innerText = "O"
        count += 1
    }
    console.log(e.id)
}