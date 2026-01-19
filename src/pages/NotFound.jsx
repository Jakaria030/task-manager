import notFound from "../assets/not-found.jpg";
import CTA from "../components/CTA.jsx";
import useTheme from "../hooks/useTheme.js";

const NotFound = () => {
    const { theme } = useTheme();

    return (
        <div className={`${theme === "light" ? "bg-white" : "bg-[#242424]"} min-h-screen flex items-center justify-center`}>
            <section className={`${theme === "light" ? "bg-white" : "bg-[#292929]"} rounded-lg shadow-md text-center space-y-4 pb-8 mx-8 md:mx-16`}>
                <img className="w-3xl h-auto rounded-t-lg" src={notFound} alt="404 Image" />
                <p className={`${theme === "light" ? "text-gray-800" : "text-white"}`}>Page Not Found!</p>
                <CTA path="/">HOME</CTA>
            </section>
        </div>
    )
};

export default NotFound;