import Home from "./components/Home";
import Profile from "./components/Profile";
import useRouter from "./components/useRouter";

function App() {
  const [routeName] = useRouter();
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
