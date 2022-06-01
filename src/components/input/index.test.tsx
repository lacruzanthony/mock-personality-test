import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Input from '.';

describe('<Input />', () => {
  test('renders the input', () => {
    const id = 0;
    const value = 'my question';
    const className = 'my-class';
    const isSelected = false;
    const onClickFn = jest.fn();

    const { container, getByText } = render(
      <Input id={id} className={className} value={value} isSelected={isSelected} onClick={onClickFn} />
    );
    expect(getByText('my question')).toBeInTheDocument();
    expect(container.firstChild).toMatchInlineSnapshot(`
    <input
      data-idx="0"
      id="answer-0"
      name="answer-input"
      type="radio"
      value="my question"
    />
  `);
    expect(container.lastChild).toMatchInlineSnapshot(`
      <label
        class="my-class"
        for="answer-0"
      >
        my question
      </label>
    `);
  });
});
