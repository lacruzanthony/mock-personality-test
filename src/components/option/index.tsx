import Button from "../button";

interface IOption {
  cards: any;
  cardNumber: number;
  questionSelected: boolean;
  setCardNumber: (cardNumber: number) => void;
  setIsTestFinish: (setIsTestFinish: boolean) => void;
}

const Option = ({
  cards,
  cardNumber,
  questionSelected,
  setCardNumber,
  setIsTestFinish
}: IOption) => {
  return (
    <>
      <Button
        disabled={cardNumber <= 0}
        content="Previous question"
        onClick={() => (cardNumber > 0 ? setCardNumber(cardNumber - 1) : null)}
      />
      {cardNumber + 1 < cards.length && (
        <Button
          disabled={!questionSelected}
          onClick={() =>
            cardNumber + 1 < cards.length ? setCardNumber(cardNumber + 1) : null
          }
          content="Next question"
        />
      )}
      {cardNumber + 1 === cards.length && (
        <Button
          disabled={!questionSelected}
          onClick={() => setIsTestFinish(true)}
          content="Finish test"
        />
      )}
    </>
  );
};

export default Option;
