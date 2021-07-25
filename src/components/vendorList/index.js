import "./style.css";

const VendorList = ({ vendor, deleteVendor }) => {
  console.log(Object.keys(vendor));
  return (
    <section className="section_container">
      <div className="add_vendor">
        <img
          onClick={deleteVendor}
          className="close"
          src={"assets/close.svg"}
          alt={""}
        />
        <img src={vendor.img} alt={""} />
        <p>{vendor.name}</p>
      </div>
      {Object.keys(vendor).map((vendorItem) =>
        vendorItem === "name" || vendorItem === "img" ? null : (
          <div className="colums">
            <p>{vendor[vendorItem]}</p>
          </div>
        )
      )}
    </section>
  );
};

export { VendorList };
