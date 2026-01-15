import { createBrowserRouter } from "react-router";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import TaskList from "../pages/TaskList.jsx";
import TaskDetails from "../pages/TaskDetails.jsx";
import NotFound from "../pages/NotFound.jsx";

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
                path: "task-list",
                Component: TaskList,
            },
            {
                path: "task-details",
                Component: TaskDetails
            }
        ]
    },
    {
        path: "*",
        Component: NotFound,
    }
]);

export default routes;