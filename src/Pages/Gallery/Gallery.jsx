import { Link } from "react-router-dom";


const Gallery = () => {
    return (
        <div className="lg:px-10 md:px-5 mx-auto">
            <div className="py-2 text-center">
                <h2 className="text-4xl font-bold lg:py-20">Welcome to Our Gallery</h2>
               <Link to="/gallery"><button className="btn text-center py-2 m-2
               ">All</button></Link>
               <Link to="/wedding"><button className="btn text-center py-2 m-2
               ">Wedding</button></Link>
               <Link to="/wedding"><button className="btn text-center py-2 m-2
               ">Engagement</button></Link>
               <Link to="/wedding"><button className="btn text-center py-2 m-2
               ">Birthday</button></Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:py-10">
                <div className="" > 
                <img className="w-96 h-[300px]" src="https://i.ibb.co/tpKfK4H/pexels-pavel-danilyuk-7180617.jpg" alt="" />
                </div>
             
              <div >
                <img className="w-96 h-[300px]"  src="https://i.ibb.co/fvH0C59/cake-5486528-1280.jpg" alt="" /></div>
              <div >
              <img className="w-96 h-[300px]" src="https://i.ibb.co/jz54w7f/img-7.jpg" alt="" />
              </div>
             <div >
             <img className="w-96 h-[300px]" src="https://i.ibb.co/2NCBCP5/countdown-bg.jpg" alt="" />
             </div>
              <div >
              <img className="w-96 h-[300px]" src="https://i.ibb.co/dp9xtTS/img-2.jpg" alt="" />
              </div>
              <div >
              <img className="w-96 h-[300px]" src="https://i.ibb.co/pPGrgsP/img-5.jpg" alt="" />
              </div>
            </div>
        </div>
    );
};

export default Gallery;