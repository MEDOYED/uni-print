import { X } from "lucide-react";
import useThemeStore from "../../../../store/themeStore";

import InputName from "../../../UI/input-name/input-name";
import InputEmail from "../../../UI/input-email/input-email";
import BtnSend from "../../../UI/btn-send/btn-send";

import "./write-us-popup.scss";

const WriteUsPopup = ({ isOpen, onClick }) => {
  const theme = useThemeStore((state) => state.theme);
  console.log(theme);

  const writeUsPopupClassName = theme === "light" ? "write-us-popup light" : "write-us-popup";

  const writeUsPopupContentClassName =
    theme === "light" ? "write-us-popup__content light" : "write-us-popup__content";

  if (!isOpen) return null;

  return (
    <>
      <div className={writeUsPopupClassName}>
        <div className={writeUsPopupContentClassName}>
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
