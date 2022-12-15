import MainHEader from "./MainHeader";
import MainBody from "./MainBody";
import RightContent from "./RightContent";
function MainContent() {
    return (
        <div className="sectionwrapper">
            <div className="centerdata">
                <MainHEader />
                <MainBody/>
            </div>
            <div className="rightdata">
                <RightContent/>
            </div>
        </div>


    );
}

export default MainContent;