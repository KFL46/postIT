let moveIt = false;
let x;
let y;

let monpostIt = new postIt("", 50, 50, 12);
monpostIt.afficheTest();

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
        monpostIt.changePlace(x, y);
        monpostIt.afficheTest();
    }
    setTimeout(refresh, 300)
}

refresh(); 