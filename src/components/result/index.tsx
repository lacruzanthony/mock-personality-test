import Button from "../button";
import React from "react";

interface IResult {
  randomNumber: number;
  setCardNumber: (cardNumber: number) => void;
  setIsTestFinish: (setIsTestFinish) => void;
}

interface IMessage {
  msg: string;
  setCardNumber: (cardNumber: number) => void;
  setIsTestFinish: (setIsTestFinish) => void;
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
