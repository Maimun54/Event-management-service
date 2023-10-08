

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const EventPhotos = () => {

    useEffect(()=>{
        AOS.init();
    },[])
    return (
        <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
        
            <h2 className="text-center text-4xl font-bold my-10">Recent Event Picture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div data-aos="fade-down-right"> <img className="w-96 h-[300px]" src="https://i.ibb.co/DgHNRpY/service.jpg" alt="" /></div>
             
              <div data-aos="fade-down-right"><img className="w-96 h-[300px]"  src="https://i.ibb.co/fvH0C59/cake-5486528-1280.jpg" alt="" /></div>
              <div data-aos="fade-down-left">
              <img className="w-96 h-[300px]" src="https://i.ibb.co/dPTGj7b/image1-h1.jpg" alt="" />
              </div>
             <div data-aos="fade-down-left">
             <img className="w-96 h-[300px]" src="https://i.ibb.co/6nqZ3fW/pexels-kampus-production-6299265.jpg" alt="" />
             </div>
              <div data-aos="fade-down-left">
              <img className="w-96 h-[300px]" src="https://i.ibb.co/FszQFxw/pexels-august-de-richelieu-4262175.jpg" alt="" />
              </div>
              <div data-aos="fade-down-left">
              <img className="w-96 h-[300px]" src="https://i.ibb.co/k1mgwd8/pexels-maur-cio-mascaro-1154189.jpg" alt="" />
              </div>
            </div>
        </div>
    );
};
<script src="bower_components/aos/dist/aos.js"></script> 

export default EventPhotos;