import generateRandomInt from '../helper/random-int.js';
import startGame from '../main.js';
import { createQuestionPair } from '../helper/create-question.js';

const description = 'What number is missing in the progression?';
const progressionSize = 10;

const generateProgression = (firstElement, step, size) => {
  const progression = [];

  for (let index = 0; index < size; index += 1) {
    const current = firstElement + index * step;
    progression.push(current);
  }

  return progression;
};

const getAnswer = (num) => num.toString();

const genGameRoundData = () => {
  const progressionStep = generateRandomInt(1, 5);
  const firstElement = generateRandomInt(1, 100);
  const progression = generateProgression(firstElement, progressionStep, progressionSize);
  const progressionCopy = progression.slice();
  const hiddenElementIndex = generateRandomInt(0, progressionSize - 1);
  const [replaced] = progressionCopy.splice(hiddenElementIndex, 1, '..');
  const question = progressionCopy.join(', ');
  const answer = getAnswer(replaced);

  return createQuestionPair(question, answer);
};

const runBrainProgressionGame = () => startGame(description, genGameRoundData);

export default runBrainProgressionGame;
