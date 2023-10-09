import { Link } from "react-router-dom";


const WeddingG = () => {
    return (
        <div className="lg:px-10">
            <div className="text-center">
            <Link to="/gallery"><button className="btn text-center py-2 m-2
               ">All</button></Link>
            </div>
            <div className="lg:flex gap-5">
                <img className="w-full h-[200px] md:h-[400px] lg:h-[400px] mb-5 px-5 py-5 " src="https://i.ibb.co/jhR3tzj/img-9.jpg" alt="" />
                <img className="w-full mb-5 px-5 py-5 h-[200px] md:h-[400px] lg:h-[400px] " src="https://i.ibb.co/Rjm7X93/pexels-oan-andrei-12479355.jpg" alt="" />
            </div>
        </div>
    );
};

export default WeddingG;