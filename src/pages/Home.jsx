import CTA from "../components/CTA.jsx";
import heroImage from "../assets/hero-image.jpg";
import useTheme from "../hooks/useTheme.js";

const Home = () => {
    const { theme } = useTheme();
    return (
        <section className={`${theme === "light" ? "bg-white" : "bg-[#242424]"}`}>
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto mt-8 text-center space-y-5">
                    <img className="border border-gray-100 rounded-md shadow-md" src={heroImage} alt="Hero Image" />
                    <h1 className={`text-3xl font-bold ${theme === "light" ? "text-gray-800" : "text-white"}`}>Never Forget Your Important Tasks</h1>
                    <p className={`text-lg ${theme === "light" ? "text-gray-500" : "text-white"}`}>We all forget important tasks sometimes. Task Manager helps you stay organized, track your tasks, and ensures you never miss a deadline again.</p>
                    <CTA>GET STARTED</CTA>
                </div>
            </div>
        </section >
    )
};

export default Home;