import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from ".";

describe("<Button />", () => {
  test('renders the button', () => {
    const onClickFn = jest.fn()
    const {container, getByText} = render(<Button content="Click me" onClick={onClickFn}/>)
    expect(getByText("Click me")).toBeInTheDocument();
    expect(container.firstChild).toMatchInlineSnapshot(`
    <button>
      Click me
    </button>
  `)
  })
})