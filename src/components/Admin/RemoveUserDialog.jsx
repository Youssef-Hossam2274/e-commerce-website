import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../../redux/reducers/usersSlice";

export function RemoveUserDialog({ UserName, UserId }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.users);

  const disableBtn = () => {
    if (id === UserId || UserId === 1) return true;

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
        Delete
      </Button>
      <Dialog open={open} handler={handleOpen} className="dark:bg-gray-800">
        <DialogHeader className="dark:text-white">
          Are you ready to remove {UserName}
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
              dispatch(deleteUser(UserId));
              handleOpen();
            }}
          >
            Remove
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
