// Mission 2 — Palindrome
// Objectif : vérifier si le mot saisi est un palindrome
// Contrainte de l'énoncé : utiliser String.toLowerCase()

function palindrome() {
  const input = document.getElementById('id-mot-saisi');
  const result = document.getElementById('resultat');
  if (!input || !result) return;

  // 1) Récupérer le mot saisi
  const brut = input.value;

  // 2) Normaliser : passer en minuscules (exigé) et retirer espaces/ponctuation
  const net = brut
    .toLowerCase() // <-- utilisation de toLowerCase (exigée)
    .replace(/[^a-z0-9à-öø-ÿ]/g, '');

  // 3) Comparer au renversé
  const inverse = net.split('').reverse().join('');
  const estPalindrome = net.length > 0 && net === inverse;

  // 4) Afficher le verdict
  result.textContent = estPalindrome
    ? `« ${brut} » est un palindrome.`
    : `« ${brut} » n'est pas un palindrome.`;
}
