import React, { useState } from 'react'
import SignInWithGoogle from '@components/register/SignInWithGoogle';
import "./register.css"
export default function Login() {
    const [isPupilSelected, setIsPupilSelected] = useState(true);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const handleChange = (e) => {
        switch (e.target.name) {
            case "email":
                setEmail(e.target.value);
                break;
            case "username":
                setUsername(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
            case "confirmPassword":
                setConfirmPassword(e.target.value);
                break;
        }
    }
    const handleSelectionChange = (newSelection) => {
        setPassword("");
        setConfirmPassword("");
        if (newSelection === "Pupil") {
            setIsPupilSelected(true);
        }
        else {
            setIsPupilSelected(false);
        }
    }
    return (
        <div className='bg-default'>
            <img src="shredded circle.svg" alt="upper-left-circle" id='upper-left-circle' />
            <img src="left circle.svg" alt="left-circle" id='left-circle' />
            <img src="bottom right triangles.svg" alt="bottom-right-triangles" id='bottom-right-triangles' />
            <div className='main'>
                <div className='title'>Register</div>
                <div className='content'>
                    <div className='type_selection'>
                        <span className={isPupilSelected ? "selected" : ""} onClick={() => handleSelectionChange("Pupil")}>Pupil</span>
                        <span className={!isPupilSelected ? "selected" : ""} onClick={() => handleSelectionChange("Teacher")}>Teacher</span>
                    </div>
                    <div className='form-register'>
                        <form action="">
                            <input onChange={handleChange} placeholder='Email' type="email" name="email" id="email" value={email} />
                            <input onChange={handleChange} placeholder='Username' type="text" name="username" id="username" value={username} />
                            <input onChange={handleChange} placeholder='Password' type="password" name="password" id="password" value={password} />
                            <input onChange={handleChange} placeholder='Confirm Password' type="password" name="confirmPassword" id="confirmPassword" value={confirmPassword} />
                            <div className='login_buttons'>
                                <input type="submit" value="Sign up" className='btn btn-primary' />
                                <SignInWithGoogle />
                                <div className='no_account'>Already have an account ? <a href="/login">Click here</a></div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
