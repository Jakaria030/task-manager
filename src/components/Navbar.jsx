import { Link } from "react-router";
import logo from "../assets/logo.jpg";
import CTA from "./CTA.jsx";
import { IoMoonOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <header className="bg-white border-b border-gray-100 shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between">
                    <Link to={"/"} className="inline-block">
                        <div className="flex items-center gap">
                            <img className="size-20 p-2" src={logo} alt="Logo" />
                            <h2 className="bg-linear-to-r from-green-500 to-violet-500 bg-clip-text text-2xl font-extrabold text-transparent">Task Manager</h2>
                        </div>
                    </Link>

                    <div className="flex items-center justify-between gap-8">
                        <IoMoonOutline className="text-3xl cursor-pointer text-gray-800" />
                        <CTA>Task</CTA>
                    </div>
                </div>
            </nav>
        </header>
    )
};

export default Navbar;