import { useLoaderData } from "react-router-dom";


const ServiceDetails = () => {
    
    const serviceItem = useLoaderData()
    
    console.log(serviceItem)
    return (
        <div>
            <h2>This is Services details page:{serviceItem.length}</h2>
        </div>
    );
};

export default ServiceDetails;