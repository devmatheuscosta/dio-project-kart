const { players } = require("./script");

function rollDice() {
	return Math.floor(Math.random() * 6) + 1;
}

function log(message) {
	console.log(message);
}

function getPlayer() {
	const playerKeys = Object.keys(players);
	const randomIndex = Math.floor(Math.random() * playerKeys.length);
	return players[playerKeys[randomIndex]];
}

function getRandomBlock() {
	const random = Math.random();
	if (random < 0.33) return "RETA";
	if (random < 0.66) return "CURVA";
	return "CONFRONTO";
}

function logRollResult(characterName, block, diceResult, attribute) {
	log(
		`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${
			diceResult + attribute
		}`
	);
}

function declareWinner(character1, character2) {
	log("Resultado final:\n");
	log(`${character1.name}: ${character1.pontos} pontos(s)`);
	log(`${character2.name}: ${character2.pontos} pontos(s)`);

	if (character1.pontos > character2.pontos) {
		log(`\n ${character1.name} venceu a corrida! 🏆`);
	} else if (character2.pontos > character1.pontos) {
		log(`\n${character2.name} venceu a corrida! 🏆`);
	} else {
		log("\nA corrida terminou empatada!");
	}
}

module.exports = {
	rollDice,
	log,
	getPlayer,
	getRandomBlock,
	logRollResult,
	declareWinner,
};
