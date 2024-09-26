import React, { useEffect, useState } from "react";
import {
  Input,
  Button,
  Dialog,
  Textarea,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../../redux/reducers/productsSlice";
import RegistrationErrorMsg from "../RegistrationErrorMsg";
import { ProductCardView } from "./ProductCardView";

export function EditProductDialog({
  id,
  imgUrl,
  name,
  price,
  description,
  rate,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState({
    name: name,
    description: description,
    price: price,
    imgUrl: imgUrl,
    rating: {
      rate: rate,
      count: 0,
    },
  });
  const [errorMsg, setErrorMsg] = useState({
    name: "",
    description: "",
    price: "",
    imgUrl: "",
    rate: "",
  });

  const validation = () => {
    setErrorMsg({
      name: "",
      description: "",
      price: "",
      imgUrl: "",
      rate: "",
    });

    if (!inputData.imgUrl.startsWith("https://")) {
      setErrorMsg((prevError) => {
        return {
          ...prevError,
          imgUrl: "Url should start with https://",
        };
      });
    }

    if (inputData.rating.rate > 5 || inputData.rating.rate < 0) {
      setErrorMsg((prevError) => {
        return {
          ...prevError,
          rate: "Rate should between [0, 5]",
        };
      });
    }
    if (inputData.price < 0) {
      setErrorMsg((prevError) => {
        return {
          ...prevError,
          price: "Price should greater than zero",
        };
      });
    }
  };

  useEffect(() => {
    validation();
  }, [inputData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      ...inputData,
      id,
    };
    dispatch(updateProduct(updatedProduct));
  };

  const disableBtn = () => {
    if (
      !inputData.name ||
      !inputData.description ||
      !inputData.price ||
      !inputData.rating ||
      !inputData.imgUrl
    )
      return true;

    if (
      errorMsg.name ||
      errorMsg.description ||
      errorMsg.imgUrl ||
      errorMsg.price ||
      errorMsg.rate
    )
      return true;

    return false;
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        className="flex  items-center justify-center gap-2 bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 dark:bg-blue-gray-700 dark:text-gray-200 dark:hover:bg-blue-gray-600"
      >
        Edit
      </Button>
      <Dialog
        size="lg"
        open={open}
        handler={handleOpen}
        className="p-4 dark:bg-gray-800 dark:text-gray-100 max-h-[90vh] overflow-y-scroll"
      >
        <DialogHeader className="relative m-0 block dark:bg-gray-800">
          <Typography
            variant="h4"
            color="blue-gray"
            className="dark:text-white"
          >
            Edit Product
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

          <div className="flex justify-center my-7">
            <ProductCardView
              name={inputData.name}
              imgUrl={inputData.imgUrl}
              description={inputData.description}
              price={inputData.price}
              rate={inputData.rating.rate}
            />
          </div>
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
                placeholder="eg. White Shoes"
                name="name"
                value={inputData.name}
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
              {inputData.name && errorMsg.name && (
                <RegistrationErrorMsg msg={errorMsg.name} />
              )}
            </div>

            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium dark:text-gray-200"
              >
                Image
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="eg. https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg"
                name="imgUrl"
                value={inputData.imgUrl}
                className="placeholder:opacity-100 focus:!border-t-gray-900 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
                onChange={(e) =>
                  setInputData((prevData) => {
                    return { ...prevData, imgUrl: e.target.value };
                  })
                }
              />
              {inputData.imgUrl && errorMsg.imgUrl && (
                <RegistrationErrorMsg msg={errorMsg.imgUrl} />
              )}
            </div>

            <div className="flex gap-4">
              <div className="w-full">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 text-left font-medium dark:text-gray-200"
                >
                  Price
                </Typography>
                <Input
                  color="gray"
                  type="number"
                  size="lg"
                  placeholder="eg. 100"
                  name="price"
                  value={inputData.price}
                  className="placeholder:opacity-100 focus:!border-t-gray-900 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                  onChange={(e) =>
                    setInputData((prevData) => {
                      return { ...prevData, price: e.target.value };
                    })
                  }
                />
                {inputData.price && errorMsg.price ? (
                  <RegistrationErrorMsg msg={errorMsg.price} />
                ) : (
                  <></>
                )}
              </div>

              <div className="w-full">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 text-left font-medium dark:text-gray-200"
                >
                  Rate
                </Typography>
                <Input
                  type="number"
                  color="gray"
                  size="lg"
                  placeholder="eg. 3.5"
                  name="rate"
                  value={inputData.rating.rate}
                  className="placeholder:opacity-100 focus:!border-t-gray-900 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                  onChange={(e) =>
                    setInputData((prevData) => {
                      return {
                        ...prevData,
                        rating: { ...prevData.rating, rate: e.target.value },
                      };
                    })
                  }
                />
                {inputData.rating.rate && errorMsg.rate ? (
                  <RegistrationErrorMsg msg={errorMsg.rate} />
                ) : (
                  <></>
                )}
              </div>
            </div>

            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 text-left font-medium dark:text-gray-200"
              >
                Description
              </Typography>
              <Textarea
                rows={7}
                className="!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-100 ring-4 ring-transparent focus:!border-primary dark:focus:!border-gray-400 group-hover:!border-primary"
                placeholder="eg. This is a white shoe with a comfortable sole."
                value={inputData.description}
                labelProps={{
                  className: "hidden",
                }}
                onChange={(e) =>
                  setInputData((prevData) => {
                    return { ...prevData, description: e.target.value };
                  })
                }
              />
              {inputData.description && errorMsg.description && (
                <RegistrationErrorMsg msg={errorMsg.description} />
              )}
            </div>
            <DialogFooter>
              <Button
                disabled={disableBtn()}
                type="submit"
                className="ml-auto dark:bg-gray-700 dark:text-white"
                onClick={handleOpen}
              >
                Edit Product
              </Button>
            </DialogFooter>
          </form>
        </DialogBody>
      </Dialog>
    </>
  );
}
