import { Link } from "react-router-dom";


const Errorpage = () => {
    return (
        <div className="text-center items-center justify-center py-32">
           <h2 className="text-5xl">You are in wrong direction</h2> 
         <Link to="/">  <button className="btn py-5">Home</button></Link>
        </div>
    );
};

export default Errorpage;