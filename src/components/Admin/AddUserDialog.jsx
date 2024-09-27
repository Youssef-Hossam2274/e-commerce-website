import React, { useEffect, useState } from "react";
import {
  Input,
  Button,
  Dialog,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
  Select,
  Option,
  useSelect,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import RegistrationErrorMsg from "../RegistrationErrorMsg";
import { addUser } from "../../../redux/reducers/usersSlice";
import { IoMdAdd } from "react-icons/io";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
const PWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export function AddUserDialog() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const dispatch = useDispatch();
  const { users, currentUser } = useSelector((state) => state.users);
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    role: "",
  });
  const [errorMsg, setErrorMsg] = useState({
    email: "",
    password: "",
  });

  const validation = () => {
    setErrorMsg({
      email: "",
      password: "",
    });

    const isFound = users.some(
      (user) => user.email === inputData.email && user.email !== inputData.email
    );
    if (isFound) {
      setErrorMsg((prevError) => {
        return {
          ...prevError,
          email: "this account is already exist. try to use another email",
        };
      });
    } else if (!EMAIL_REGEX.test(inputData.email)) {
      setErrorMsg((prevError) => {
        return {
          ...prevError,
          email: "Please enter a valid email address (e.g., name@example.com).",
        };
      });
    }

    if (!PWD_REGEX.test(inputData.password)) {
      setErrorMsg((prevError) => {
        return {
          ...prevError,
          password:
            "Use at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.",
        };
      });
    }
  };

  useEffect(() => {
    validation();
  }, [inputData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addUser(inputData));
  };

  const disableBtn = () => {
    if (!inputData.name || !inputData.email || !inputData.password) return true;

    if (errorMsg.email || errorMsg.password) return true;

    return false;
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        className="flex  items-center justify-center gap-2 bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 dark:bg-blue-gray-700 dark:text-gray-200 dark:hover:bg-blue-gray-600"
      >
        <IoMdAdd size="20" />
        Add New User
      </Button>

      <Dialog
        size="lg"
        open={open}
        handler={handleOpen}
        className="p-4 dark:bg-gray-800 dark:text-gray-100"
      >
        <DialogHeader className="relative m-0 block dark:bg-gray-800">
          <Typography
            variant="h4"
            color="blue-gray"
            className="dark:text-white"
          >
            Add User
          </Typography>

          <Typography className="mt-1 font-normal text-gray-600 dark:text-gray-400">
            Keep your records up-to-date and organized.
          </Typography>

          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5 dark:text-gray-400"
            onClick={handleOpen}
          >
            <XMarkIcon className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>

        <DialogBody className="space-y-4 pb-6 dark:bg-gray-800 dark:text-gray-100">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium dark:text-gray-200"
              >
                Name
              </Typography>
              <Input
                className="placeholder:opacity-100 focus:!border-t-gray-900 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                color="gray"
                size="lg"
                placeholder="Enter your name"
                name="name"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
                onChange={(e) =>
                  setInputData((prevData) => {
                    return { ...prevData, name: e.target.value };
                  })
                }
              />
            </div>

            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium dark:text-gray-200"
              >
                Email
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="eg. example@gmail.com"
                name="email"
                className="placeholder:opacity-100 focus:!border-t-gray-900 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
                onChange={(e) =>
                  setInputData((prevData) => {
                    return { ...prevData, email: e.target.value };
                  })
                }
              />
              {inputData.email && errorMsg.email && (
                <RegistrationErrorMsg msg={errorMsg.email} />
              )}
            </div>

            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium dark:text-gray-200"
              >
                Password
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="eg. Aabc123@"
                name="email"
                className="placeholder:opacity-100 focus:!border-t-gray-900 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
                onChange={(e) =>
                  setInputData((prevData) => {
                    return { ...prevData, password: e.target.value };
                  })
                }
              />
              {inputData.password && errorMsg.password && (
                <RegistrationErrorMsg msg={errorMsg.password} />
              )}
            </div>

            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium dark:text-gray-200"
              >
                gender
              </Typography>
              <Select
                className="placeholder:opacity-100 focus:!border-t-gray-900 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                name="gender"
                value={inputData.gender}
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
                onChange={(value) =>
                  setInputData((prevData) => {
                    return { ...prevData, gender: value };
                  })
                }
              >
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
              </Select>
            </div>

            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium dark:text-gray-200"
              >
                Role
              </Typography>
              <Select
                className="placeholder:opacity-100 focus:!border-t-gray-900 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                name="role"
                value={inputData.role}
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
                onChange={(value) =>
                  setInputData((prevData) => {
                    return { ...prevData, role: value };
                  })
                }
              >
                <Option value="admin">Admin</Option>
                <Option value="user">User</Option>
              </Select>
            </div>

            <DialogFooter>
              <Button
                disabled={disableBtn()}
                type="submit"
                className="ml-auto dark:bg-gray-700 dark:text-white"
                onClick={handleOpen}
              >
                Add User
              </Button>
            </DialogFooter>
          </form>
        </DialogBody>
      </Dialog>
    </>
  );
}
