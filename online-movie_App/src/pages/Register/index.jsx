import { useState } from "react";
import "./Register.css"
import { Link } from "react-router-dom";

function Register() {
    const [emialId, setEmailId] = useState(null);
    const [passWord, setPassWord] = useState(null);
    const [conformPassWord, setConformPassWord] = useState(null);
    const [registerData, setRegisterData] = useState({});

    const handleEmailChange = (e) => {
        console.log(e.target.value);
        setEmailId(e.target.value);
    }

    const handlePassWordChange = (e) => {
        console.log(e.target.value);
        setPassWord(e.target.value);
    }

    const handleConformPassWordChange = (e) => {
        console.log(e.target.value);
        setConformPassWord(e.target.value);
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/registerInfo", {
            headers: {
                "content-type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                emialId,
                passWord,
                conformPassWord
            })
        })

        // .then((res) => {
        //     return res.json();
        // }).then((data) => {
        //     setRegisterData(data);
        // })
        {
            document.getElementById("register-Container").style.display = "none";
            < Link to="/Home" ></Link >
        }
    }

    console.log(registerData);


    return (
        <>
            <div className="register-Container" id="register-Container">
                <div className="descriptionWrapper">
                    <div className="loginLogoWrapper">
                        <img src="logo.png" alt="" />
                    </div>
                    <p>
                        Welcome.<br />
                        Begin your cinematic adventure now with our ticketing platform!
                    </p>
                </div>
                <div className="xyz">
                    <div className="register-Wrapper">
                        <h2>Create an account</h2>
                        <div className="register-Wrappers">
                            <label htmlFor="email">Email </label>
                            <input type="email" name="email" id="1" placeholder="Enter Your E-mail" value={emialId} onChange={handleEmailChange} />
                        </div>
                        <div className="register-Wrappers">
                            <label htmlFor="password">Password </label>
                            <input type="password" name="password" id="2" placeholder="Enter YOur PassWord" value={passWord} onChange={handlePassWordChange} />
                        </div>
                        <div className="register-Wrappers">
                            <label htmlFor="password">Password </label>
                            <input type="password" name="password" id="3" placeholder="Conform Your PassWord" value={conformPassWord} onChange={handleConformPassWordChange} />
                        </div>
                        <button id="btn-Wrapper" onClick={handleSubmitForm}>Create account</button>
                        <div className="alreadylogin-Wrapper">
                            <span>Don't  Have An Account  <Link to="/Login">Login</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;