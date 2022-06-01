import React from 'react';
import { ICard } from '../../interfaces';
import Input from '../input';

interface IQuestionList {
  cards: ICard[];
  cardNumber: number;
  setCards: (cards: ICard[]) => void;
  setIsQuestionSelected: (selected: boolean) => void;
}

const QuestionList = ({ cards, setCards, cardNumber, setIsQuestionSelected }: IQuestionList) => {
  const { headline, questionSelectedID, questions } = cards[cardNumber];

  const onClickHandler = (event: React.SyntheticEvent) => {
    const inputElement = event.currentTarget as HTMLElement;
    const questionID = parseInt(inputElement.dataset.idx as string);
    cards[cardNumber].questionSelectedID = questionID;

    setCards([...cards]);
    setIsQuestionSelected(true);
  };

  return (
    <>
      <h2>{headline}</h2>
      <ul>
        {questions.map(({ content, id }) => (
          <li key={id} className="question-list">
            <Input
              id={id}
              className={id === questionSelectedID ? 'question-selected' : 'question'}
              onClick={onClickHandler}
              isSelected={id === questionSelectedID}
              value={content}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default QuestionList;
