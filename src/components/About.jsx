import AboutSide from "./AboutSide";
import PersonalInfo from "./PersonalInfo";
import { Outlet } from "react-router-dom";

function About() {
    return (
        <div className="flex h-[529px]">
            <AboutSide/>
            <PersonalInfo/>
            <Outlet/>

        </div>
    );
}

export default About;