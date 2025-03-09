import useThemeStore from "../../../store/themeStore";

import "./text-area.scss";

const TextArea = ({ value, onChange }) => {
  const theme = useThemeStore(state => state.theme);

  const className =
    theme === "light" ? "text-area light" : "text-area";
  return (
    <>
      <textarea
        className={className}
        name="message"
        placeholder="Ваше повідомлення"
        value={value}
        onChange={e => onChange(e.target.value)}
        rows="4"
      />
    </>
  );
};

export default TextArea;
