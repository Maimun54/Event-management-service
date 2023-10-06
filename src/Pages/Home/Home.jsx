import { useLoaderData } from "react-router-dom";
import Service from "../../Componets/Service";


const Home = () => {
    const services =useLoaderData()
    console.log(services)
    return (
        <div className="lg:mx-20">
             <h2 className="text-center text-4xl font-bold my-10">Our Awesome Services</h2>
            <div className="grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-5">
            
            {
                services.map(service=><Service key={service.id} service={service}></Service>)
            }
            </div>
        </div>
    );
};

export default Home;