import { useContext } from "react";
import RouteContext from "./RouteContext";

const Profile = () => {
  const { setRouteName } = useContext(RouteContext);
  return (
    <>
      <h1>Profile Section</h1>
      <button onClick={setRouteName.bind(this, "home")}>Go to Home</button>
    </>
  );
};

export default Profile;
