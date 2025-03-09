import useThemeStore from "../../../../store/themeStore";

import "./input.scss";

const Input = ({ value, onChange, type, name, placeholder }) => {
  const theme = useThemeStore(state => state.theme);
  console.log("4444444444");
  console.log(theme);
  console.log("4444444444");

  const className = theme === "light" ? "input light" : "input";
  return (
    <>
      <input
        className={className}
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        required
      />
    </>
  );
};

export default Input;
