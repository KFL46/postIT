let moveIt = false;
let x;
let y;
let idMove = 0;
var tabPostit = new Array();

let monPostIt = new postIt("yellow", 50, 50, 12);
monPostIt.afficheTest();

document.addEventListener('mousemove', e => {
    x = e.clientX;
    y = e.clientY;
})
document.addEventListener('mouseup', () => {
    console.log("on stop !")
    idMove = 0;
    moveIt = false;
})
document.getElementById('addPostIt').addEventListener('mousedown', () => {
    //idBouge = tabPostIt.length + 1;
    let postIt = new postIt(tabPostit.length + 1, "red", 100, 100, 12)
    tabPostit.push(postIt);
    //onBouge = true;
    tabPostit[(tabPostit.length - 1)].afficheTest();

});
function refresh() {
    if (moveIt) {
        if (moveIt && idMove != 0) {
        console.log("on déplace !")
        monPostIt.changePlace(x, y);
        monPostIt.afficheTest();
        tabPostit[(idMove - 1)].changePlace(x, y);
        tabPostit[(idMove - 1)].afficheTest();
    }
    setTimeout(refresh, 300)
}
}
refresh(); 