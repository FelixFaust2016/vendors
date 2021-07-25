import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { Modal, Input, Button } from "../components";

const NewVendor = ({ allCriteria, hide, setVendorList, vendorList }) => {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [overallScore, setOverallScore] = useState("");
  const [vendorCriteria, setCriteria] = useState({});

  useEffect(() => {
    let test = allCriteria.reduce(
      (acc, val, index) => ({
        ...acc,
        [String(val).toLowerCase().split(" ").join("_")]: "",
      }),
      {}
    );
    setCriteria(test);
    // console.log(Object.entries(test));
  }, [allCriteria]);

  const handleVendorChange = (e) => {
    // console.log(vendorCriteria, e.target.name, allCriteria);
    setCriteria((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();

    setVendorList([
      ...vendorList,
      { img, name, overallScore, ...vendorCriteria },
    ]);

    hide()
  };

  return (
    <Modal hide={hide}>
      <h1>Add New Vendor</h1>
      <form onSubmit={submitForm}>
        <Input
          placeHolder={"Vendor Logo"}
          value={img}
          onChange={(e) => setImg(e.target.value)}
          required
        />
        <Input
          placeHolder={"Vendor Name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          value={overallScore}
          placeHolder={"Overall Score"}
          onChange={(e) => setOverallScore(e.target.value)}
          required
        />
        {allCriteria?.length ? (
          Object.entries(vendorCriteria)?.map((data, i) => (
            <Input
              key={i}
              placeHolder={allCriteria[i]}
              name={data[0]}
              value={data[1]}
              onChange={handleVendorChange}
              required
            />
          ))
        ) : (
          <></>
        )}
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }} />
          <Button type={"submit"}>Submit</Button>
        </div>
      </form>
    </Modal>
  );
};

export { NewVendor };
