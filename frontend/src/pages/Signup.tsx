import React, { useState } from "react";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { TextLink } from "../components/TextLink";
import { useNavigate } from "react-router-dom";
import { SignupInput } from "@fazlulkarim/common";
import axios from "axios";
import { BACKEND_URL } from "../appconfig";
import { Quote } from "../components/Quote";

export const Signup : React.FC = () => {

    const navigate = useNavigate();
    const [userSignupInput, setUserSignupInput] = useState<SignupInput>({
        email: "",
        name: "",
        password: ""
    });

    const handleSignup = async () => {
        try {
            const response = await axios.post( BACKEND_URL + "/user/signup", userSignupInput);
            console.log(response.data);
            const token = response.data.token;
            localStorage.setItem("token", token);
            navigate("/blogs");   

        } catch (error) {
            console.log(error);
            alert("Signup failed")
        }
    }


    return <div className="bg-slate-200 grid grid-cols-1 lg:grid-cols-2 ">
        <div className="flex justify-center h-screen">
            <div className="flex flex-col justify-center items-center">
                {<InputBox label="Email" placeholder="example@ex.com" onChange={(e) => {
                    setUserSignupInput({...userSignupInput, email: e.target.value})
                }} type="email"/>}

                {<InputBox label="Name" placeholder="Fazlul" onChange={(e) => {
                    setUserSignupInput({...userSignupInput, name: e.target.value})
                }} type="text"/>}

                {<InputBox label="Password" placeholder="example@ex.com" onChange={(e) => {
                    setUserSignupInput({...userSignupInput, password: e.target.value})
                }} type="password"/>}

                {<Button label="Signup" onclick={handleSignup}/>}
                <div className="flex justify-center">
                    <div className="mr-2">Already have an account?</div>
                    {<TextLink label="Signin" to="signin"/>}
                </div>
            </div>
        </div>
        <div className="hidden lg:block">{<Quote/>}</div>
    </div>
}




