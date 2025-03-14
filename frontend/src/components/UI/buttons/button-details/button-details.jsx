import { Link } from "react-router-dom";

import { MoveRight } from "lucide-react";

import "./button-details.scss";
import React from "react";

const ButtonDetails = ({ link }) => {
  return (
    <>
      {link && (
        <Link to={link} className="button-read-more">
          Детальніше <MoveRight />
        </Link>
      )}
    </>
  );
};

export default ButtonDetails;
