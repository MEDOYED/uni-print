import "./btn-phone.scss";

const BtnPhone = ({ margin = "0px" }) => {
  return (
    <>
      <a
        href="tel:+380983194257"
        className="btn-phone"
        style={{ margin }}
      >
        +38 (098) 319 42 57
      </a>
    </>
  );
};

export default BtnPhone;
