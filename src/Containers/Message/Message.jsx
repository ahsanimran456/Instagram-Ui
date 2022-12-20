import Sidebar from "../../Components/Sidebar/Sidebar";
import myimg from '../../Assets/Images/activeimage.jpg'
import './Message.css'
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
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'



function Message(props) {
    return (
        <div className="message-wrapper">
            <div className="left">
                <Sidebar />
            </div>
            <div className="right">
                <div className="container">
                    <div className="messagingArea">
                        <div className="listof-users">
                            <div className="list-header">
                                <div className="username">
                                    ahsan imran
                                </div>
                                <div className="headerleft-icon">
                                    <svg aria-label="New message" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12.202 3.203H5.25a3 3 0 0 0-3 3V18.75a3 3 0 0 0 3 3h12.547a3 3 0 0 0 3-3v-6.952" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 0 1 2.004 0l1.224 1.225a1.417 1.417 0 0 1 0 2.004Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="16.848" x2="20.076" y1="3.924" y2="7.153"></line></svg>
                                </div>
                            </div>
                            <div className="listof-allusers">
                                <div className="eachuser">
                                    <div className="imguser">
                                        <img src={myimg} alt="" />
                                    </div>
                                    <div className="name">
                                        <p>
                                            ahsan
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="message-area">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Message;



