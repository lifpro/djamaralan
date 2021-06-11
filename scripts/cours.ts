class Cours {
    matiere: string;
    professeur: string;
    duree: number;
    listEtudiants: string[] = []

    addEtudiant(e: string) {
        this.listEtudiants.push(e)
    }

    afficheListe() {
        console.log(this.listEtudiants)
    }
    afficherCours() {
        console.log(`Cours : ${this.matiere}`);
        console.log(`Professeur : ${this.professeur}`);
        console.log(`Durée : ${this.duree}`);
        console.log(`Etudiants : ${this.listEtudiants}`);
    }
}

let i4tel: Cours = new Cours();
i4tel.matiere = "Android";
i4tel.duree = 3;
i4tel.professeur = "Mr YAHAYA";
i4tel.addEtudiant("Moussa DEMBELE");
i4tel.addEtudiant("Fatoumata DIALLO");
i4tel.afficherCours()