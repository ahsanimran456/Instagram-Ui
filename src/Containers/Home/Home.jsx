import Sidebar from '../../Components/Sidebar/Sidebar';
import MainContent from '../../Components/MainContent/Main';
import { Link } from 'react-router-dom';
import './Home.css'
function Home(props) {
    return (
        <>
            <div className="homewrapper">
                <div className="left-menu">
                    <Sidebar />
                </div>
                <div className="center-main">
                    <MainContent />
                </div>

            </div>

        </>
    );
}

export default Home;