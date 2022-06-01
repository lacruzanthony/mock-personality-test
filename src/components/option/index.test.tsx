import { Matcher, render, SelectorMatcherOptions, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Option from '.';
import { ICard } from '../../interfaces';

const cards: ICard[] = [
  {
    questionSelectedID: 0,
    questions: [
      {
        id: 1,
        content: 'Q11'
      },
      {
        id: 2,
        content: 'Q12'
      },
      {
        id: 3,
        content: 'Q13'
      },
      {
        id: 4,
        content: 'Q14'
      }
    ],
    headline: 'H1'
  },
  {
    questionSelectedID: 0,
    questions: [
      {
        id: 1,
        content: 'Q21'
      },
      {
        id: 2,
        content: 'Q22'
      },
      {
        id: 3,
        content: 'Q23'
      },
      {
        id: 4,
        content: 'Q24'
      }
    ],
    headline: 'H2'
  }
];
const cardNumber = 0;
const isQuestionSelected = false;
const setCardNumber = jest.fn;
const setIsTestFinish = jest.fn;

let container: HTMLElement;
let getByText: (id: Matcher, options?: SelectorMatcherOptions | undefined) => HTMLElement;

beforeEach(() => {
  ({ container, getByText } = render(
    <Option
      cards={cards}
      cardNumber={cardNumber}
      isQuestionSelected={isQuestionSelected}
      setCardNumber={setCardNumber}
      setIsTestFinish={setIsTestFinish}
    />
  ));
});

describe('<Option/>', () => {
  test('renders the Previous and Next button', () => {
    expect(getByText('< Previous question')).toBeInTheDocument();
    expect(getByText('Next question >')).toBeInTheDocument();
  });

  test('render the Finish test button', () => {
    const { getByText } = render(
      <Option
        cards={cards}
        cardNumber={1}
        isQuestionSelected={isQuestionSelected}
        setCardNumber={setCardNumber}
        setIsTestFinish={setIsTestFinish}
      />
    );
    expect(getByText('Finish test')).toBeInTheDocument();
  });

  test('Previous button is disabled', () => {
    expect(getByText('< Previous question')).toBeDisabled();
  });

  test('Next button is not present', () => {
    render(
      <Option
        cards={cards}
        cardNumber={2}
        isQuestionSelected={isQuestionSelected}
        setCardNumber={setCardNumber}
        setIsTestFinish={setIsTestFinish}
      />
    );

    expect(screen.getByText('Next question >')).not.toHaveValue();
  });
});
