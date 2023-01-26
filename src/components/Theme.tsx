import React from "react";
import useTheme from "./themeHook";

const Theme = ({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) => {
  const [myTheme, setMyTheme] = useTheme();

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: myTheme === "dark" ? "gray" : "pink",
      }}
    >
      <button onClick={setMyTheme}>click</button>
      {children}
    </div>
  );
};

export default Theme;
