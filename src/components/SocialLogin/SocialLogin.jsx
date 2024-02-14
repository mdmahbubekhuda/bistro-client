import { Button } from "@material-tailwind/react";
import { LiaGithub, LiaGoogle } from "react-icons/lia";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { gitHubLogin, googleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const navigate = useNavigate();

  const postLogin = async (currentUser) => {
    const userInfo = {
      email: await currentUser?.user?.email,
      name: await currentUser?.user?.displayName,
    };
    await axiosPublic.post("/users", userInfo).then((res) => {
      if (res.data.insertedId || res.data.userExist) {
        Swal.fire({
          title: "Sign In Successful",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,

          showClass: {
            popup: `
              animate__animated
              animate__fadeInDown
              animate__faster
            `,
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutUp
              animate__faster
            `,
          },
        });
        // navigate
        navigate(location.state?.from?.pathname || "/", { replace: true });
      }
    });
  };

  const handleGitHub = () => {
    gitHubLogin().then((result) => postLogin(result));
  };
  const handleGoogle = () => {
    googleLogin().then((result) => postLogin(result));
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
