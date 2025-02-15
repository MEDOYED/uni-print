import { useState } from "react";

import "./input-name.scss";

const InputName = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    console.log(e);
  };

  return (
    <>
      <input
        className="input-name"
        type="text"
        htmlFor="name"
        id="name"
        name="name"
        onChange={handleChange}
        required
      />
    </>
  );
};

export default InputName;
