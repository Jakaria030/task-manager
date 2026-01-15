import notFound from "../assets/not-found.jpg";
import CTA from "../components/CTA.jsx";

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <section className="rounded-lg shadow-md text-center space-y-4 pb-8 mx-8 md:mx-16">
                <img className="w-3xl h-auto" src={notFound} alt="404 Image" />
                <p className="text-gray-500">Page Not Found!</p>
                <CTA>HOME</CTA>
            </section>
        </div>
    )
};

export default NotFound;