

const EventPhotos = () => {
    return (
        <div>
            <h2 className="text-center text-4xl font-bold my-10">Recent Event Picture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <img className="w-96 h-[300px]" src="https://i.ibb.co/DgHNRpY/service.jpg" alt="" />
              <img className="w-96 h-[300px]"  src="https://i.ibb.co/fvH0C59/cake-5486528-1280.jpg" alt="" />
              <img className="w-96 h-[300px]" src="https://i.ibb.co/dPTGj7b/image1-h1.jpg" alt="" />
              <img className="w-96 h-[300px]" src="https://i.ibb.co/6nqZ3fW/pexels-kampus-production-6299265.jpg" alt="" />
              <img className="w-96 h-[300px]" src="https://i.ibb.co/FszQFxw/pexels-august-de-richelieu-4262175.jpg" alt="" />
              <img className="w-96 h-[300px]" src="https://i.ibb.co/k1mgwd8/pexels-maur-cio-mascaro-1154189.jpg" alt="" />
            </div>
        </div>
    );
};

export default EventPhotos;