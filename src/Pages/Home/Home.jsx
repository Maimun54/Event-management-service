import { useLoaderData } from "react-router-dom";
import Service from "../../Componets/Service";
import Banner from "../../Componets/Header/banner";
import EventPhotos from "./EventPhotos";
import Testimonials from "./Testimonials";


const Home = () => {
    const services =useLoaderData()
    
    console.log(services)
    return (
        <div >
            <Banner></Banner>
             <div className="mx-20">
             <h2 className="text-center text-4xl font-bold my-10">Our Awesome Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-8">
            
            {
                services.map(service=><Service key={service.id} service={service}></Service>)
            }
            </div>
            <EventPhotos></EventPhotos>
            <Testimonials></Testimonials>
             </div>
        </div>
    );
};

export default Home;