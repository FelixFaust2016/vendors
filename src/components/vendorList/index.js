import { useState, useEffect } from "react";

import { ProgressBar } from "../../components";

import "./style.css";

const VendorList = ({ vendor, deleteVendor, toggleVendorBar, vendorKeys }) => {

  const [vKey, setVKey] = useState([]);

  useEffect(() => {
    setVKey(Object.keys(vendor));
  }, [vendor, vendorKeys]);

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
      <div className="colums">
        <ProgressBar value={vendor.overallScore} />
      </div>
      {vKey.map((vendorKey, i) =>
        vendorKey === "name" ||
        vendorKey === "img" ||
        vendorKey === "overallScore" ? null : (
          <main key={i}>
            <div className="colums">
            {console.log("each", vendorKey)}
              <p>{vendor[vendorKey]}</p>
            </div>
            <div
              style={{
                width: "100%",
                height:
                  toggleVendorBar && vendorKey === "funding_history"
                    ? "180px"
                    : "0",
                overflow: "hidden",
                transition: "0.3s ease-in-out",
              }}
            >
              <div style={{ background: "#efefef77" }} className="colums">
                <p style={{ marginLeft: "40px", fontSize: "12px" }}>2000</p>
              </div>
              <div className="colums">
                <p style={{ marginLeft: "40px", fontSize: "12px" }}>Dell</p>
              </div>
              <div style={{ background: "#efefef77" }} className="colums">
                <p style={{ marginLeft: "40px", fontSize: "12px" }}>Kal Gawa</p>
              </div>
            </div>
          </main>
        )
      )}
    </section>
  );
};

export { VendorList };
