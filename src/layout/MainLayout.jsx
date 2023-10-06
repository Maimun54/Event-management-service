import { Outlet } from "react-router-dom";
import Navbar from "../Componets/Header/Navbar";
import Banner from "../Componets/Header/banner";
import Footer from "../Componets/Header/Footer";


const MainLayout = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
                
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;