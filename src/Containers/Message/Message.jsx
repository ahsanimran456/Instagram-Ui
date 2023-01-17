import Sidebar from "../../Components/Sidebar/Sidebar";
import myimg from '../../Assets/Images/activeimage.jpg'
import './Message.css'
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
    orderBy
} from '../../FirebaseConfig/FIrebase'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'

function Message(props) {

    const auth = getAuth()
    const navigate = useNavigate()
    const [username, setusername] = useState("")
    const [userUid, setuserUid] = useState("")
    const [userEmail, setuserEmail] = useState("")
    const [allusers, Setalluser] = useState([])
    const [friendname, Setfrinedname] = useState("")
    const [friendProfile, Setfrinedprofile] = useState("")
    const [frienduid, SetfrinedUid] = useState('')
    const [Bothid, Setbothid] = useState('')
    const [message, SetMessage] = useState('')
    const [allmessages, SetallMessages] = useState([])
    const [time,Settime] = useState('')


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setusername(user.displayName)
                setuserUid(user.uid)
                setuserEmail(user.email)
                // console.log(auth.currentUser.uid)

                const q = query(collection(db, "users"), where('uid', "!=", user.uid));
                const unsubscribe = onSnapshot(q, (querySnapshot) => {
                    const alluser = []
                    querySnapshot.forEach((doc) => {
                        alluser.push(doc.data())
                    });
                    Setalluser(alluser)
                });
            } else {
                console.log("no user found");
                navigate('/')
            }
        });
    }, []);
    const startChat = (othenuserUid, friendName, friendProfile) => {
        // console.log("mil rahah hy bha i", othenuserUid)
        // console.log("mil rahah hy bha i", friendName)
        // console.log("mil rahah hy bha i", friendProfile)
        GetallChats()
        Setfrinedname(friendName)
        Setfrinedprofile(friendProfile)
        SetfrinedUid(othenuserUid)
        let ChatID;
        if (othenuserUid < userUid) {
            ChatID = `${othenuserUid}${userUid}`;
            Setbothid(ChatID)
        } else {
            ChatID = `${userUid}${othenuserUid}`;
            Setbothid(ChatID)
        }
    }

    useEffect(() => {
        GetallChats()
    }, [message]);

    const GetallChats = () => {
        const q = query(collection(db, "Messages"), where("Chatid", "==", Bothid), orderBy("timestamp", "asc"));;
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const Messagesarr = []
            querySnapshot.forEach((doc) => {
                console.log(doc.data())
                Messagesarr.push(doc.data())
            });
            SetallMessages(Messagesarr)
        });
    }

    const SendChat = async () => {
        const time = new Date().toLocaleTimeString()
        Settime(time)
        if (message != " ") {
            const docRef = await addDoc(collection(db, "Messages"), {
                Message: message,
                Chatid: Bothid,
                timestamp:time,
                senderuid: userUid,
                reciveruid: frienduid,
            });
            SetMessage(" ")
            console.log("data gya");
        }

    }

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
                                    {username}
                                </div>
                                <div className="headerleft-icon">
                                    <svg aria-label="New message" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12.202 3.203H5.25a3 3 0 0 0-3 3V18.75a3 3 0 0 0 3 3h12.547a3 3 0 0 0 3-3v-6.952" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 0 1 2.004 0l1.224 1.225a1.417 1.417 0 0 1 0 2.004Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="16.848" x2="20.076" y1="3.924" y2="7.153"></line></svg>
                                </div>
                            </div>
                            <div className="listof-allusers">
                                {allusers && allusers.map((values, i) => {
                                    return (
                                        <div className="eachuser" onClick={() => startChat(values.uid, values.name, values.profile)} key={values.profile}>
                                            <div className="imguser">
                                                {/* {console.log(values.profile)} */}
                                                <img src={values.profile} alt="" />
                                            </div>
                                            <div className="name">
                                                <p>
                                                    {values.name}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })}
                                {/* {console.log(allusers)} */}
                            </div>
                        </div>
                        <div className="message-area">
                            <div className="messageHeader">
                                <div className="chatwith">
                                    <div className="img-with">
                                        <img src={friendProfile} alt="" />
                                    </div>
                                    <div className="chat-with-name">
                                        <p>
                                            {friendname}
                                        </p>
                                    </div>
                                </div>
                                <div className="header-icons">
                                    <div className="iconsheader"><svg aria-label="Audio call" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M18.227 22.912c-4.913 0-9.286-3.627-11.486-5.828C4.486 14.83.731 10.291.921 5.231a3.289 3.289 0 0 1 .908-2.138 17.116 17.116 0 0 1 1.865-1.71 2.307 2.307 0 0 1 3.004.174 13.283 13.283 0 0 1 3.658 5.325 2.551 2.551 0 0 1-.19 1.941l-.455.853a.463.463 0 0 0-.024.387 7.57 7.57 0 0 0 4.077 4.075.455.455 0 0 0 .386-.024l.853-.455a2.548 2.548 0 0 1 1.94-.19 13.278 13.278 0 0 1 5.326 3.658 2.309 2.309 0 0 1 .174 3.003 17.319 17.319 0 0 1-1.71 1.866 3.29 3.29 0 0 1-2.138.91 10.27 10.27 0 0 1-.368.006Zm-13.144-20a.27.27 0 0 0-.167.054A15.121 15.121 0 0 0 3.28 4.47a1.289 1.289 0 0 0-.36.836c-.161 4.301 3.21 8.34 5.235 10.364s6.06 5.403 10.366 5.236a1.284 1.284 0 0 0 .835-.36 15.217 15.217 0 0 0 1.504-1.637.324.324 0 0 0-.047-.41 11.62 11.62 0 0 0-4.457-3.119.545.545 0 0 0-.411.044l-.854.455a2.452 2.452 0 0 1-2.071.116 9.571 9.571 0 0 1-5.189-5.188 2.457 2.457 0 0 1 .115-2.071l.456-.855a.544.544 0 0 0 .043-.41 11.629 11.629 0 0 0-3.118-4.458.36.36 0 0 0-.244-.1Z"></path></svg></div>
                                    <div className="iconsheader"><svg aria-label="Video call" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><rect fill="none" height="18" rx="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="16.999" x="1" y="3"></rect><path d="m17.999 9.146 2.495-2.256A1.5 1.5 0 0 1 23 8.003v7.994a1.5 1.5 0 0 1-2.506 1.113L18 14.854" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
                                    <div className="iconsheader"><svg aria-label="View Thread Details" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><circle cx="11.819" cy="7.709" r="1.25"></circle><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="10.569" x2="13.432" y1="16.777" y2="16.777"></line><polyline fill="none" points="10.569 11.05 12 11.05 12 16.777" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline></svg></div>
                                </div>
                            </div>
                            <div className="chatportion">
                                {console.log(allmessages)}
                                {/* {Bothid} */}
                                <ul>
                                    {allmessages.map((values, i) => {

                                        // <li>{values.Message}</li>)
                                        if (values.senderuid == userUid) {
                                            return (
                                                <li className="mymessage" key={i}>{values.Message}</li>
                                            )
                                        }
                                          
                                        else {
                                            return (
                                                <li className="friendmessage" key={i}>{values.Message}</li>
                                            )
                                        }
                                    })}
                                </ul>

                            </div>
                            <div className="messagingarea">
                                <div className="message-out">
                                    <div className="imogi-smile">
                                        <svg aria-label="Emoji" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
                                    </div>
                                    <div className="message-area-text">
                                        <input placeholder="Message..." value={message} type="text" onChange={(e) => SetMessage(e.target.value)} />
                                    </div>
                                    <div className="send">
                                        <button onClick={SendChat}>send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Message;





