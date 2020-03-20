let onBouge = false;
let x;
let y;

let monpostIt = new postIt("voiture.jpg", 50, 50, 12);
monpostIt.afficheTest();

document.addEventListener('mousemove', e => {
    x = e.clientX;
    y = e.clientY;
})
document.addEventListener('mouseup', () => {
    console.log("on stop !")
    onBouge = false;
})

function refresh() {
    if (onBouge) {
        console.log("on déplace !")
        monpostIt.changePlace(x, y);
        monpostIt.afficheTest();
    }
    setTimeout(refresh, 300)
}

refresh(); 