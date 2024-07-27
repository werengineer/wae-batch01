let count = 0;
let position = [];

function addXO(e) {

    console.log(position.filter(p => p.position === '0')[0]?.value === position.filter(p => p.position === '1')[0]?.value && position.filter(p => p.position === '1')[0]?.value === position.filter(p => p.position === '2')[0]?.value)

    if (position.filter(p => p.position == e.id).length === 0) {
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
    // console.log(e.id)
}