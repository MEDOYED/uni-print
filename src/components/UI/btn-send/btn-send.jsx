import "./btn-send.scss";

const BtnSend = ({ text }) => {
  return (
    <>
      <button className="btn-send" type="submit">
        {text}
      </button>
    </>
  );
};

export default BtnSend;
