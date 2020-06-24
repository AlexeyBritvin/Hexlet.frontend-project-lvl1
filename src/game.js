import readlineSync from 'readline-sync';

const YES = 'yes';
const NO = 'no';
const MAX_NUM = 100;

const isEven = (num) => num % 2 === 0;

const generateNumber = () => Math.floor((Math.random() * MAX_NUM) + 1);

const giveFeedback = (answerIsRight, even) => {
  if (answerIsRight) {
    return console.log('Correct!');
  }

  if (even) {
    return console.log('"no" is wrong answer ;(. Correct answer was "yes".');
  }

  return console.log('"yes" is wrong answer ;(. Correct answer was "no".');
};

const checkAnswer = (num, answer) => {
  let answerIsRight = false;

  if (
    (isEven(num) && answer === YES)
    || (!isEven(num) && answer === NO)
  ) {
    answerIsRight = true;
  }

  giveFeedback(answerIsRight, isEven(num));

  return answerIsRight;
};

const askQuestion = () => {
  const num = generateNumber();
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');

  return checkAnswer(num, answer);
};

const startGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let answerIsRight;

  do {
    answerIsRight = askQuestion();
  } while (answerIsRight === true);

  console.log(`Let's try again, ${name}!`);
};

export default startGame;