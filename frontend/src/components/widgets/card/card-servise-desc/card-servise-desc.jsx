import ButtonReadMore from "../../../UI/buttons/button-read-more/button-read-more";

import "./card-servise-desc.scss";

const CardServiseDesc = () => {
  return (
    <>
      <div className="card-servise-desc">
        <h2 className="heading">Об'ємні літери</h2>
        <p className="text">
          Люди, які створюють візуальні об’єкти, намагаються досягти
          максимальної реалістичності сприйняття об’єкту. Оскільки
          людина сприймає візуальну інформацію у тривимірному форматі,
          тому...
        </p>
        <ButtonReadMore />
      </div>
    </>
  );
};

export default CardServiseDesc;
