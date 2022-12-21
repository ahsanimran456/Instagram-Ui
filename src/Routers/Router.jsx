import Login from "../Containers/Login/Login";
import Home from "../Containers/Home/Home";
import Message from "../Containers/Message/Message";
import { useNavigate, BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react'
import { provider_google, getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from '../FirebaseConfig/FIrebase'

function Router() {
    const [user, setUser] = useState(false)
    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(true);
                // console.log("user", user);
            } else {
                setUser(false)
                console.log("no user found");

            }
        });
    }, [])
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={!user ? <Login /> : <Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/message" element={<Message />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}


export default Router;