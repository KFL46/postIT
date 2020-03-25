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
    tabPostit.push(potIt);
    tabPostit[(tabPostit.length - 1)].afficheTest();

});
function refresh() {
    //console.log("postIt à bouger =" + idMove)
  
    logMe ( "Sérialisation du contexte:"  +  tabPostit . toString ( ) ,  true )
    if (moveIt && idMove != 0) {
        console.log("on déplace !")
        tabPostit[(idMove - 1)].changePlace(x, y);
        tabPostit[(idMove - 1)].afficheTest();
   }
           /** 
         * Suppression du postit
         * 
         * @param {string} numPostit - id du postit a supprimer
         */
        function delPostit(numPostit) {
            delete tabPostit[numPostit - 1]
        }
        //
        // Fonction permettant d'enregistrer le texte dans un élément HTML avec id logMe
        //* 
        //* @param { string } texte - Texte à logger
        //* @param { boolean } vide - Reinit boite de log
        //* /
        function logMe( texte , vide =  false ) {
            if(document.getElementById("logMe")!= null)  {
                if( vide )  document . getElementById( "logMe" ) . innerHTML  =  "" ;
                document . getElementById ( "logMe" ) . innerHTML  +=  '<br>'  +  texte
            }
} 

    setTimeout(refresh, 300)
}
refresh(); 