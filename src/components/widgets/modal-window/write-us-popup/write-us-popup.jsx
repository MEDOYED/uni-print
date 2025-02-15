import { X } from "lucide-react";
import useThemeStore from "../../../../store/themeStore";

import InputName from "../../../UI/input-name/input-name";
import InputEmail from "../../../UI/input-email/input-email";
import BtnSend from "../../../UI/btn-send/btn-send";

import "./write-us-popup.scss";

const WriteUsPopup = ({ isOpen, onClick }) => {
  const theme = useThemeStore((state) => state.theme);
  console.log(theme);

  if (!isOpen) return null;

  if (theme === "dark")
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

  if (theme === "light")
    return (
      <>
        <div className="write-us-popup light">
          <div className="write-us-popup__content light">
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
