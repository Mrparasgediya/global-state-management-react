import { createContext } from "react";

interface RouteStateType {
  routeName: string;
  setRouteName: Function;
}

export default createContext<RouteStateType>({
  routeName: "",
  setRouteName: () => {},
});
