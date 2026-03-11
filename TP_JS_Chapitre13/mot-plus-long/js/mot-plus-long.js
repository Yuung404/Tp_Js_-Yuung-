// Mission 1 — Mot le plus long
// Objectif : afficher dans #motPlusLong le mot le plus long présent dans #citation
// Contraintes de l'énoncé : utiliser String.replace(...) et String.split(...)

document.addEventListener('DOMContentLoaded', () => {
  const citationElt = document.getElementById('citation');
  const sortieElt = document.getElementById('motPlusLong');
  if (!citationElt || !sortieElt) return;

  // 1) Récupérer le texte de la citation
  const texte = citationElt.textContent || '';

  // 2) Nettoyer le texte :
  //    - on remplace toute ponctuation (sauf apostrophes et tirets internes) par un espace
  //    - regex compatible accents : A-Za-z + lettres accentuées
  const nettoye = texte
    .replace(/[^A-Za-zÀ-ÖØ-öø-ÿ'-]+/g, ' ') // <-- utilisation de replace (exigée)
    .trim();

  // 3) Découper en mots
  const mots = nettoye.split(/\s+/); // <-- utilisation de split (exigée)

  // 4) Trouver le mot le plus long (en cas d'égalité, on garde le premier rencontré)
  let plusLong = '';
  for (const mot of mots) {
    if (mot.length > plusLong.length) plusLong = mot;
  }

  // 5) Afficher
  sortieElt.textContent = plusLong;
});
