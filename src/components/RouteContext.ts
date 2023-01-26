import { createContext } from "react";

export interface RouteStateType {
  routeName: string;
  setRouteName: Function;
}

export default createContext<RouteStateType>({
  routeName: "",
  setRouteName: () => {},
});
