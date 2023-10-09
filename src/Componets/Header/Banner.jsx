

const Banner = () => {
    return (
        <div className="w-full mb-5 bg-black/50 hero h-[600px] hero-overlay" style={{backgroundImage:'url(https://i.ibb.co/4Zm2DWD/priscilla-du-preez-W3-SEy-ZODn8-U-unsplash.jpg)'}}>
            <div data-aos="fade-right" className="">
                <h2 className="text-5xl ml-10 font-bold text-white">Our Recent Successful Event</h2>
                <button className="btn btn-primary text-center justify-center items-center my-5 lg:ml-44 md:ml-44 ml-24 ">Book My Event</button>
            </div>
        </div>
    );
};

export default Banner;