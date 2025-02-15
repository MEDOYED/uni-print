import { X } from "lucide-react";

import InputName from "../../../UI/input-name/input-name";
import InputEmail from "../../../UI/input-email/input-email";
import BtnSend from "../../../UI/btn-send/btn-send";

import "./write-us-popup.scss";

const WriteUsPopup = ({ isOpen, onClick }) => {
  if (!isOpen) return null;
  return (
    <>
      <div className="write-us-popup">
        <div className="write-us-popup__content">
          <button onClick={onClick} className="close-window">
            <X />
          </button>
          <form className="form" action="">
            <InputName />
            <InputEmail />
            <BtnSend text={"Надіслати"} />
          </form>
        </div>
      </div>
    </>
  );
};

export default WriteUsPopup;
