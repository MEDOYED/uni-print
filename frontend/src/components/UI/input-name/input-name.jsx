import "./input-name.scss";

const InputName = ({ value, onChange }) => {
  return (
    <>
      <input
        className="input-name"
        type="text"
        id="name"
        name="name"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Ваше ім'я"
        required
      />
    </>
  );
};

export default InputName;
