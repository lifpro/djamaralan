var Cours = /** @class */ (function () {
    function Cours() {
        this.listEtudiants = [];
    }
    Cours.prototype.addEtudiant = function (e) {
        this.listEtudiants.push(e);
    };
    Cours.prototype.afficheListe = function () {
        console.log(this.listEtudiants);
    };
    Cours.prototype.afficherCours = function () {
        console.log("Cours : " + this.matiere);
        console.log("Professeur : " + this.professeur);
        console.log("Dur\u00E9e : " + this.duree);
        console.log("Etudiants : " + this.listEtudiants);
    };
    return Cours;
}());
var i4tel = new Cours();
i4tel.matiere = "Android";
i4tel.duree = 3;
i4tel.professeur = "Mr YAHAYA";
i4tel.addEtudiant("Moussa DEMBELE");
i4tel.addEtudiant("Fatoumata DIALLO");
i4tel.afficherCours();
