import React from "react";
import LogIn from "../../components/Auth/LogIn/LogIn";
import CreateAccount from "../../components/Auth/CreateAccount/CreateAccount";
import AuthDetails from "../../components/Auth/AuthDetails/AuthDetails";


const Login = () => {
    return (
        <div>
            <LogIn/>
            <CreateAccount/> 
            <AuthDetails/>
        </div>
    )
};

export default Login;