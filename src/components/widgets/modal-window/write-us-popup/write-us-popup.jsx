import InputName from "../../../UI/input-name/input-name";

import "./write-us-popup.scss";

const WriteUsPopup = ({ isOpen, onClick }) => {
  if (!isOpen) return null;
  return (
    <>
      <div className="write-us-popup">
        <button onClick={onClick} className="close-window">
          close
        </button>
        <form action="">
          <InputName />

          {/* <input type="tel" /> */}
        </form>

        <div>bob</div>
      </div>
    </>
  );
};

export default WriteUsPopup;
