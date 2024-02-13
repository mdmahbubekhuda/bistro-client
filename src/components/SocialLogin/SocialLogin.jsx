import { Button } from "@material-tailwind/react";
import { LiaGithub, LiaGoogle } from "react-icons/lia";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { gitHubLogin, googleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const navigate = useNavigate();

  const handleGitHub = () => {
    gitHubLogin().then((result) => {
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
        role: "user",
      };
      axiosPublic.post("users", userInfo).then((res) => {
        console.log(res.data);
        // navigate
        navigate(location.state?.from?.pathname || "/", { replace: true });
      });
    });
  };
  const handleGoogle = () => {
    googleLogin().then((result) => {
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
        role: "user",
      };
      axiosPublic.post("users", userInfo).then((res) => {
        console.log(res.data);
        // navigate
        navigate(location.state?.from?.pathname || "/", { replace: true });
      });
    });
  };

  return (
    <div className="flex justify-around">
      <Button
        onClick={handleGitHub}
        variant="gradient"
        className="flex items-center gap-3"
      >
        <LiaGithub className="h-5 w-5" />
        GitHub
      </Button>
      <Button
        onClick={handleGoogle}
        variant="gradient"
        className="flex items-center gap-3"
      >
        <LiaGoogle className="h-5 w-5" />
        Google
      </Button>
    </div>
  );
};

export default SocialLogin;
