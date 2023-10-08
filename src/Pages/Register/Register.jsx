import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from 'sweetalert';
import { GoogleAuthProvider, getAuth, signInWithPopup, updateProfile } from "firebase/auth";
import app from "../../Firebase/firebase.config";

const googleProvider = new GoogleAuthProvider()

const auth=getAuth(app)
const Register = () => {
    const {createUser,user} =useContext(AuthContext) 
    const [registerCondition,setRegisterCondition] =useState('')
    const handleRegister =(e)=>{
         e.preventDefault()
         const email =e.target.email.value;
         const name =e.target.name.value;
         const photo =e.target.photo.value;
         const password=e.target.password.value 
         console.log(name,photo,email,password,)

        
         if(password.length<6){
          setRegisterCondition (swal("Sorry!", "Your password should be at least 8 digit!", "error"))

          return;
        }else if(!/[A-Z][!@#$&*]/.test(password)){
          setRegisterCondition (swal("Sorry!", "Your password should be at least uppercase and special character!", "error"))
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

  const handleGoogleLogin =()=>{
     signInWithPopup(auth,googleProvider)
     .then(result=>{
      console.log(result.user)
     })
     .catch(error=>{
      console.error(error)
     })
     updateProfile(auth.currentUser, {
      displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
    })
    .then(() => {
      
    }).catch((error) => {
      console.error(error)
    });
  }
    return (
        <div>
          <div className="mt-10">
           <h2 className="text-3xl font-bold text-center">Please Register</h2>
          <form onSubmit={handleRegister}  className=" mx-auto md:w-3/4 lg:w-1/2">

          <div className="form-control ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name"  required placeholder="Name" className="input input-bordered"  />
        </div>
          <div className="form-control ">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" name="photo"  required placeholder="Photo url" className="input input-bordered"  />
          
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
          <button className="btn btn-primary">Register</button>
          <div className="text-center py-5">
              <p className="text-2xl">Continue With <button className="btn btn-primary" onClick={handleGoogleLogin}>Google</button></p>
             </div>
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