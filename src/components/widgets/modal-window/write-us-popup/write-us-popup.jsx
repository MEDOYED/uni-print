import InputName from "../../../UI/input-name/input-name";

import "./write-us-popup.scss";

const WriteUsPopup = ({ isOpen, onClick }) => {
  if (!isOpen) return null;
  return (
    <>
      <div className="write-us-popup">
        <div className="write-us-popup__content">
          <button onClick={onClick} className="close-window">
            close
          </button>
          <form className="form" action="">
            <InputName className="input" />
            <InputName />
            <InputName />
            <InputName />
          </form>
        </div>
      </div>
    </>
  );
};

export default WriteUsPopup;
