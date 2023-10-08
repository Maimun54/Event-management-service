import { useEffect, useState } from "react";
import { useLoaderData, useParams, } from "react-router-dom";



const ServiceDetails = () => {

    const { id } = useParams()
    const [eventDetails, setEventDetails] = useState([])
    const { image,image2, description, price,  title } = eventDetails
    const serviceItem = useLoaderData()

    useEffect(() => {

        const eventdetials = serviceItem.find(events => events.id == id)

        setEventDetails(eventdetials)
    }, [id, serviceItem])

    console.log(eventDetails)
    // console.log(serviceItem)
    return (
        <div className="justify-center items-start mx-auto mb-10 ">
          <div>
            <div className="grid grid-cols-2 gap-5 px-5 py-5">
                <div>
                <img className="w-full h-[200px] md:h-[400px] lg:h-[400px] " src={image} alt="" />
                </div>
                <div>
                <img className="w-full h-[200px] md:h-[400px] lg:h-[400px] " src={image2} alt="" />
                </div>
            </div>
            <div className="lg:flex ">
            <div className="lg:w-1/2 text-center">
            <p className="text-4xl font-bold">{title}</p>
            <p className="text-xl font-medium py-3">Price: {price}</p>
            <p className="lg:px-20 text-xl">{description}</p>
            </div>
            <div >
            <p className="lg:text-4xl md:text-3xl text-xl px-5 lg:px-0 md:px-10 lg:mt-16 font-bold ">You will receive a 20% discount <br />  if you make full Payment.</p>
            </div>
            </div>
          </div>
        </div>
    );
};

export default ServiceDetails;