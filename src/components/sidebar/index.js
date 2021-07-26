import { DropDown } from "../../components";
import "./style.css";

const SideBar = ({ data, handleClick, deleteCriteria, setToggleVendorBar, toggleVendorBar }) => {
  return (
    <section className="section_container">
      <div onClick={handleClick} className="add_vendor">
        <img src={"/assets/plus.svg"} alt={""} />
        <p>Add new vendor</p>
      </div>
      <div className="colums">
        <p>Overall score</p>
      </div>
      {data.map((data, i) => (
        <DropDown
          setToggleVendorBar={setToggleVendorBar}
          toggleVendorBar={toggleVendorBar}
          key={i}
          data={data}
          onClick={() => deleteCriteria(data)}
        />
      ))}
    </section>
  );
};

export { SideBar };
