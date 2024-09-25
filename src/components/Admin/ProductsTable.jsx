import { PencilIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  Avatar,
  Input,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { RemoveProductDialog } from "./RemoveProductDialog";
import { ViewProductDialog } from "./ViewProductDialog";

const TABLE_HEAD = ["Transaction", "Amount", "View", "Edit", "Delete"];

export function ProductsTable() {
  const [search, setSearch] = useState("");
  const { products } = useSelector((state) => state.products);
  const filterdProduct = products?.filter((product) => {
    return product.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <Card className="h-full w-full dark:bg-gray-800 dark:text-white">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className=" flex flex-col justify-between gap-8 md:flex-row md:items-center dark:bg-gray-800">
          <div>
            <Typography
              variant="h5"
              className="text-gray-900 dark:text-gray-100"
            >
              Recent All Products
            </Typography>
            <Typography className="mt-1 font-normal text-gray-600 dark:text-gray-400">
              These are details about the last Products
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72 flex gap">
              <Input
                label="Search"
                onChange={(e) => setSearch(e.target.value)}
                icon={
                  <MagnifyingGlassIcon className="h-5 w-5 dark:text-white" />
                }
                className="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              />
            </div>
          </div>
        </div>
      </CardHeader>

      <CardBody className="px-0 overflow-hidden">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr className="">
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-gray-200 dark:border-gray-600 p-4"
                >
                  <Typography
                    variant="small"
                    className="font-bold text-gray-800 dark:text-gray-100"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filterdProduct?.map(
              (
                { id, imgUrl, name, price, description, rating },
                index
              ) => {
                const isLast = index === products.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-gray-200 dark:border-gray-600";

                return (
                  <tr key={id}>
                    <td className={`${classes}`}>
                      <div className="flex items-center gap-3">
                        <Avatar
                          src={imgUrl}
                          alt={name}
                          size="md"
                          className="border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 object-cover p-1"
                        />
                        <Typography
                          variant="small"
                          className="font-bold text-gray-800 dark:text-gray-100"
                        >
                          {name}
                        </Typography>
                      </div>
                    </td>

                    <td className={`${classes} `}>
                      <Typography
                        variant="small"
                        className="font-normal text-gray-800 dark:text-gray-100"
                      >
                        $ {price}
                      </Typography>
                    </td>

                    <td className={`${classes} `}>
                      <ViewProductDialog
                        name={name}
                        imgUrl={imgUrl}
                        price={price}
                        description={description}
                        rate={rating.rate}
                      />
                    </td>
                    <td className={`${classes} `}>
                      <Button className="dark:bg-gray-700 dark:text-white">
                        Edit
                      </Button>
                    </td>
                    <td className={`${classes} `}>
                      <RemoveProductDialog productName={name} productId={id} />
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}
