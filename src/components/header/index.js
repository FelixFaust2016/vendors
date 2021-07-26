import "./style.css";

const Header = ({ handleClick }) => {
  return (
    <div className="header_container">
      <div onClick={handleClick}>
        <p>add criteria</p>
        <img
          style={{ width: "12px", marginLeft: "10px" }}
          src={"/assets/down-chevron.svg"}
          alt={""}
        />
      </div>
    </div>
  );
};

export { Header };
