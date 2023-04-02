// Sélectionner l'élément div de l'écran du jeu
const gameScreen = document.getElementById('screen_game');

// Créer un élément h1 pour le titre
const titleElement = document.createElement('h1');
titleElement.innerText = "Riozacki's Stealth Mission";
titleElement.classList.add('metal-gear-title');

// Ajouter le titre à l'écran du jeu
gameScreen.appendChild(titleElement);

// Créer un conteneur pour les boutons
const buttonsContainer = document.createElement('div');
buttonsContainer.classList.add('buttons-container');
gameScreen.appendChild(buttonsContainer);


// Créer les boutons
const singlePlayerButton = document.createElement('button');
singlePlayerButton.innerText = '1 player';
singlePlayerButton.classList.add('menu-button');

const twoPlayersButton = document.createElement('button');
twoPlayersButton.innerText = '2 players';
twoPlayersButton.classList.add('menu-button');

const onlineButton = document.createElement('button');
onlineButton.innerText = 'Online';
onlineButton.classList.add('menu-button');

const optionsButton = document.createElement('button');
optionsButton.innerText = 'Options';
optionsButton.classList.add('menu-button');

const creditsButton = document.createElement('button');
creditsButton.innerText = 'Credits';
creditsButton.classList.add('menu-button');


// Ajouter les boutons au conteneur
buttonsContainer.appendChild(singlePlayerButton);
buttonsContainer.appendChild(twoPlayersButton);
buttonsContainer.appendChild(onlineButton);
buttonsContainer.appendChild(optionsButton);
buttonsContainer.appendChild(creditsButton);