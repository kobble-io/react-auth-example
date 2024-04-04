import {createBrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import Callback from "./pages/Callback";

export const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
    },
    {
        path: "/callback",
        element: <Callback />,
    }
]);