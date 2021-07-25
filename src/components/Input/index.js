import "./styles.css";

const Input = ({ placeHolder, ...rest }) => {
  return (
    <div className="input_container">
      <input placeholder={placeHolder} {...rest} />
    </div>
  );
};

export { Input };
