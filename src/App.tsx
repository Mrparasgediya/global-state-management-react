import { useContext } from "react";
import Home from "./components/Home";
import Profile from "./components/Profile";
import RouteContext from "./components/RouteContext";

function App() {
  const { routeName } = useContext(RouteContext);

  switch (routeName) {
    case "home":
      return <Home />;
    case "profile":
      return <Profile />;
    default:
      return <div>Route not found!</div>;
  }
}

export default App;
