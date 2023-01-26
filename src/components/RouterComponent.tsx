import { useState } from "react";
import RouteContext from "./RouteContext";

interface RoutePropInterface {
  children: React.ReactElement;
}

const RouterContextProvider = (props: RoutePropInterface) => {
  const [routeName, setRouteName] = useState("home");

  return (
    <RouteContext.Provider value={{ routeName, setRouteName }}>
      {props.children}
    </RouteContext.Provider>
  );
};

export default RouterContextProvider;
