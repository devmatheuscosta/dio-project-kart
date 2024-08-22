# Jogo de Corrida de Personagens

Este projeto é uma simulação de corrida de personagens inspirada em jogos de corrida, onde dois personagens competem entre si em uma série de rodadas. O objetivo é acumular pontos através de habilidades específicas e confrontos, determinando assim o vencedor da corrida.

## Estrutura do Projeto

O projeto está dividido em três arquivos principais:

1. **`index.js`**: O arquivo principal que inicia o jogo. Ele gerencia a seleção dos jogadores e coordena a execução da corrida.
2. **`js/utils.js`**: Contém funções utilitárias usadas pelo jogo, como rolar dados, escolher um jogador aleatoriamente, e registrar resultados.
3. **`js/raceEngine.js`**: Implementa a lógica da corrida, incluindo a rotação dos blocos de pista e o cálculo dos pontos.

## Funcionalidades

- **Seleção de Jogadores**: Os jogadores são selecionados aleatoriamente a partir de um conjunto pré-definido.
- **Rodadas de Corrida**: A corrida ocorre em 5 rodadas, onde os jogadores enfrentam diferentes tipos de blocos (RETA, CURVA e CONFRONTO).
- **Habilidades dos Jogadores**: Cada tipo de bloco influencia a corrida de acordo com a habilidade do jogador (velocidade, manobrabilidade ou poder).
- **Confrontos**: Em blocos de CONFRONTO, os jogadores competem diretamente, e o perdedor pode perder pontos.
- **Declaração do Vencedor**: Ao final das rodadas, o jogador com mais pontos é declarado vencedor.

## Como Executar

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/devmatheuscosta/dio-project-kart.git

   ```

2. **Navegue até o Diretório do Projeto**
   ```bash
    cd nome-do-projeto
   ```
3. **Execute o Jogo**
   ```bash
   node index.js
   ```

## Funções Principais

1. **rollDice:** Rola um dado de 6 lados e retorna o resultado.
2. **getPlayer:** Retorna um jogador aleatório da lista de jogadores disponíveis.
3. **getRandomBlock:** Escolhe aleatoriamente o tipo de bloco para a rodada (RETA, CURVA, CONFRONTO).
4. **logRollResult:** Registra o resultado do lançamento dos dados e a habilidade usada.
5. **declareWinner:** Declara o vencedor com base na pontuação final dos jogadores.
6. **playRaceEngine:** Gerencia a lógica da corrida, incluindo o sorteio dos blocos, a rotação dos dados e o cálculo dos pontos.

## Estrutura dos Dados dos Jogadores

Os dados dos jogadores são definidos da seguinte forma:

```javascript
const player1 = {
	name: "Mario",
	velocidade: 4,
	manobrabilidade: 2,
	poder: 3,
	pontos: 0,
};
```

Cada jogador possui um nome, atributos de velocidade, manobrabilidade e poder, além de uma pontuação inicial de 0.

## Contribuição

Se você deseja contribuir para este projeto, sinta-se à vontade para enviar pull requests ou relatar problemas. Todas as contribuições são bem-vindas!

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
