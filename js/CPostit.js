class postIt {
            couleur;
            largeur;
            hauteur;
            couleurText;
            texts;
            vitesse;
            constructor(couleur, largeur, hauteur, couleurText, texts, vitesse, position){
                this.couleur = couleur;
                this.largeur = largeur;
                this.hauteur = hauteur;
                this.couleurText = couleurText;
                this.texts = texts;
                this.vitesse = vitesse;
            }
            
        changeVitesse(vitesse) {
            this.vitesse = vitesse;
            }

        changePlace(x, y) {
            this.largeur = x;
            this.hauteur = y;
            this.positionx = x;
            this.postiony = y;


        }
        changeCouleur(coul) {
            this.couleur = coul;
        }
            changeImage(img) {
                this.Image = img;
                }
            
                afficheTest() {
                    let monElem = document.createElement('div');
                    let monElem;
                    let creation = false;
                    //mon postIT existe ?
                    if(this.document.getElementById("postIT")== null){
                        monElem = this.document.createElement('div');
                        creation = true;
                        }
                    else{
                        //oui on la récupère
                        console.log(" Mon post It")
                        monElem = document.getElementById("postIT");
                        }   
                }
                    monElem.style.position = "fixed";
                    monElem.style.top = this.hauteur + "px";
                    monElem.style.left = this.largeur + "px";
                    monElem.style.top = this.posY + "px";
                    monElem.style.left = this.posX + "px";
                    monElem.style.width = "150px";
                    monElem.style.height = "150px";
                    monElem.style.backgroundColor = this.couleur;
                    monElem.style.padding = "5px";
                    monElem.style.color = "black";
                    monElem.innerHTML = "Je suis un objet de test, j'avance à " + this.vitesse + " Vroum";
                    document.body.appendChild(monElem);
                    monElem.style.backgroundImage = "url(../img/" + this.image + ")";
                    monElem.style.backgroundRepeat = "no-repeat";
                    monElem.style.backgroundSize = "contain";

                    monElem.addEventListener('click', () => {
                        console.log("on bouge !")
                        onBouge = true;
                            })
                            
                    //Si ma voiture n'existe pas je l'ajoute au html
                    if (creation) {
                        document.body.appendChild(monElem);
                    }
                
    monPostIt = new postIt( 'red', 100, 200, 'white', '', 30);
    monPostIt.affichePostIt();
                }
