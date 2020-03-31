class postIt {
    couleur;
    largeur;
    hauteur;
    couleurText;
    texts;
    vitesse;
    addPostIt;
    numero;

    constructor(numero, couleur, largeur, hauteur, couleurText, texts, vitesse, addPostIt) {
        this.couleur = couleur;
        this.largeur = largeur;
        this.hauteur = hauteur;
        this.couleurText = couleurText;
        this.texts = texts;
        this.vitesse = vitesse;
        this.addPostIt = addPostIt;
        this.numero = numero;
    }
    changeVitesse(vitesse) {
        this.vitesse = vitesse;
    }
    // **
    //* Affichage textuel du postIt - Sérialisation du postIt
    //* /
    toString( ){
        return'{"coul":' + this.couleur + ',"largeur":' + this.largeur + ', "hauteur":' + this.hauteur + ', "couleurText":' + this.couleurText +',"texts":' + this.texts + ',"vitesse":' + this.vitesse +',}'
    }
    changePlace(x, y) {
        this.largeur = x;
        this.hauteur = y;
        this.posx = x;
        this.posy = y;
    }
    changeCouleur(coul) {
        this.couleur = coul;
    }
    afficheTest() {
        let monElem = document.createElement('div')
        let creation = false;

        //mon postIT existe ?
        if (document.getElementById("postIt" + this.numero) == null) {
            //si non, on créé le post it
            monElem = document.createElement('div');
            creation = true;
        }
        else {
            //oui on la récupère
            console.log(" Mon post It existe");
            monElem = document.getElementById("postIt" + this.numero);
        }

        monElem.style.position = "fixed";
        monElem.style.top = this.hauteur + "px";
        monElem.style.left = this.largeur + "px";
        monElem.id = "postIt" + this.numero;
        monElem.style.top = this.positiony + "px";
        monElem.style.left = this.positionx + "px";
        monElem.style.width = "150px";
        monElem.style.height = "150px";
        monElem.style.backgroundColor = this.couleur;
        monElem.style.padding = "5px";
        monElem.style.color = "black";
        monElem.innerHTML = "Je suis un objet de test, j'avance à " + this.vitesse + " Move It";
        document.body.appendChild(monElem);
        monElem.style.backgroundRepeat = "no-repeat";
        monElem.style.backgroundSize = "contain";

        monElem.addEventListener('click', () => {
            console.log("move it !" + this.numero);
            idMove = this.numero;
            moveIt = true;
        })

        //Si mon postIt n'existe pas je l'ajoute au html
        if (creation) {
            document.body.appendChild(monElem);
        }
    }
}
