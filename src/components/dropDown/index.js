import React, { useState } from "react";

const DropDown = ({ data, onClick, setToggleVendorBar, toggleVendorBar }) => {
  const [drop, setDrop] = useState(false);

  const handleDropDown = () => {
    setDrop(!drop);
    setToggleVendorBar(!toggleVendorBar);
  };

  return (
    <main>
      <div className="colums">
        <img
          style={{
            transform: drop ? "rotate(90deg)" : "initial",
            transition: "0.3s ease-in-out",
          }}
          onClick={data === "Funding History" ? handleDropDown : null}
          src={"/assets/chevron.svg"}
          alt={""}
        />
        <p>{data}</p>
        <img
          onClick={onClick}
          className="del"
          src={"/assets/del.svg"}
          alt={""}
        />
      </div>
      {data === "Funding History" ? (
        <div
          style={{
            width: "100%",
            height: drop ? "180px" : "0",
            overflow: "hidden",
            transition: "0.3s ease-in-out",
          }}
        >
          <div style={{ background: "#efefef77" }} className="colums">
            <p style={{ marginLeft: "40px", fontSize: "12px" }}>Founded</p>
          </div>
          <div className="colums">
            <p style={{ marginLeft: "40px", fontSize: "12px" }}>Key Investor</p>
          </div>
          <div style={{ background: "#efefef77" }} className="colums">
            <p style={{ marginLeft: "40px", fontSize: "12px" }}>Founder</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </main>
  );
};

export { DropDown };
