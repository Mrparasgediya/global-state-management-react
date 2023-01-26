import useRouter from "./useRouter";

const Profile = () => {
  const [, setRouteName] = useRouter();

  return (
    <>
      <h1>Profile Section</h1>
      <button onClick={setRouteName.bind(this, "home")}>Go to Home</button>
    </>
  );
};

export default Profile;
