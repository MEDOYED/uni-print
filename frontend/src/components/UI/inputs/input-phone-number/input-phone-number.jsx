import useThemeStore from "../../../../store/themeStore";

import "./input-phone-number.scss";

const InputPhoneNumber = ({ value, onChange }) => {
  const handleChange = e => {
    // Удаляем все нецифровие символи
    let inputValue = e.target.value.replace(/\D/g, "").slice(0, 9);

    if (!inputValue.startsWith("380")) {
      // Добавляем 380, если пользователь случайно його стер
      inputValue = "380" + inputValue;
    }
    // Добавляем "+"
    inputValue = "+" + inputValue;

    // Обновляем родительский компонент
    onChange(inputValue);
  };

  // Получаем состояние теми сайта
  const theme = useThemeStore(state => state.theme);

  const className =
    theme === "light"
      ? "input-phone-number light"
      : "input-phone-number";

  return (
    <div className="input-p-n">
      <input
        className={className}
        type="tel"
        id="phone"
        name="phone"
        value={value}
        onChange={handleChange}
        placeholder="Ваш телефон"
        pattern="^[0-9]{9}$"
        autoComplete="tel"
        required
      />
      <div className="input-p-n__overlay">+380</div>
    </div>
  );
};

export default InputPhoneNumber;
