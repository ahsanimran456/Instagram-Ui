import Login from "../Containers/Login/Login";
import Home from "../Containers/Home/Home";
import About from "../Containers/About/About";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from 'react'
import { provider_google, getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from '../FirebaseConfig/FIrebase'

function Router() {
   
    const [user, setUser] = useState(false)
    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(true);
                console.log("user")
            } else {
                setUser(false)
            }
        });
    }, [])
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        user={true}
                        NavigateTo = '/Home'
                        path="/" element={<Login />} />

                    <Route path="/Home" element={<Home />} />
                    <Route path="/About" element={<About />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Router;