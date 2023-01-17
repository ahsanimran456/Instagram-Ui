import './Main.css'
import active from '../../Assets/Images/activeimage.jpg'
import boy from '../../Assets/Images/avatar.png'
import { fontStyle, fontWeight } from '@mui/system';
import { useState } from 'react';
import {
    getAuth,
    doc,
    setDoc,
    db,
    onAuthStateChanged,
    getDocs,
    getDoc,
    collection, auth,
    onSnapshot,
    query, where,
    addDoc,
    orderBy,
    signOut
} from '../../FirebaseConfig/FIrebase'
import { useNavigate } from "react-router-dom";

function RightContent(props) {
    const navigate = useNavigate()

    const [logout, setlogout] = useState(false)
    const log = () => {
        setlogout(!logout)
    }
    const logOut = () => {
        const auth = getAuth()
        signOut(auth).then(() => {
            navigate('/')
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div className="rightcontent-wrapper">
            <div className="activeuser">
                <div className='imgdiv'>
                    <img src={active} alt="" />
                </div>
                <div className="activename">
                    <div>
                        <span style={{ fontSize: '15px', fontWeight: 600 }}>{props.profileName}</span>
                    </div>
                    <div>
                        <span style={{ fontSize: '14px', color: 'Gray', fontStyle: 'italic' }}>
                            {props.profileName}
                        </span>
                    </div>
                </div>
                <div className="switch">
                    <span onClick={log}>
                        Switch
                    </span>
                    {logout &&
                        <div className='logout'>
                            <div onClick={logOut}>
                                <p>Logout</p>
                            </div>
                        </div>}
                </div>
            </div>
            <div className="recomended">
                <p>
                    Suggestions For You
                </p>
            </div>
            <div className="activeuser">
                <div className='imgdiv'>
                    <img src={boy} alt="" />
                </div>
                <div className="activename">
                    <div>
                        <span style={{ fontSize: '15px', fontWeight: 600 }}>Zainabdali</span>
                    </div>
                    <div>
                        <span style={{ fontSize: '14px', color: 'Gray', fontStyle: 'italic' }}>
                            Zain Abdali
                        </span>
                    </div>
                </div>
                <div className="switch">
                    <span>
                        Follow
                    </span>
                </div>
            </div>
            <div className="activeuser">
                <div className='imgdiv'>
                    <img src={boy} alt="" />
                </div>
                <div className="activename">
                    <div>
                        <span style={{ fontSize: '15px', fontWeight: 600 }}>Umair</span>
                    </div>
                    <div>
                        <span style={{ fontSize: '14px', color: 'Gray', fontStyle: 'italic' }}>
                            Umair Manzoor
                        </span>
                    </div>
                </div>
                <div className="switch">
                    <span>
                        Follow
                    </span>
                </div>
            </div>
            <div className="activeuser">
                <div className='imgdiv'>
                    <img src={boy} alt="" />
                </div>
                <div className="activename">
                    <div>
                        <span style={{ fontSize: '15px', fontWeight: 600 }}>SadiqShah</span>
                    </div>
                    <div>
                        <span style={{ fontSize: '14px', color: 'Gray', fontStyle: 'italic' }}>
                            Sadiq Shah
                        </span>
                    </div>
                </div>
                <div className="switch">
                    <span>
                        Follow
                    </span>
                </div>
            </div>
        </div>
    );
}

export default RightContent;