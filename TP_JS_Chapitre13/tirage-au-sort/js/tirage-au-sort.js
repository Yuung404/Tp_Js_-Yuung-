// Mission 4 — Tirage au sort
// Objectif : tirer au sort un élément d'un tableau et l'afficher
// Le tableau de l'annexe (Document 5)
const mangas = [
  "Naruto", "One Piece", "DBZ", "Bleach", "HxH", "JJK",
  "Spy x Family", "Sakamoto Days", "JJBA", "HnK", "Boruto"
];

function tirage() {
  const affichage = document.getElementById('affichage');
  const aleatoire = document.getElementById('aleatoire');
  if (!affichage || !aleatoire) return;

  const index = Math.floor(Math.random() * mangas.length);
  const choix = mangas[index];

  affichage.textContent = `Élément tiré : ${choix}`;
  aleatoire.textContent = `(index aléatoire = ${index}, taille = ${mangas.length})`;
}
