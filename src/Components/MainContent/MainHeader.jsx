import './Main.css'
import boyimg from '../../Assets/Images/avatar.png'
import girlimg from '../../Assets/Images/avatar-girl.png'

import { UserOutlined } from '@ant-design/icons';
import { Avatar, Image } from 'antd';
function MainHEader() {
    return (
        <div className="header">
            <div className="stories">
                <div className="circle">
                    <img src={boyimg} alt="" />
                </div>
                <div className="circle">
                    <img src={girlimg} alt="" />
                </div>
                <div className="circle">
                    <img src={boyimg} alt="" />
                </div>
                <div className="circle">
                    <img src={girlimg} alt="" />
                </div>
                <div className="circle">
                    <img src={boyimg} alt="" />
                </div>
                <div className="circle">
                    <img src={girlimg} alt="" />
                </div>
            </div>
        </div>
    );
}

export default MainHEader;