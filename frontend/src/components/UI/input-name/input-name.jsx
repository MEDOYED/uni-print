import useThemeStore from "../../../store/themeStore";

import "./input-name.scss";

const InputName = ({ value, onChange }) => {
  const theme = useThemeStore(state => state.theme);
  console.log("4444444444");
  console.log(theme);
  console.log("4444444444");

  const className =
    theme === "light" ? "input-name light" : "input-name";
  return (
    <>
      <input
        className={className}
        type="text"
        id="name"
        name="name"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Ваше ім'я"
        required
      />
    </>
  );
};

export default InputName;
