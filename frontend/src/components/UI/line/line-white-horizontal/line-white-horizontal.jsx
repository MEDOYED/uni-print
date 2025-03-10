import useThemeStore from "../../../../store/themeStore";

import "./line-white-horizontal.scss";

const LineWhiteHorizontal = () => {
  const theme = useThemeStore(state => state.theme);

  console.log("aaaaa" + theme);

  const className =
    theme === "light"
      ? "line-white-horizontal dark"
      : "line-white-horizontal";

  return (
    <>
      <hr className={className} />
    </>
  );
};

export default LineWhiteHorizontal;
