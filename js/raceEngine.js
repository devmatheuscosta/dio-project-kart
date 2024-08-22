const { getRandomBlock, rollDice, log, logRollResult } = require("./utils");

async function playRaceEngine(character1, character2) {
	const BLOCK_TYPES = {
		RETA: "RETA",
		CURVA: "CURVA",
		CONFRONTO: "CONFRONTO",
	};

	const attributeMapping = {
		RETA: "velocidade",
		CURVA: "manobrabilidade",
		CONFRONTO: "poder",
	};

	for (let round = 1; round <= 5; round++) {
		// Loop para 5 rodadas
		log(`🏁 Rodada ${round}:`);

		// Sortear bloco
		let block = getRandomBlock();
		log(`Bloco: ${block}`);

		// Rolar os dados
		let diceResult1 = rollDice();
		let diceResult2 = rollDice();

		// Teste de habilidade
		let totalTestSkill1 = 0;
		let totalTestSkill2 = 0;

		if (block !== BLOCK_TYPES.CONFRONTO) {
			const attribute = attributeMapping[block];
			totalTestSkill1 = diceResult1 + character1[attribute];
			totalTestSkill2 = diceResult2 + character2[attribute];
			logRollResult(
				character1.name,
				attribute,
				diceResult1,
				character1[attribute]
			);
			logRollResult(
				character2.name,
				attribute,
				diceResult2,
				character2[attribute]
			);
		} else {
			let powerResult1 = diceResult1 + character1.poder;
			let powerResult2 = diceResult2 + character2.poder;

			log(`${character1.name} confrontou com ${character2.name} 🥊 !`);

			logRollResult(character1.name, "poder", diceResult1, character1.poder);
			logRollResult(character2.name, "poder", diceResult2, character2.poder);

			if (powerResult1 > powerResult2 && character2.pontos > 0) {
				log(
					`Confronto vencido por ${character1.name}! ${character2.name} perdeu um ponto 🐢!`
				);
				character2.pontos--;
			} else if (powerResult2 > powerResult1 && character1.pontos > 0) {
				log(
					`Confronto vencido por ${character2.name} ${character1.name} perdeu um ponto 🐢!`
				);
				character1.pontos--;
			} else {
				log("Confronto empatado! Nenhum ponto foi perdido.");
			}
		}

		if (totalTestSkill1 > totalTestSkill2) {
			log(`${character1.name} marcou um ponto!`);
			character1.pontos++;
		} else if (totalTestSkill2 > totalTestSkill1) {
			log(`${character2.name} marcou um ponto!`);
			character2.pontos++;
		}

		log("---------------------------------------------------");
	}
}

module.exports = { playRaceEngine };
