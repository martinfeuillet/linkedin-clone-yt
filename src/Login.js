import React from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import "./login.css";

function Login() {
    const [password, setPassword] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");
    const [profilePic, setProfilePic] = React.useState("");
    const dispatch = useDispatch();

    const register = () => {
        const auth = getAuth();
        if (!name) {
            return alert("Please enter your name");
        }
        createUserWithEmailAndPassword(auth,email, password).then(
            (userCredential) => {
                    updateProfile(userCredential.user,{
                        displayName: name,
                        photoURL: profilePic,
                    })
                    .then(() => {
                        dispatch(
                            login({
                                email: userCredential.user.email,
                                uid: userCredential.user.uid,
                                displayName: name,
                                photoURL: profilePic,
                            })
                        );
                    });
            }
        ).catch(error => alert(error))
    };

    const loginToApp = (e) => {
        e.preventDefault();
    };

    return (
        <div className="login">
            <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original-wordmark.svg"
                alt=""
            />
            <form>
                <input
                    type="text"
                    placeholder="full name (required if registering)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="profile pic URL (optional)"
                    value={profilePic}
                    onChange={(e) => setProfilePic(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    value={password}
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" onClick={loginToApp}>
                    Sign in
                </button>
            </form>
            <p>
                Not a member ?{" "}
                <span className="login__register" onClick={register}>
                    Register now
                </span>
            </p>
        </div>
    );
}

export default Login;
