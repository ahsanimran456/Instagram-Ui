import MainHEader from "./MainHeader";
import MainBody from "./MainBody";
import RightContent from "./RightContent";
import SmallScreenHeader from "./MainHeader-SC";
import FooterSm from "./Footer-sm";
function MainContent() {
    return (
        <div className="sectionwrapper">
            <div className="container sectionwrapper">
            <div className="centerdata">
                <MainHEader />
                <SmallScreenHeader/>
                <MainBody/>
                <FooterSm/>
            </div>
            <div className="rightdata">
                <RightContent/>
            </div>
            </div>
        </div>


    );
}

export default MainContent;