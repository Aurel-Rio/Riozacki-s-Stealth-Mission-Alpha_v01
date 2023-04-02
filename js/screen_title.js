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

// Créer un contexte audio
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// Définir les paramètres du son
const frequency = 1000; // Fréquence en Hz
const type = 'triangle'; // Forme d'onde

// Créer un nœud de génération de son
const oscillator = audioCtx.createOscillator();
oscillator.type = type;
oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);

// Créer un nœud d'enveloppe
const envelope = audioCtx.createGain();
envelope.gain.setValueAtTime(0, audioCtx.currentTime);
envelope.gain.linearRampToValueAtTime(1, audioCtx.currentTime + 0.02);
envelope.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);

// Connecter les nœuds audio
oscillator.connect(envelope);
envelope.connect(audioCtx.destination);

// Fonction pour jouer le son
function playSound() {
    oscillator.start();
}

// Fonction pour arrêter le son
function stopSound() {
    oscillator.stop();
}

// Ajouter un événement de survol pour jouer le son
buttonsContainer.addEventListener('mouseover', playSound);

// Ajouter un événement de sortie de survol pour arrêter le son
buttonsContainer.addEventListener('mouseout', stopSound);

// Ajouter un événement de clic pour jouer le son au clic d'un bouton
buttonsContainer.addEventListener('mousedown', playSound);