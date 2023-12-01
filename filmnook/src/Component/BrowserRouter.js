import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Movies from "./Movies";
import Error from "./Error";
import SignUp from "./Singup";
import SignIn from "./SignIn";
import SingleMoviePage from "./SingleMoviePage";
import FavPage from "./Favtpage";
import PrivateRoute from "./PrivateRoute";
export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
     

      {
        path: "/",
        element: <SignIn />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/movies/:id",
        element: <SingleMoviePage />,
      },
      {
path:"/favorite",
element:   <FavPage/>
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
    errorElement: <Error />,
  },
]);
