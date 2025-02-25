import "./button-email.scss";

const ButtonEmail = ({ margin }) => {
  return (
    <>
      <a
        href="mailto:uniprint.lviv@gmail.com"
        className="button-email"
        style={{ margin }}
      >
        uniprint.lviv@gmail.com
      </a>
    </>
  );
};

export default ButtonEmail;
