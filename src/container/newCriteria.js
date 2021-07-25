import React, { useState } from "react";

import { Modal, Input, Button } from "../components";

const NewCriteria = ({ hide, handleClick }) => {
  const [criteria, setCriteria] = useState("");

  const handleChange = (e) => {
    setCriteria(e.target.value);
  };

  const createNewCriteria = () => {
    handleClick(criteria);
    hide();
  };

  return (
    <Modal hide={hide}>
      <h1>Add New Criteria</h1>
      <Input
        value={criteria}
        onChange={handleChange}
        placeHolder={"Add Criteria"}
        required
      />
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }} />
        <Button onClick={createNewCriteria}>add new</Button>
      </div>
    </Modal>
  );
};

export { NewCriteria };
