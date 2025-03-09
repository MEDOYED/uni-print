import { X } from "lucide-react";
import useThemeStore from "../../../../store/themeStore";
import { useState } from "react";
import axios from "axios";

import Input from "../../../UI/inputs/input/input";
import InputPhoneNumber from "../../../UI/input-phone-number/input-phone-number";
import TextArea from "../../../UI/text-area/text-area";
import BtnSend from "../../../UI/btn-send/btn-send";

import "./write-us-popup.scss";

const WriteUsPopup = ({ isOpen, onClick }) => {
  // состояние для форми
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // получение теми с Zustand
  const theme = useThemeStore(state => state.theme);
  console.log(theme);

  // опридиление класов
  const writeUsPopupClassName =
    theme === "light" ? "write-us-popup light" : "write-us-popup";
  const writeUsPopupContentClassName =
    theme === "light"
      ? "write-us-popup__content light"
      : "write-us-popup__content";

  // функиця для обновления сосояния форми
  const handleInputChange = (field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };

  // отправка форми
  const handleSubmit = async e => {
    e.preventDefault();
    console.log("Send data:", formData);

    // axios post
    try {
      const response = await axios.post(
        "http://localhost:3000/send-email",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      console.log("ПЕРЕМОГА:", response.data);
    } catch (error) {
      console.log(
        "Помилка:",
        error.response ? error.response.data : error.message,
      );
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
            <Input
              value={formData.name}
              onChange={value => handleInputChange("name", value)}
              type="text"
              name="name"
              placeholder="Ваше ім'я"
            />
            <InputPhoneNumber
              value={formData.phone.replace("+380", "")}
              onChange={value => handleInputChange("phone", value)}
            />

            <Input
              value={formData.email}
              onChange={value => handleInputChange("email", value)}
              type="email"
              name="email"
              placeholder="E-mail"
            />

            <TextArea
              value={formData.message}
              onChange={value => handleInputChange("message", value)}
            />

            <BtnSend text={"Надіслати"} />
          </form>
        </div>
      </div>
    </>
  );
};

export default WriteUsPopup;
