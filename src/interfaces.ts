export interface IQuestions {
  id: number;
  content: string;
}

export interface ICard {
  headline: string;
  questionSelectedID: number;
  questions: IQuestions[];
}

export interface IInput {
  id: number;
  value: string;
  type?: string;
  className: string;
  isSelected: boolean;
  onClick: React.MouseEventHandler<HTMLInputElement>;
}

export interface IButton {
  content: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export interface IResult {
  randomNumber: boolean;
  setCardNumber: (cardNumber: number) => void;
  setIsTestFinish: (setIsTestFinish: boolean) => void;
}

export interface IMessage {
  msg: string;
  setCardNumber: (cardNumber: number) => void;
  setIsTestFinish: (setIsTestFinish: boolean) => void;
}

export interface IOption {
  cards: ICard[];
  cardNumber: number;
  isQuestionSelected: boolean;
  setCardNumber: (cardNumber: number) => void;
  setIsTestFinish: (setIsTestFinish: boolean) => void;
}
