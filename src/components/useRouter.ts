import { useContext } from "react";
import RouteContext, { RouteStateType } from "./RouteContext";

const useRouter = (): [
  RouteStateType["routeName"],
  RouteStateType["setRouteName"]
] => {
  const { routeName, setRouteName } = useContext(RouteContext);
  return [routeName, setRouteName];
};

export default useRouter;
