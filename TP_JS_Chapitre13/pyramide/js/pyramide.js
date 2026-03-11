// Mission 3 — Pyramide
// Objectif : construire une pyramide de n lignes
// Contrainte de l'énoncé : utiliser slice(debut, fin)

function construirePyramide() {
  const input = document.getElementById('ligne-pyramide');
  const sortie = document.getElementById('pyramide');
  if (!input || !sortie) return;

  const n = parseInt(input.value, 10);
  if (Number.isNaN(n) || n <= 0) {
    sortie.textContent = 'Veuillez entrer un entier strictement positif.';
    return;
  }

  // On crée une "ligne pleine" de n caractères puis on découpe avec slice(0, i)
  const plein = '#'.repeat(n);
  let buf = '';
  for (let i = 1; i <= n; i++) {
    const ligne = plein.slice(0, i); // <-- utilisation de slice (exigée)
    buf += ligne + (i < n ? '\n' : '');
  }
  sortie.textContent = buf;
}
