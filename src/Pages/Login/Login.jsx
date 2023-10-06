import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="mt-10">
        <h2 className="text-3xl text-center font-bold">Please Login</h2>
       <form  className=" mx-auto md:w-3/4 lg:w-1/2">

       
       
       <div className="form-control ">
       <label className="label">
         <span className="label-text">Email</span>
       </label>
       <input type="email" name="email"  required placeholder="email" className="input input-bordered"  />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Password</span>
       </label>
       <input type="password" required name="password" placeholder="password" className="input input-bordered"  />
       <label className="label">
         <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
       </label>
     </div>
     <div className="form-control mt-6">
       <button className="btn btn-primary">Login</button>
     </div>
       </form>
       <p className="text-center py-5">Already have an account?
       
       <Link to="/register" className="text-blue-600 font-bold">
          Register</Link>
          
          </p>
        </div>
    );
};

export default Login;