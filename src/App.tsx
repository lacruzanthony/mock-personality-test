import React from 'react';
import './styles.css';
import axios from 'axios';
import Button from './components/button';
import Card from './components/question';
import OptionSet from './components/option';
import Result from './components/result';
import { ICard } from './interfaces';

export default function App() {
  const [cards, setCards] = React.useState<ICard[]>(() => []);
  const [cardNumber, setCardNumber] = React.useState(0);
  const [isQuestionSelected, setIsQuestionSelected] = React.useState(false);
  // TODO: derivate this state.
  const [isTestFinish, setIsTestFinish] = React.useState(false);

  const optionIsAlreadySelected = () => {
    const questions = document.getElementsByClassName('question-list') as HTMLCollection;

    for (let i = 0; i < questions.length; i++) {
      const label = questions[i].lastChild as HTMLLabelElement;
      if (label.classList.contains('question-selected')) {
        return true;
      }
    }
    return false;
  };

  React.useEffect(() => {
    setIsQuestionSelected(false || optionIsAlreadySelected());
  }, [cardNumber]);

  const onClickHandler = async () => {
    const data = [
      {
        questionSelectedID: 0,
        questions: [
          {
            id: 1,
            content: 'Don’t dare contradict them'
          },
          {
            id: 2,
            content: 'Think that they are obviously right'
          },
          {
            id: 3,
            content: 'Defend your own point of view, tooth and nail'
          },
          {
            id: 4,
            content: 'Continuously interrupt your colleague'
          }
        ],
        headline:
          'You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:'
      },
      {
        questionSelectedID: 0,
        questions: [
          {
            id: 1,
            content: 'Look at your watch every two minutes'
          },
          {
            id: 2,
            content: 'Bubble with inner anger, but keep quiet'
          },
          {
            id: 3,
            content: 'Explain to other equally impatient people in the room that the doctor is always running late'
          },
          {
            id: 4,
            content: 'Complain in a loud voice, while tapping your foot impatiently'
          }
        ],
        headline: 'You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:'
      }
    ];
    setCards(data);
  };

  const Quiz = () => {
    return (
      <>
        <Card cards={cards} setCards={setCards} cardNumber={cardNumber} setIsQuestionSelected={setIsQuestionSelected} />
        <OptionSet
          cards={cards}
          cardNumber={cardNumber}
          isQuestionSelected={isQuestionSelected}
          setCardNumber={setCardNumber}
          setIsTestFinish={setIsTestFinish}
        />
      </>
    );
  };

  return (
    <div className="App">
      <h1>
        Are you an introvert or an extrovert?
        <span role="img" aria-label="lens">
          🔍
        </span>
      </h1>
      <Button onClick={onClickHandler} content="Go to test" />
      {!isTestFinish && cards.length > 0 && <Quiz />}
      {isTestFinish && (
        <Result
          randomNumber={Math.random() * (1 - 0) + 0 < 0.5}
          setIsTestFinish={setIsTestFinish}
          setCardNumber={setCardNumber}
        />
      )}
    </div>
  );
}
