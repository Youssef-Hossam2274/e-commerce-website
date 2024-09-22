import useGenerateRoutes from "../routes/useGenerateRoutes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUser } from "../redux/reducers/usersSlice";

function App() {
  const routes = useGenerateRoutes();
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = localStorage.getItem("id");
    if (userId) dispatch(fetchUser(userId));
  }, []);

  return <main className="bg-white dark:bg-[#242424]">{routes}</main>;
}

export default App;
