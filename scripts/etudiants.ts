class Etudiant {
    list: string[] = [];

    ajouter(nom) {
        this.list.push(nom)
    }
    afficher() {
        return this.list;
    }
}