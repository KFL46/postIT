let moveIt = false;
let x;
let y;
let idMove = 0;
var tabPostit = new Array();

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
    console.log("on click")
    let potIt = new postIt(tabPostit.length + 1, "red", 100, 100, 12)
    tabPostit.push(tabPosit);
    tabPostit[(tabPostit.length - 1)].afficheTest();

});
function refresh() {
    console.log("postIt à bouger =" + idMove)
    if (moveIt && idMove != 0) {
        console.log("on déplace !")
        tabPostit[(idMove - 1)].changePlace(x, y);
        tabPostit[(idMove - 1)].afficheTest();
   }

    setTimeout(refresh, 300)
}
refresh(); 