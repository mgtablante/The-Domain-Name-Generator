let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let dominio = ['.com', '.es'];

let i, j, k, l;
for (i = 0; i < pronoun.length; i++) {
    for (j = 0; j < adj.length; j++) {
        for (k = 0; k < noun.length; k++) {
            for (l = 0; l < dominio.length; l++) {
                console.log(pronoun[i] + adj[j] + noun[k] + dominio[l]);
            }
        }
    }
}
