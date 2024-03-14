import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
// import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
// import {
//   loadCaptchaEnginge,
//   LoadCanvasTemplate,
//   validateCaptcha,
// } from "react-simple-captcha";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import "animate.css";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  // const captchaRef = useRef(null);
  // const [loginDisabled, setLoginDisabled] = useState(true);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    login(email, password)
      .then((res) => {
        if (res.user) {
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
          navigate(location.state?.from?.pathname || "/", { replace: true });
        }
      })
      .catch((err) => {
        Swal.fire({
          title: "Ooops...",
          icon: "error",
          text: `${err.message}`,
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
      });

    // setLoginDisabled(true);
  };

  // useEffect(() => {
  //   loadCaptchaEnginge(6);
  // }, []);

  // const handleCaptcha = () => {
  //   setLoginDisabled(true);
  //   const user_captcha_value = captchaRef.current.children[0].value;
  //   if (validateCaptcha(user_captcha_value)) setLoginDisabled(false);
  // };

  return (
    <div className="flex justify-center my-[10%]">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardBody className="flex flex-col gap-4">
            {errors.email && (
              <Typography variant="small" color="red" className="-mb-3">
                * Email is required
              </Typography>
            )}
            <Input
              {...register("email", { required: true })}
              label="Email"
              size="lg"
            />
            {errors.password && (
              <Typography variant="small" color="red" className="-mb-3">
                * Password is required
              </Typography>
            )}
            <Input
              {...register("password", { required: true })}
              label="Password"
              size="lg"
              type="password"
            />
            {/* captcha */}
            {/* <LoadCanvasTemplate />
            <Input label="Captcha" size="lg" type="input" ref={captchaRef} />
            <Button
              variant="gradient"
              className="w-fit"
              onClick={handleCaptcha}
            >
              Validate
            </Button> */}
            {/* captcha */}
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
            <Button
              variant="gradient"
              fullWidth
              type="submit"
              // disabled={loginDisabled}
            >
              Sign In
            </Button>
          </CardBody>
        </form>
        <hr />
        <CardFooter className="pt-6">
          <SocialLogin />
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Typography
              as="span"
              variant="small"
              color="blue-gray"
              className="ml-1 font-bold"
            >
              <Link to={"/signup"}>Sign up</Link>
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
