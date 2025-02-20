import "./text-area.scss";

const TextArea = ({ value, onChange }) => {
  return (
    <>
      <textarea
        className="text-area"
        name="message"
        placeholder="Ваше повідомлення"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows="4"
      />
    </>
  );
};

export default TextArea;
