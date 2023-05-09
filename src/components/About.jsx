import AboutSide from "./AboutSide";
import { Outlet } from "react-router-dom";

function About() {
    return (
        <div className="flex h-[529px]">
            <AboutSide/>
            <Outlet/>

        </div>
    );
}

export default About;