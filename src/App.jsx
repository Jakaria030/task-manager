import { Outlet } from "react-router";
import Navbar from "./components/Navbar.jsx";

const App = () => {

    return (
        <div>
            <Navbar />
            <Outlet />
            Footer
        </div>
    )
};

export default App;