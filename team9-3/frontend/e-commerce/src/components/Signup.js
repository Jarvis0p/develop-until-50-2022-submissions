import React,{useState} from 'react'
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {Link} from "react-router-dom";

const Signup = (props) => {
  
//   using state hook for different inputs from form

    let navigate = useNavigate();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: ""
    })

    // handling submit button afer submitting the form 
    
     const handleSubmit = async (e) => {
         e.preventDefault();
         const {
             name,
             email,
             password
         } = user;

        //  using axios for connecting the frontend to the backend and 
        // sending the details to mongoose database
        let json =  await axios.post(
            "http://localhost:8000/createUser",{
                name:name,
                email:email,
                password:password
            }
         )
         
        // this is for alert methods 
         if (await json.data.success) {
             localStorage.setItem('token', json.authtoken);
             navigate('/login');
             props.showAlert("Account created Successfully", "success");
         } else {
             props.showAlert("Invalide Credentials", "danger")
         }


     }
  
        // this is used to change the hook variables
       const onChange = (e) => {
           setUser({
               ...user,
               [e.target.name]: (e.target.value)
           })
       }
  
    return (<>
        <h1 className="login-head">E-commerce</h1>
        
    <div className="vh-50 d-flex justify-content-center align-items-center">
            <div className="col-md-4 p-5 shadow-sm border rounded-3 signup-div">
                <h2 className="text-center mb-4 text-dark">Signup</h2>
                <form method='POST' onSubmit={handleSubmit}>
                <div className="mb-3">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input type="text" className="form-control border border-dark" id="name" name='name' value={user.name}  onChange={onChange} aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control border border-dark" id="email"  name='email' value={user.email} onChange={onChange} aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control border border-dark" id="password" name='password' value={user.password} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control border border-dark" id="cpassword" name='cpassword' value={user.cpassword} onChange={onChange} />
                    </div>
                    <div className="d-grid">
                    
                        { user.cpassword!==user.password ? <p>Password didn't match</p> : ""}
                        <button type="submit"className="btn btn-dark"  disabled={ user.cpassword!==user.password && true} >Sign up</button>
                    </div>
                </form>
                <div className="mt-3">
                    <p className="mb-0  text-center">Already have an account? <Link to="/login"
                            className = "text-secondary fw-bold" > Sign
                            Up</Link></p>
                </div>
            </div>
        </div>
        </>
  )
}

export default Signup