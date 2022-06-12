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
    const { data } = await axios.get<ICard[]>('http://localhost:3333/cards');
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
