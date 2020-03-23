let moveIt = false;
let x;
let y;

let monPostIt = new postIt("", 50, 50, 12);
monPostIt.afficheTest();

document.addEventListener('mousemove', e => {
    x = e.clientX;
    y = e.clientY;
})
document.addEventListener('mouseup', () => {
    console.log("on stop !")
    moveIt = false;
})

function refresh() {
    if (moveIt) {
        console.log("on déplace !")
        monPostIt.changePlace(x, y);
        monPostIt.afficheTest();
    }
    setTimeout(refresh, 300)
}

refresh(); 