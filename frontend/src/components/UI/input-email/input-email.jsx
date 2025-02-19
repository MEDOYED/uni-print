import "./input-email.scss";

const InputEmail = ({ value, onChange }) => {
  return (
    <>
      <input
        type="email"
        className="input-email"
        name="email"
        id="email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="E-mail"
        required
      />
    </>
  );
};

export default InputEmail;
