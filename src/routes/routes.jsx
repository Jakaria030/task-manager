import { createBrowserRouter } from "react-router";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";

const routes = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "about",
                element: <h1>HEllo</h1>
            }
        ]
    }
]);

export default routes;