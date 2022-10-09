import React,{useState,useContext} from "react"
import {Link,useNavigate} from "react-router-dom";
import axios from "axios";
import {UserContext} from "../Context/User/UserState";

function Login(props){

    let navigate = useNavigate();
    let {type} = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        console.log(type);
        if(type==="customer"){
            console.log(type+"Inside if else");
           let json1 = await axios.post( "http://localhost:8000/user/login", {
                email: email,
                password: password
            })
                console.log(json1);
                if (json1.data.success) {
                    // Save the auth token and redirect it
                    localStorage.setItem('token', json1.authtoken);
                    props.showAlert("Login Successfully", "success");
                    navigate('/home');
                } else {
                    props.showAlert("Invalide details", "danger")
                }
            
    }else{
        let json2 = await axios.post(
            "http://localhost:8000/seller/login", {
                email: email,
                password: password
            })
                console.log(json2);
                if (json2.data.success) {
                    // Save the auth token and redirect it
                    localStorage.setItem('token', json2.authtoken);
                    props.showAlert("Login Successfully", "success");
                    navigate('/home');
                } else {
                    props.showAlert("Invalide details", "danger")
                }
    }


     
    }

    return (
        <>
        <h1 className="login-head">E-commerce</h1>
        <div className="vh-50 d-flex justify-content-center align-items-center">

            <div className="col-md-4 p-5 shadow-sm border rounded-3">
            
                <h2 className="text-center mb-4 text-dark">Login</h2>
                <form method="POST" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control border border-dark" id="email"  name='email' value={email} onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control border border-dark" id="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <input type="radio"   name='type' value="seller" onChange={(e) => type = e.target.value} required={true}/> Seller
                        <input type="radio"   name='type' value="customer" onChange={(e) => type = e.target.value} required={false} /> Customer
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-dark" type="submit">Login</button>
                    </div>
                </form>
                <div className="mt-3">
                    <p className="mb-0  text-center">Don't have an account? <Link to="/signup"
                            className = "text-secondary fw-bold" > Sign
                            Up</Link></p>
                </div>
            </div>
        </div>
      </>
    );
}

export default Login;
