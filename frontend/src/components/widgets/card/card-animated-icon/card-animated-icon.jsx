import Lottie from "lottie-react";
import { useMemo } from "react";

import animationVideo from "../../../../assets/video/animation-servises.json";

import "./card-animated-icon.scss";

const CardAnimatedIcon = ({ Icon }) => {
  console.log("Rendering CardAnimatedIcon");

  const memoizedAnimation = useMemo(() => animationVideo, []);

  return (
    <>
      <div className="card-animated-icon">
        <Lottie
          className="card-animated-icon__video"
          animationData={memoizedAnimation}
          loop
          muted
          rendererSettings={{
            preserveAspectRatio: "xMidYMid slice",
            progressiveLoad: true,
          }}
        />

        <Icon className="card-animated-icon__icon" />
      </div>
    </>
  );
};

export default CardAnimatedIcon;
