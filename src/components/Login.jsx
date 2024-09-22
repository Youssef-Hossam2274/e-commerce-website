import { useState } from "react";
import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../redux/reducers/usersSlice";

export function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchUser(1));
    localStorage.setItem("id", 1);
    navigate("/");
  };
  return (
    <section className="grid text-center items-center dark:text-gray-100">
      <div>
        <Typography
          variant="h3"
          color="blue-gray"
          className="mb-2 dark:text-gray-100"
        >
          Log In
        </Typography>

        <Typography className="mb-16 text-gray-600 font-normal text-[18px] dark:text-gray-300">
          Enter your email and password to sign in
        </Typography>

        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-[24rem] text-left"
        >
          <div className="mb-6">
            <label htmlFor="email">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900 dark:text-gray-200"
              >
                Your Email
              </Typography>
            </label>
            <Input
              id="email"
              color="gray"
              size="lg"
              type="email"
              name="email"
              placeholder="name@mail.com"
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200 dark:bg-gray-700 dark:text-gray-100"
              labelProps={{
                className: "hidden",
              }}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900 dark:text-gray-200"
              >
                Password
              </Typography>
            </label>
            <Input
              size="lg"
              placeholder="********"
              labelProps={{
                className: "hidden",
              }}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200 dark:bg-gray-700 dark:text-gray-100"
              type={passwordShown ? "text" : "password"}
              icon={
                <i onClick={togglePasswordVisiblity}>
                  {passwordShown ? (
                    <EyeIcon className="h-5 w-5 dark:text-gray-100" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5 dark:text-gray-100" />
                  )}
                </i>
              }
            />
          </div>
          <div className="flex justify-end">
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              variant="small"
              className="font-medium dark:text-gray-300"
            >
              Forgot password
            </Typography>
          </div>
          <Button
            type="submit"
            color="gray"
            size="lg"
            className="mt-6 dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white"
            fullWidth
          >
            Log In
          </Button>

          <Typography
            variant="small"
            color="gray"
            className="!mt-4 text-center font-normal dark:text-gray-300"
          >
            Not registered?{" "}
            <Link
              to="../signup"
              className="font-medium text-gray-900 dark:text-gray-100"
            >
              Create account
            </Link>
          </Typography>
        </form>
      </div>
    </section>
  );
}

export default Login;
