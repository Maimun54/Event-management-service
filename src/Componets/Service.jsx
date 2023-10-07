import { Link } from "react-router-dom";


const Service = ({service}) => {

    const {id,image,description,price,button,title}=service
    
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
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