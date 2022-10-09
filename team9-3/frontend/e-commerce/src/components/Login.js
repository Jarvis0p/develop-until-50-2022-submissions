import React,{useState} from "react"
import {Link,useNavigate} from "react-router-dom";
import axios from "axios";

function Login(props){

    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

    let json = await axios.post(
        "http://localhost:8000/login", {
            email: email,
            password: password
        }
    )

        console.log(json);
        if (await json.data.success) {
            // Save the auth token and redirect it
            localStorage.setItem('token', json.authtoken);
            props.showAlert("Login Successfully", "success");
            navigate('/home');
        } else {
            props.showAlert("Invalide details", "danger")
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
