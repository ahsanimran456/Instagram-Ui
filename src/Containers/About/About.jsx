import Sidebar from "../../Components/Sidebar/Sidebar";
function About(props) {
    return (
        <>
        <Sidebar/>
            <div>
                <h1>{props.title}</h1>
            </div>
        </>
    );
}

export default About;