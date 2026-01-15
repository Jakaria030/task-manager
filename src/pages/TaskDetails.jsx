import image1 from "../assets/image-1.jpg";
import image2 from "../assets/image-2.jpg";
import image3 from "../assets/image-3.jpg";
import image4 from "../assets/image-4.jpg";
import image5 from "../assets/image-5.jpg";
import PendingButton from "../components/PendingButton.jsx";

const images = [image1, image2, image3, image4, image5];



const TaskDetails = () => {

    return (
        <section className="bg-white">
            <div className="max-w-3xl mx-auto px-4 md:px-8 my-12">
                <div className="rounded-lg shadow-md text-center space-y-4 pb-8">
                    <img className="w-full h-[500px] border border-gray-100 rounded-t-lg" src={image1} alt="Task Details" />
                    <div className="size-12 bg-violet-500 rounded-full border border-violet-500 text-white flex items-center justify-center justify-self-center font-bold">1</div>
                    <h6 className="text-md text-center text-gray-800 font-meium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, pariatur.</h6>
                    <PendingButton />
                </div>
            </div>
        </section>

    )
};

export default TaskDetails;