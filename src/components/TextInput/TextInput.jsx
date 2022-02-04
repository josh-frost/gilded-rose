import './TextInput.scss';

const TextInput = ({ handleChange, label, ...inputProps }) => {
  const labelClassName = `text-input-label${
    inputProps.value.length ? ' shrink' : ''
  }`;

  return (
    <div className="group">
      <input className="text-input" onChange={handleChange} {...inputProps} />
      {label ? <label className={labelClassName}>{label}</label> : null}
    </div>
  );
};

export default TextInput;
