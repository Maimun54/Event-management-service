import { Link } from "react-router-dom";


const Service = ({service}) => {

    const {id,image,description,price,button,title}=service
    
    return (
        <div  className="py-5">
    <div className=" lg:h-[600px] md:h-[600px] card   bg-base-100 shadow-xl">
  <figure><img src={image} alt="image" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <p>Price:{price}</p>
    <div className="card-actions justify-center">
    <Link to={`details/${id}`}><button className="btn btn-primary">View Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Service;