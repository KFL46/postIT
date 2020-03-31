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
