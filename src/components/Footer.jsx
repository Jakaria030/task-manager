import useTheme from "../hooks/useTheme";

const Footer = () => {
    const { theme } = useTheme();

    return (
        <footer className={`${theme === "light" ? "bg-white border-gray-100" : "bg-[#242424] border-gray-900"} border-t`}>
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <p className={`${theme === "light" ? "text-gray-500" : "text-white"} text-center text-sm py-4`}>&copy; {new Date().getFullYear()} - All rights reserved By - Task Manager.</p>
            </div>
        </footer>
    )
};

export default Footer;