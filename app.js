// Tableau de citations inspirantes
const quotes = [
    { text: "Le seul moyen de faire du bon travail, c'est d'aimer ce que vous faites.", author: "Steve Jobs" },
    { text: "Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte.", author: "Winston Churchill" },
    { text: "La meilleure façon de prédire l'avenir, c'est de le créer.", author: "Peter Drucker" },
    { text: "Croyez que vous le pouvez et vous êtes déjà à mi-chemin.", author: "Theodore Roosevelt" },
    { text: "L'éducation est l'arme la plus puissante pour changer le monde.", author: "Nelson Mandela" }
];

function showMessage() {
    // Sélectionner une citation aléatoire
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    // Mettre à jour le DOM
    document.getElementById("quote").innerHTML = `"${selectedQuote.text}"`;
    document.getElementById("author").innerHTML = `- ${selectedQuote.author}`;
}