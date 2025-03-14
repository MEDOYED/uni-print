// import React from "react";
import { Link } from "react-router-dom";

import { MoveRight } from "lucide-react";

import "./button-details.scss";

const ButtonDetails = ({ link }) => {
  return (
    <>
      {link && (
        <Link to={link} className="button-details">
          Детальніше <MoveRight />
        </Link>
      )}
    </>
  );
};

export default ButtonDetails;
