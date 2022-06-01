import { IOption } from '../../interfaces';
import Button from '../button';

const Option = ({ cards, cardNumber, isQuestionSelected, setCardNumber, setIsTestFinish }: IOption) => {
  return (
    <>
      <Button
        disabled={cardNumber <= 0}
        content="< Previous question"
        onClick={() => (cardNumber > 0 ? setCardNumber(cardNumber - 1) : null)}
      />
      {cardNumber + 1 < cards.length && (
        <Button
          disabled={!isQuestionSelected}
          onClick={() => (cardNumber + 1 < cards.length ? setCardNumber(cardNumber + 1) : null)}
          content="Next question >"
        />
      )}
      {cardNumber + 1 === cards.length && (
        <Button disabled={!isQuestionSelected} onClick={() => setIsTestFinish(true)} content="Finish test" />
      )}
    </>
  );
};

export default Option;
