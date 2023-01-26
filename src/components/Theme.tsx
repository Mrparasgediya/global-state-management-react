import React from "react";
import useTheme from "./themeHook";

const Theme = ({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) => {
  const [theme, setTheme] = useTheme();

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: theme === "dark" ? "gray" : "pink",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <div>currTheme: {theme}</div>
        <button onClick={setTheme}>Toggle Theme</button>
      </div>{" "}
      {children}
    </div>
  );
};

export default Theme;
