import "./input-phone-number.scss";

const InputPhoneNumber = ({ value, onChange }) => {
  const handleChange = (e) => {
    // Удаляем все нецифровие символи
    let inputValue = e.target.value.replace(/\D/g, "").slice(0, 12);

    if (!inputValue.startsWith("380")) {
      // Добавляем 380, если пользователь случайно його стер
      inputValue = "380" + inputValue;
    }
    // Добавляем "+"
    inputValue = "+" + inputValue;

    // Обновляем родительский компонент
    onChange(inputValue);
  };

  return (
    <>
      <input
        className="input-phone-number"
        type="tel"
        id="phone"
        name="phone"
        value={value}
        onChange={handleChange}
        placeholder="+380XXXXXXXXX"
        pattern="^[0-9]{9}$"
        // етот потерн пока оставлю на всякий слкчай
        // pattern="^\+380[0-9]{9}$"
        autoComplete="tel"
        required
      />
    </>
  );
};

export default InputPhoneNumber;
