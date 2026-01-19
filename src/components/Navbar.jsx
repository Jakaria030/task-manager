import { Link } from "react-router";
import logo from "../assets/logo.jpg";
import CTA from "./CTA.jsx";
import { IoMoonOutline } from "react-icons/io5";
import useTheme from "../hooks/useTheme.js";
import { CiLight } from "react-icons/ci";

const Navbar = () => {
    const { theme, setTheme } = useTheme();

    const handleTheme = (mode) => {
        setTheme(mode);
        localStorage.setItem("theme", mode);
    }

    return (
        <header className={`${theme === "light" ? "bg-white border-gray-100" : "bg-[#242424] border-gray-900"}  border-b shadow-sm`}>
            <nav className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between py-2">
                    <Link to={"/"} className="inline-block">
                        <div className="flex items-center gap-2">
                            <img className="size-20 p-2 border border-gray-200 rounded-md" src={logo} alt="Logo" />
                            <h2 className="bg-linear-to-r from-green-500 to-violet-500 bg-clip-text text-2xl font-extrabold text-transparent hidden sm:inline">Task Manager</h2>
                        </div>
                    </Link>

                    <div className="flex items-center justify-between gap-8">
                        {
                            theme === "light" ? (<IoMoonOutline onClick={() => handleTheme("dark")} className={`text-3xl cursor-pointer ${theme === "light" ? "text-gray-800" : "text-white"} `} />) : (<CiLight onClick={() => handleTheme("light")} className={`text-3xl cursor-pointer ${theme === " light" ? "text-gray-800" : "text-white"}`} />)
                        }
                        <CTA>ALL TASKS</CTA>
                    </div>
                </div>
            </nav>
        </header>
    )
};

export default Navbar;