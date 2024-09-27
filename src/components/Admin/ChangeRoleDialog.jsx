import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../redux/reducers/usersSlice";

export function ChangeRoleDialog({ UserName, role, userId }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  const dispatch = useDispatch();

  const disableBtn = () => {
    if (userId === 1) return true;

    return false;
  };

  return (
    <>
      <Button
        variant="outlined"
        onClick={handleOpen}
        disabled={disableBtn()}
        className="text-white bg-red-900 border-none"
      >
        make it {role === "admin" ? <>User</> : <>Admin</>}
      </Button>
      <Dialog open={open} handler={handleOpen} className="dark:bg-gray-800">
        <DialogHeader className="dark:text-white">
          Are you sure to make {UserName}{" "}
          {role === "admin" ? <>User</> : <>Admin</>}
        </DialogHeader>
        <DialogFooter className="flex gap-3">
          <Button
            variant="outlined"
            onClick={handleOpen}
            className="mr-1 dark:border-white dark:text-white"
          >
            Cancel
          </Button>
          <Button
            variant="filled"
            className="bg-red-900"
            onClick={() => {
              const updatedUser = {
                id: userId,
                role: role === "admin" ? "user" : "admin",
              };
              dispatch(updateUser(updatedUser));
              handleOpen();
            }}
          >
            Yes
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
