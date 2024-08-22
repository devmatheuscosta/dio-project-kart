const { getPlayer, log, declareWinner } = require("../js/utils");
const { playRaceEngine } = require("../js/raceEngine");

(async function main() {
	let objectPlayer1 = getPlayer();
	let objectPlayer2 = getPlayer();

	while (objectPlayer1.name === objectPlayer2.name) {
		log("Os dois jogadores são iguais, sorteando novamente...");
		objectPlayer2 = getPlayer();
	}

	log(
		`🏁 🚨 Corrida entre ${objectPlayer1.name} e ${objectPlayer2.name} começando... \n`
	);

	await playRaceEngine(objectPlayer1, objectPlayer2);
	declareWinner(objectPlayer1, objectPlayer2);
})();
