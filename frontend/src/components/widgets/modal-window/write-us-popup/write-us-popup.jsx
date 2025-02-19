import { X } from "lucide-react";
import useThemeStore from "../../../../store/themeStore";
import { useState } from "react";
import axios from "axios";

import InputName from "../../../UI/input-name/input-name";
import InputEmail from "../../../UI/input-email/input-email";
import BtnSend from "../../../UI/btn-send/btn-send";

import "./write-us-popup.scss";

const WriteUsPopup = ({ isOpen, onClick }) => {
  // состояние для форми
  const [formData, setFormData] = useState({ name: "", email: "" });

  // получение теми с Zustand
  const theme = useThemeStore((state) => state.theme);
  console.log(theme);

  // опридиление класов
  const writeUsPopupClassName = theme === "light" ? "write-us-popup light" : "write-us-popup";
  const writeUsPopupContentClassName =
    theme === "light" ? "write-us-popup__content light" : "write-us-popup__content";

  // функиця для обновления сосояния форми
  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  // отправка форми
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Send data:", formData);

    // axios post
    try {
      const response = await axios.post("https://your-api-endpoint.com/send", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("ПЕРЕМОГА:", response.data);
    } catch (error) {
      console.log("Помилка:", error.response ? error.response.data : error.message);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className={writeUsPopupClassName}>
        <div className={writeUsPopupContentClassName}>
          <button onClick={onClick} className="close-window">
            <X />
          </button>
          <form className="form" onSubmit={handleSubmit}>
            <InputName
              value={formData.name}
              onChange={(value) => handleInputChange("name", value)}
            />
            <InputEmail
              value={formData.email}
              onChange={(value) => handleInputChange("email", value)}
            />
            <BtnSend text={"Надіслати"} />
          </form>
        </div>
      </div>
    </>
  );
};

export default WriteUsPopup;
