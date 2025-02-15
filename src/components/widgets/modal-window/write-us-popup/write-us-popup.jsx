import InputName from "../../../UI/input-name/input-name";
import BtnSend from "../../../UI/btn-send/btn-send";

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
            <InputName />
            <InputName />
            <InputName />
            <InputName />
            <BtnSend text={"Надіслати"} />
          </form>
        </div>
      </div>
    </>
  );
};

export default WriteUsPopup;
