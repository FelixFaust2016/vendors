import "./style.css";

const SideBar = ({ data, handleClick, deleteCriteria }) => {
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
        <div key={i} className="colums">
          <img src={"/assets/chevron.svg"} alt={""} />
          <p>{data}</p>
          <img
            onClick={() => deleteCriteria(data)}
            className="del"
            src={"/assets/del.svg"}
            alt={""}
          />
        </div>
      ))}
    </section>
  );
};

export { SideBar };
