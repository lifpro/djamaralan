
class Footballer {
    nom: string;
    age: number;
    constructor(n: string, a: number) {
        this.nom = n;
        this.age = a;
    }
}

let footballeurs: Footballer[] = []
footballeurs.push(new Footballer("Salif KEITA", 26));
footballeurs.push(new Footballer("Adama TRAORE", 30));
footballeurs.push(new Footballer("Djigui DIARRA", 40));
footballeurs.push(new Footballer("Kalifa COULIBALY", 40));

// let tot = 0;
// for (let f of footballeurs) {
//     tot = tot + f.age;
// }

// let moy = tot / footballeurs.length;

// let total = footballeurs.reduce(function (p, f, array) {
//     return p + f.age;
// }, 0) / footballeurs.length
// console.log(total)
// let jeunes = footballeurs.filter((f) => f.age < 40);
// let jeune = footballeurs.find((f) => f.age < 40);
// console.log(jeune)

// for (let fn of jeunes) {
//     console.log(fn)
// }
// let annees = new Set<number>([2001, 2001, 2002, 2003])
// let footballeur_nom: string[] = [];
// for (let f of footballeurs) {
//     footballeur_nom.push(f.nom.toUpperCase())
// }
// let footballeur_nom = footballeurs.map(function (f, i, array) {
//     return f.nom.toUpperCase();
// });


// annees.add(2006);
// annees.delete(2001);
// for (let f of annees) {
//     console.log(f + '')
// }

let heure = 57
if (heure < 60) {
    console.log('On reste en clase')
} else {
    console.log('On rentre at home')
}