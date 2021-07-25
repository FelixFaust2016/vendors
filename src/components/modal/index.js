import "./style.css";

const Modal = ({ children, hide }) => {
  return (
    <>
      <div onClick={hide} className="tint"></div>
      <div className="modal_container">{children}</div>
    </>
  );
};

export { Modal };
