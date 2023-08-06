import { useState } from "react";
import { useContext } from "react";
import { StyledAlertBox } from "../components/styled/Alert.styled";
import { SignContext } from "../context/SignContext";
import { StyledLoginBox } from "./styled/Login.styled";
import { BsX } from "react-icons/bs";
import { useEffect } from "react";


export default function Login() {

    const { handleChangeLoginInput, handleLogin, onlineUser } = useContext(SignContext)



    return (
        <>
            <StyledLoginBox className="loginBox">
                {
                    onlineUser === undefined && <StyledAlertBox>Incorrect username or password. <button> <BsX /></button> </StyledAlertBox>

                }
                <div className="loginFormBox">
                    <form onSubmit={handleLogin}>
                        <div className="inputEmail">
                            <label htmlFor="inputEmail" className="form-label">Email address</label>
                            <input onChange={handleChangeLoginInput} type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" name="email" required />
                        </div>
                        <div className="inputPassword">
                            <label htmlFor="inputPassword" className="form-label">Password</label>
                            <input onChange={handleChangeLoginInput} type="password" className="form-control" id="inputPassword" name="password" required />
                        </div>
                        <div className="form-check">
                            <input onChange={handleChangeLoginInput} type="checkbox" className="form-check-input" id="check" name="check" required />
                            <label className="form-check-label" htmlFor="check">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </form>
                </div>
            </StyledLoginBox>
        </>
    )
}