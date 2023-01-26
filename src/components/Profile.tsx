import Theme from "./Theme";
import useRouter from "./useRouter";

const Profile = () => {
  const [, setRouteName] = useRouter();

  return (
    <Theme>
      <h1>Profile Section</h1>
      <button onClick={setRouteName.bind(this, "home")}>Go to Home</button>
    </Theme>
  );
};

export default Profile;
