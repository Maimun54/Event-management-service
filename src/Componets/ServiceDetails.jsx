import { useEffect, useState } from "react";
import { useLoaderData, useParams, } from "react-router-dom";



const ServiceDetails = () => {

    const { id } = useParams()
    const [eventDetails, setEventDetails] = useState([])
    const { image, description, price, button, title } = eventDetails
    const serviceItem = useLoaderData()

    useEffect(() => {

        const eventdetials = serviceItem.find(events => events.id == id)

        setEventDetails(eventdetials)
    }, [id, serviceItem])

    console.log(eventDetails)
    // console.log(serviceItem)
    return (
        <div className="justify-center items-start mx-auto ">
          <div>
            <div className="grid grid-cols-2 gap-5 px-5 py-5">
                <div>
                <img className="w-full h-[200px] md:h-[400px] lg:h-[400px] " src={image} alt="" />
                </div>
                <div>
                <img className="w-full h-[200px] md:h-[400px] lg:h-[400px] " src={image} alt="" />
                </div>
            </div>
          </div>
        </div>
    );
};

export default ServiceDetails;