import { useState } from "react";
import "./Login.css"
import { Link } from "react-router-dom";
import Apifetch from "../../components/Apifetch";

function Login() {
    const [email, setEmail] = useState("");
    const [passWord, setPassWord] = useState("");
    const [loginData1, setdata] = useState({});
    const [noAccount, setNoAccount] = useState(true);
    const {
        data: loginData
    } = Apifetch({ route: "http://localhost:3000/loginInfo", timeOut: 5 });


    const handleEmailChange = (e) => {

    }

    const handlePassWordChange = (e) => {
        setPassWord(e.target.value);
    }



    const handleLoginWrapper = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/loginInfo", {
            headers: {
                "content-type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                email,
                passWord
            })
        })


    }
    console.log(loginData1, "============");


    return (
        <>
            <div className="login-Wrapper">
                <h2>Login to your account</h2>
                <div className="loginContent">
                    <div className="input-Wrapper">
                        <label htmlFor="email">Emial </label>
                        <input type="email" name="email" value={email} id="1" placeholder="Enter Your E-mail" onChange={handleEmailChange} />
                    </div>
                    <div className="input-Wrapper">
                        <label htmlFor="password">Password </label>
                        <input type="password" name="password" value={passWord} id="2" placeholder="Enter YOur PassWord" onChange={handlePassWordChange} />
                    </div>
                    <button id="btn-Wrapper" onClick={handleLoginWrapper}>Login Now</button>
                    {
                        noAccount ? <></> : <><h2 className="loginNotMatch">Email NOT MATCH</h2></>
                    }
                    <div className="alreadylogin-Wrapper">
                        <span>Already Have An Account <Link to="/Register"><span>Register Now</span></Link></span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;