import "./green-button.scss";

const GreenButton = ({ text, onClick }) => {
  return (
    <>
      <button onClick={onClick} className="green-button">
        {text}
      </button>
    </>
  );
};

export default GreenButton;
