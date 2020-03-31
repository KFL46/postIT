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

})

function refresh() {
    //console.log("postIt à bouger =" + idMove)
  
    logMe("Sérialisation :" + tabPostit.toString( ), true)
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
        function logMe(texts, vide =  false ) {
            if(document.getElementById("logMe")!= null)  {
                if(vide) document.getElementById( "logMe" ) . innerHTML  =  "" ;
                document.getElementById("logMe").innerHTML += '<br>' + texts
            }
} 

    setTimeout(refresh, 300)

    window.onload = () => {
        tmpTabPost = readCookie("svtabPostit")
        //  tmpTabPost = (document.cookie.replace(/(?:(?:^|.*;s*)svTabDingo*=s*([^;]*).*$)|^.*$/, '$1'));
        alert("Voici le contenu de mon cookie : \n" + tmpTabPost + "\n ou \n " + eval(tmpTabPost))
        tmpTabPost = eval(tmpTabPost)
        // alert("Voici le contenu de mon cookie : \n" + tmpTabPost + "\n ou \n " + eval(tmpTabPost))
        for (unPost in tmpTabPost) {
            //console.log(tmpTabPost[unPost])
            let postIt = new postIt(tabPostit.length + 1, tmpTabPost[unPost].image, tmpTabPost[unPost].x, tmpTabPost[unPost].y, tmpTabPost[unPost].vitesse)
            tabPostit.push(postIt);
            //onBouge = true;
            tabPostit[(tabPostit.length - 1)].afficheTest();
        }

    }
}
refresh(); 