// Sélectionner l'élément div de l'écran du jeu
const gameScreen = document.getElementById('screen_game');

// Créer un élément h1 pour le titre
const titleElement = document.createElement('h1');
titleElement.innerText = "Riozacki's Stealth Mission";

// Ajouter le titre à l'écran du jeu
gameScreen.appendChild(titleElement);