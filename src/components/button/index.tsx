import { IButton } from '../../interfaces';

const Button = (props: IButton) => {
  const { content, ...rest } = props;
  return <button {...rest}>{content}</button>;
};

export default Button;
