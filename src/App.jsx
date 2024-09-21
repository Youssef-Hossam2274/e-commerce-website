import { Button } from "@material-tailwind/react";
import useGenerateRoutes from "../routes/useGenerateRoutes";

function App() {
  const routes = useGenerateRoutes();
  return <main className="bg-white dark:bg-[#242424]">{routes}</main>;
}

export default App;
