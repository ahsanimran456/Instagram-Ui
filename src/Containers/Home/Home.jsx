import Sidebar from '../../Components/Sidebar/Sidebar';
import MainContent from '../../Components/MainContent/Main';
import { Link } from 'react-router-dom';
import {  
    getAuth,
    doc, 
    setDoc,
    db,
    onAuthStateChanged ,
    getDocs,
    getDoc,
    collection,auth
} from '../../FirebaseConfig/FIrebase'
import './Home.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'

function Home() {
    const [activeUser,setActiveUser] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
       const auth = getAuth()
       onAuthStateChanged(auth,(user) => {
           if(user) {
            // console.log(user ,'firebase ')
            setActiveUser(user.displayName)
            console.log(activeUser)
           } 
           else if (!user) {
             navigate('/')
           }
       });
   }, [])
    return (
        <>
            <div className="homewrapper">
                <div className="left-menu">
                    <Sidebar />
                </div>
                <div className="center-main">
                    <MainContent profileName={activeUser} />
                </div>

            </div>

        </>
    );
}

export default Home;