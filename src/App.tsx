import React from "react";
import "./styles.css";
import axios from "axios";
import Button from "./components/button";
import QuestionList from "./components/question";
import OptionSet from "./components/option";
import Result from "./components/result";

interface ICard {
  headline: string;
  questions: string[];
}

export default function App() {
  const [cards, setCards] = React.useState<ICard[]>(() => []);
  const [cardNumber, setCardNumber] = React.useState(0);
  const [isQuestionSelected, setIsQuestionSelected] = React.useState(false);
  // TODO: derivate this state.
  const [isTestFinish, setIsTestFinish] = React.useState(false);

  React.useEffect(() => {
    setIsQuestionSelected(false);
  }, [cardNumber]);

  const onClickHandler = async () => {
    const { data } = await axios.get<ICard[]>("http://localhost:3333/cards");
    setCards(data);
  };

  const Quiz = () => {
    const card = cards[cardNumber];
    return (
      <>
        <QuestionList
          headline={card.headline}
          questions={card.questions}
          setQuestionSelected={setIsQuestionSelected}
        />
        <OptionSet
          cards={cards}
          cardNumber={cardNumber}
          questionSelected={isQuestionSelected}
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
