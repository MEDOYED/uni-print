import "./card-servise.scss";

const CardServise = ({ text, Icon }) => {
  return (
    <>
      <li className="card-servise">
        <Icon className="card-servise__icon" />
        <a className="card-servise__link" href="#">
          {text}
        </a>
      </li>
    </>
  );
};

export default CardServise;
