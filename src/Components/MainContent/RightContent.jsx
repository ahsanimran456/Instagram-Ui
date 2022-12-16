import './Main.css'
import active from '../../Assets/Images/activeimage.jpg'
import boy from '../../Assets/Images/avatar.png'
import { fontStyle, fontWeight } from '@mui/system';
function RightContent() {
    return (
        <div className="rightcontent-wrapper">
            <div className="activeuser">
                <div className='imgdiv'>
                    <img src={active} alt="" />
                </div>
                <div className="activename">
                    <div>
                        <span style={{ fontSize: '15px', fontWeight: 600 }}>ahsanImran</span>
                    </div>
                    <div>
                        <span style={{ fontSize: '14px', color: 'Gray', fontStyle: 'italic' }}>
                            Ahsan imran
                        </span>
                    </div>
                </div>
                <div className="switch">
                    <span>
                        Switch
                    </span>
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