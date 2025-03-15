import { useState } from "react";

import "./button-read-more.scss";

const ButtonReadMore = ({ onToggle }) => {
  const [isActive, setIsActive] = useState(true);

  const onHandleClick = () => {
    setIsActive(prev => !prev);

    if (onToggle) {
      onToggle(isActive);
    }
  };

  return (
    <>
      <button className="button-read-more" onClick={onHandleClick}>
        Читати далі
      </button>
    </>
  );
};

export default ButtonReadMore;
