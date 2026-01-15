import CTA from "../components/CTA.jsx";
import heroImage from "../assets/hero-image.jpg";

const Home = () => {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto mt-12 text-center space-y-5">
                    <img className="border border-gray-100 rounded-md shadow-md" src={heroImage} alt="Hero Image" />
                    <h1 className="text-3xl font-bold text-gray-800">Never Forget Your Important Tasks</h1>
                    <p className="text-lg text-gray-500">We all forget important tasks sometimes. Task Manager helps you stay organized, track your tasks, and ensures you never miss a deadline again.</p>
                    <CTA>GET STARTED</CTA>
                </div>
            </div>
        </section>
    )
};

export default Home;