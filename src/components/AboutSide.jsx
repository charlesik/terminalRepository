import { useState } from "react";
import AboutContact from "./AboutContact";
import { Link } from "react-router-dom";


function AboutSide() {
    const [display,setDisplay]=useState('none')
    
    function Title() {
      if (display == "none") {
        return (
          <div
            className="pl-2 text-white border-b border-[#1E2D3D]"
            onClick={handleClick}
          >
            &gt; <img src="/pinkfolder.png" className="w-[14px] h-[13px] inline" alt="" /> personal-info
          </div>
        );
      } else {
        return (
          <div
            className="pl-2 text-white border-b border-[#1E2D3D]"
            onClick={handleClick}
          >
            &#8964; <img src="/pinkfolder.png" className="w-[14px] h-[13px] inline" alt="" /> personal-info
          </div>
        );
      }
    }
    function handleClick() {

        if ( display == 'none' ) {
            setDisplay( 'block' )
           

        } else {
            setDisplay( 'none' )

        }

    }
    
    return (
        <div className="text-[#607B96] text-sm w-[250px] border-r h-[529px] border-[#1E2D3D]">
            <Title/>
            <div style={{display:display}} className="pl-4">
                <Link to='/about/profileinfo' className="  pl-2"><img src="/file.png" className="w-[14px] h-[13px] inline" alt="" /> bio</Link>
                <div className="  pl-2"><img src="/file.png" className="w-[14px] h-[13px] inline" alt="" /> interests</div>
                <div className="  pl-2"><img src="/file.png" className="w-[14px] h-[13px] inline" alt="" /> education</div>
            </div>
            <AboutContact/>
        </div>
    );
}

export default AboutSide;