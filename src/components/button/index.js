import "./style.css";

const Button = ({ children, width, ...restProps }) => {
  return (
    <button {...restProps} style={{ width: width }}>
      {children}
    </button>
  );
};

export { Button };
