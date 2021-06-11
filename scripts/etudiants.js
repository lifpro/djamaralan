var Etudiant = /** @class */ (function () {
    function Etudiant() {
        this.list = [];
    }
    Etudiant.prototype.ajouter = function (nom) {
        this.list.push(nom);
    };
    Etudiant.prototype.afficher = function () {
        return this.list;
    };
    return Etudiant;
}());
