import { useState } from "react";


function AboutContact() {
    const [display,setDisplay]=useState('none')
    function Title() {
        if (display == "none") {
          return (
            <div
              className="pl-2 text-white border-b border-[#1E2D3D]"
              onClick={handleClick}
            >
              &gt; <img src="/bluefolder.png" className="w-[14px] h-[13px] inline" alt="" /> contact
            </div>
          );
        } else {
          return (
            <div
              className="pl-2 text-white border-b border-[#1E2D3D]"
              onClick={handleClick}
            >
              &#8964; <img src="/bluefolder.png" className="w-[14px] h-[13px] inline" alt="" /> contact
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
        <div className="">
            <Title/>
            <div style={{display:display}}>
                <div className="  pl-2"><img src="/mail-icon.png" className="w-[14px] h-[13px] inline" alt="" />charlesikilo@gmail.com</div>
                <div className="  pl-2"><img src="/phone-icon.png" className="w-[14px] h-[13px] inline" alt="" />+2348106832108</div>
                <div className="  pl-2"><img src="/phone-icon.png" className="w-[14px] h-[13px] inline" alt="" />+2349012845491</div>
            </div>
        </div>
    );
}

export default AboutContact;