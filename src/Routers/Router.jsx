import Home from "../Containers/Home/Home";
import About from "../Containers/About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home title='this is home page'/>}/>
                    <Route path="/About" element={<About title='this is About page'/>} />
                </Routes>
            </BrowserRouter>

        </>
    );
}

export default Router;