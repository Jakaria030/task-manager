import { Outlet } from "react-router";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import useTheme from "./hooks/useTheme.js";

const App = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div className={`${theme === "light" ? "bg-white" : "bg-[#242424]"} flex flex-col min-h-screen`}>
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
};

export default App;