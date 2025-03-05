import { Link } from "react-router";

import { MoveRight } from "lucide-react";

import "./button-read-more.scss";
import React from "react";

const ButtonReadMore = ({ link }) => {
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

export default ButtonReadMore;
