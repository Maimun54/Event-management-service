import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from 'sweetalert';


const Register = () => {
    const {createUser} =useContext(AuthContext) 
    const [registerCondition,setRegisterConditon] =useState('')
    const handleRegister =(e)=>{
         e.preventDefault()
         const email =e.target.email.value;
         const name =e.target.name.value;
         const password=e.target.password.value 
         console.log(name,email,password,)

        
         if(password.length<6){
          setRegisterConditon (swal("Sorry!", "Your password should be at least 8 digit!", "error"))

          return;
        }else if(!/[A-Z][!@#$&*]/.test(password)){
          setRegisterConditon (swal("Sorry!", "Your password should be at least uppercase and special character!", "error"))
          return
        }
        createUser(email,password)
        .then(result=>{
          
            console.log(result.user)
            swal("Good job!", "You Register!", "success");

        })
        .catch(error=>{
            console.error(error)
            swal("Sorry!", "Your password should be at least 6 digit!", "error");

        })
    }
    return (
        <div>
          <div className="mt-10">
           <h2 className="text-3xl text-center">Please Register</h2>
          <form onSubmit={handleRegister}  className=" mx-auto md:w-3/4 lg:w-1/2">

          <div className="form-control ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name"  required placeholder="Name" className="input input-bordered"  />
        </div>
          
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
          
          <Link to="/login" className="text-blue-600 font-bold">
             Login</Link>
             
             </p>
           </div>  
        </div>
    );
};

export default Register;