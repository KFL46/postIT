class postIt {
            couleur;
            largeur;
            hauteur;
            text;
            constructor(couleur, largeur, hauteur, text){
                this.couleur = couleur;
                this.largeur = largeur;
                this.hauteur = hauteur;
                this.text = text;
            }
        changePlace(x, y) {
            this.largeur = x;
            this.hauteur = y;
            this.posx = x;
            this.posy = y;
        }
        changeCouleur(coul) {
            this.couleur=coul;
        }
                afficheTest(){
                    let monElem = document.createElement('div')
                    let monElem;
                    let creation = false;

                    //mon postIT existe ?
                    if(document.getElementById("postIt")== null){
                        monElem = document.createElement('div');
                        creation = true;
                        }
                    else{
                        //oui on la récupère
                        console.log(" Mon post It");
                        monElem = document.getElementById("postIt");
                        }   
              
                    monElem.style.position = "fixed";
                    monElem.style.top = this.hauteur + "px";
                    monElem.style.left = this.largeur + "px";
                    monElem.id = "postIt";
                    monElem.style.top = this.positiony + "px";
                    monElem.style.left = this.positionx + "px";
                    monElem.style.width = "150px";
                    monElem.style.height = "150px";
                    monElem.style.backgroundColor = this.couleur;
                    monElem.style.padding = "5px";
                    monElem.style.color = "black";
                    monElem.innerHTML = "Je suis un objet de test";
                    document.body.appendChild(monElem);
                    monElem.style.backgroundRepeat = "no-repeat";
                    monElem.style.backgroundSize = "contain";

                    monElem.addEventListener('click', () => {
                        console.log("moveIt !");
                        moveIt = true;
                            })
                             
                    //Si mon postIt n'existe pas je l'ajoute au html
                    if (creation) {
                        document.body.appendChild(monElem);
                    }
                
                }
            }                 
    monpostIt = new postIt('red', 100, 200, '');
    monpostIt.afficheTest();
                             