import { IInput } from '../../interfaces';

const Input = (props: IInput) => {
  const { value, type = 'radio', id, className, isSelected, ...rest } = props;
  return (
    <>
      <input
        defaultChecked={isSelected}
        id={`answer-${id}`}
        data-idx={id}
        type={type}
        name="answer-input"
        defaultValue={value}
        {...rest}
      />
      <label htmlFor={`answer-${id}`} className={className}>
        {value}
      </label>
    </>
  );
};

export default Input;
