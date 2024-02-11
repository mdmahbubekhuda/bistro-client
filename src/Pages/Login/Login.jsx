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
import { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../context/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const captchaRef = useRef(null);
  const [loginDisabled, setLoginDisabled] = useState(true);
  const { login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;

    login(email, password).then((res) => {
      const user = res.user;
      console.log(user);
    });

    setLoginDisabled(true);
    reset();
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleCaptcha = () => {
    setLoginDisabled(true);
    const user_captcha_value = captchaRef.current.children[0].value;
    if (validateCaptcha(user_captcha_value)) setLoginDisabled(false);
  };

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
            <LoadCanvasTemplate />
            <Input label="Captcha" size="lg" type="input" ref={captchaRef} />
            <Button
              variant="gradient"
              className="w-fit"
              onClick={handleCaptcha}
            >
              Validate
            </Button>
            {/* captcha */}
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              fullWidth
              type="submit"
              disabled={loginDisabled}
            >
              Sign In
            </Button>
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
        </form>
      </Card>
    </div>
  );
};

export default Login;
