import React, { useState } from "react";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { TextLink } from "../components/TextLink";
import { useNavigate } from "react-router-dom";
import { SigninInput } from "@fazlulkarim/common";
import axios from "axios";
import { BACKEND_URL } from "../appconfig";
import { Quote } from "../components/Quote";

export const Signin : React.FC = () => {

    const navigate = useNavigate();
    const [userSigninInput, setUserSigninInput] = useState<SigninInput>({
        email: "",
        password: ""
    });

    const handleSignin = async () => {
        try {
            const response = await axios.post( BACKEND_URL + "/user/signin", userSigninInput);
            console.log(response.data);
            const token = response.data.token;
            const id = response.data.id;
            localStorage.setItem("token", token);
            localStorage.setItem("userId", id);
            navigate("/blogs");   

        } catch (error) {
            console.log(error);
            alert("Signin failed")
        }
    }


    return <div className="bg-slate-200 grid grid-cols-1 lg:grid-cols-2 ">
        <div className="flex justify-center h-screen">
            <div className="flex flex-col justify-center items-center">
                {<InputBox label="Email" placeholder="example@ex.com" onChange={(e) => {
                    setUserSigninInput({...userSigninInput, email: e.target.value})
                }} type="email"/>}

                {<InputBox label="Password" placeholder="example@ex.com" onChange={(e) => {
                    setUserSigninInput({...userSigninInput, password: e.target.value})
                }} type="password"/>}

                {<Button label="Signin" onclick={handleSignin}/>}
                <div className="flex justify-center">
                    <div className="mr-2">Create an account?</div>
                    {<TextLink label="Signup" to="signup"/>}
                </div>
            </div>
        </div>
        <div className="hidden lg:block">{<Quote/>}</div>
    </div>
}