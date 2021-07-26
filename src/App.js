import React, { useState, useEffect } from "react";

import { Header, SideBar, VendorList } from "./components";
import { NewCriteria, NewVendor } from "./container";

const App = () => {
  const [showCriteriaModal, setCriteriaModal] = useState(false);

  const [showNewVendor, setNewVendor] = useState(false);

  const [vendorKeys, setVendorKeys] = useState([]);

  const [data, setData] = useState([
    "Funding History",
    "Pricing",
    "Features",
    "Customer case studies",
  ]);

  const [vendorList, setVendorList] = useState([]);

  const [toggleVendorBar, setToggleVendorBar] = useState(false);

  useEffect(() => {
    setVendorKeys(Object.keys(vendorList[0] ?? {}));
  }, [vendorList, data, showNewVendor]);

  const handleAddCriteria = (newCriteria) => {
    setData([...data, newCriteria]);
  };

  const deleteCriteria = (name) => {
    const criteria = data.filter((criteria) => criteria !== name);
    setData(criteria);

    console.log("jjj", name);
    // setVendorKeys(vendorKeys.filter((v,i)=>v !== name.toLowerCase().split(" ").join("_")))

    vendorList.map(
      (vendor, id) => delete vendor[name.toLowerCase().split(" ").join("_")]
    );
  };

  console.log("list", vendorKeys);

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
            setToggleVendorBar={setToggleVendorBar}
            toggleVendorBar={toggleVendorBar}
          />
          {vendorList.map((vendor, i) => (
            <VendorList
              toggleVendorBar={toggleVendorBar}
              deleteVendor={() => deleteVendor(vendor.name)}
              key={i}
              vendor={vendor}
              vendorKeys={vendorKeys}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
