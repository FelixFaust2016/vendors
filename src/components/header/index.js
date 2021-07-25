import "./style.css";

const Header = ({ handleClick }) => {
  return (
    <div className="header_container">
      <div onClick={handleClick}>
        <p>add criteria</p>
      </div>
    </div>
  );
};

export { Header };
