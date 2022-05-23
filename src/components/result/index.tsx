import Button from "../button";

interface IResult {
  randomNumber: boolean;
  setCardNumber: (cardNumber: number) => void;
  setIsTestFinish: (setIsTestFinish: boolean) => void;
}

interface IMessage {
  msg: string;
  setCardNumber: (cardNumber: number) => void;
  setIsTestFinish: (setIsTestFinish: boolean) => void;
}

const Message = ({ msg, setCardNumber, setIsTestFinish }: IMessage) => {
  return (
    <>
      <h3>{msg}</h3>
      <Button
        content="Retake test"
        onClick={() => {
          setCardNumber(0);
          setIsTestFinish(false);
        }}
      />
    </>
  );
};

const Result = ({ randomNumber, setCardNumber, setIsTestFinish }: IResult) =>
  randomNumber ? (
    <Message
      msg="You are more of an extrovert."
      setCardNumber={setCardNumber}
      setIsTestFinish={setIsTestFinish}
    />
  ) : (
    <Message
      msg="You are more of an introvert."
      setCardNumber={setCardNumber}
      setIsTestFinish={setIsTestFinish}
    />
  );

export default Result;
