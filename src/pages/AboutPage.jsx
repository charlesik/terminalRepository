import BottomBar from "../components/BottomBar";
import TopBar from "../components/TopBar";

function AboutPage() {
    return (
        <div>
      <div className="bg-[#010C15] flex items-center justify-center h-screen ">
        <div className="h-[90%] w-[90%]  bg-[#011627] rounded-md border border-[#1E2D3D] absolute">
            <TopBar/>
           About
            <BottomBar/>
        </div>
      </div>
    </div>
    );
}

export default AboutPage;