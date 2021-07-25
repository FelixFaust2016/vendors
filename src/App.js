import React, { useState } from "react";

import { Header, SideBar, VendorList } from "./components";
import { NewCriteria, NewVendor } from "./container";

const App = () => {
  const [showCriteriaModal, setCriteriaModal] = useState(false);

  const [showNewVendor, setNewVendor] = useState(false);

  const [data, setData] = useState([
    "Funding History",
    "Pricing",
    "Features",
    "Customer case studies",
  ]);

  const [vendorList, setVendorList] = useState([]);

  const handleAddCriteria = (newCriteria) => {
    setData([...data, newCriteria]);
  };

  const deleOjsectId = (name) => {
     
  }

  const deleteCriteria = (name) => {
    const criteria = data.filter((criteria) => criteria !== name);
    setData(criteria);
  };

  const deleteVendor = (name) => {
    const vendor = vendorList.filter((vendor) => vendor.name !== name);
    setVendorList(vendor);
  };

  const CriteriaModal = () => {
    setCriteriaModal(true);
  };

  const vendorModal = () => {
    setNewVendor(true);
  };

  return (
    <>
      {showNewVendor ? (
        <NewVendor
          vendorList={vendorList}
          setVendorList={setVendorList}
          allCriteria={data}
          hide={() => setNewVendor(false)}
        />
      ) : (
        <></>
      )}
      {showCriteriaModal ? (
        <NewCriteria
          handleClick={handleAddCriteria}
          hide={() => setCriteriaModal(false)}
        />
      ) : (
        ""
      )}
      <div className="app">
        <Header handleClick={CriteriaModal} />
        <div style={{ display: "flex" }}>
          <SideBar
            deleteCriteria={deleteCriteria}
            data={data}
            handleClick={vendorModal}
          />
          {vendorList.map((vendor, i) => (
            <VendorList
              deleteVendor={() => deleteVendor(vendor.name)}
              key={i}
              vendor={vendor}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
