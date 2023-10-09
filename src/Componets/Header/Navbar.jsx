import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {
    const navLinks =<>
         <li><NavLink to="/">Home</NavLink></li>
         
         <li><NavLink to="/gallery">Gallery</NavLink></li>
         <li><NavLink to="/login">Login</NavLink></li>
         <li><NavLink to="/register">Register</NavLink></li>
         <li><NavLink to="/discount">Discount</NavLink></li>
    </>
  const {user, loginOut}=useContext(AuthContext)
  
  // console.log(user)
  // console.log('Picture',user?.photoURL)
  // console.log('userName',user?.displayName)

  const handleLogOut =()=>{
    loginOut()
    .then()
    .catch()
  }
    return (
      
        <div >
     <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="https://i.ibb.co/LxV5kmC/rsz-seth-blum-optimized.jpg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">LuxeLife Events
</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navLinks}
    </ul>
  </div>
  
  <div className="navbar-end">

    <p className="px-2">
     {user?.displayName}
    </p>
  <label tabIndex={0} className=" ">
        <div className="w-10 rounded-full">
         {
          user?  <img src={user?.photoURL} />
          :
          <img src={user?.photoURL} />
         }
        </div>
      </label>
   {
    user? <button onClick={handleLogOut} className="btn">Sign Out</button>
    :
    <Link to="/login"><button className="btn">Login</button></Link>
   }
  </div>
</div>
        </div>
    );
};

export default Navbar;