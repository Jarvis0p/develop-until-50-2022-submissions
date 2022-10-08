import React,{useState} from "react"
import {Link} from "react-router-dom";

function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const onChange = (e) => {
        setEmail({
            ...email,
            [e.target.email]: (e.target.value)
        })
    }

    return (
        <>
        <h1 className="login-head">E-commerce</h1>
        <div class="vh-50 d-flex justify-content-center align-items-center">

            <div class="col-md-4 p-5 shadow-sm border rounded-3">
            
                <h2 class="text-center mb-4 text-dark">Login</h2>
                <form method="POST">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control border border-dark" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control border border-dark" id="exampleInputPassword1"/>
                    </div>
                    <div class="d-grid">
                        <button class="btn btn-dark" type="submit">Login</button>
                    </div>
                </form>
                <div class="mt-3">
                    <p class="mb-0  text-center">Don't have an account? <Link to="/signup"
                            class = "text-secondary fw-bold" > Sign
                            Up</Link></p>
                </div>
            </div>
        </div>
      </>
    );
}

export default Login;
