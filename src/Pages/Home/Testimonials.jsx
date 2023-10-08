import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Testimonials = () => {
   useEffect(()=>{
      AOS.init();
   },[])
    return (
      <div className="mb-10" >

         

        <h2 className="text-center text-4xl font-bold my-10">What Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
         <div data-aos="fade-right"  className=" text-center border m-5 p-5">
            <div className="rounded-full">
            <img className=" mx-auto py-5" src="https://i.ibb.co/S5HFknp/Florian.jpg" alt="" />
            </div>
            <p className="mb-5">Robin Byrd</p>
            <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  checked/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
</div>
            <p className="mt-5">Overall, LuxeLife Events turned our vision into reality and created a birthday celebration that will be cherished in our memories forever. You exceeded our expectations in every way, and we can't thank you enough for your dedication and commitment to making this day so magical.</p>
         </div>
         <div data-aos="fade-right"  className=" text-center m-5 border p-5">
            <div className="rounded-full">
            <img className=" mx-auto py-5" src="https://i.ibb.co/LxV5kmC/rsz-seth-blum-optimized.jpg" alt="" />
            </div>
            <p className="mb-5">Maical Byrd</p>
            <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  checked/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
</div>
            <p className="mt-5">That's a wonderful way to express your gratitude and satisfaction with LuxeLife Events' services for your engagement event. It's concise and heartfelt, and it effectively conveys your appreciation for their hard work and dedication in making your special day memorable. Your feedback will undoubtedly be valued by their team.</p>
         </div>
         <div data-aos="fade-right"  className=" text-center m-5 border p-5">
            <div className="rounded-full">
            <img className=" mx-auto py-5" src="https://i.ibb.co/Z1Hv5GQ/photo-2023-07-04-23-03-45.jpg" alt="" />
            </div>
            <p className="mb-5">Erica Evano</p>
            <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  checked/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
</div>
            <p className="mt-5">I'm glad you found the feedback suggestion suitable for a wedding event as well! It's a versatile message that can be adapted for various types of events. If you decide to use it for your wedding, I'm sure LuxeLife Events will appreciate your kind words.</p>
         </div>
        </div>
        </div>
    );
};


export default Testimonials;