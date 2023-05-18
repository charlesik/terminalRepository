import { useState } from "react";
import { NavLink } from "react-router-dom";

function TopBar() {
const [showMenu,setShowMenu]=useState(false)
function handleClick(){
    setShowMenu(!showMenu)
}
if (showMenu) {
    return(
        <div>menu
            <p>post</p>
        </div>
    )
} else{
    return (
        
        <div className="flex justify-between text-[#607B96] border-b h-[30px]  border-[#1E2D3D]">
            <div className="flex w-full p-2 lg:p-0 ">
                <div  className="pt-1 text-[#607B96] border-r-[1px] lg:w-[250px] w-full text-md border-[#1e2d3d] md:border">charles-cyfa.dev</div>
                <img src="/menu.png" alt=""  className="lg:hidden w-[18px] h-[16px]" onClick={handleClick}/>
                <NavLink to='/'  className="lg:block hidden pt-1 text-[#607B96] lg:border-r-[1px] border-[#1E2D3D] lg:w-[150px] text-center  ">_hello</NavLink>
                <NavLink to='/about' className="lg:block hidden pt-1 text-[#607B96] lg:border-r-[1px] border-[#1E2D3D] lg:w-[150px] text-center  ">_about-me</NavLink>
                <NavLink to='/projects' className="lg:block hidden pt-1 text-[#607B96] lg:border-r-[1px] border-[#1E2D3D] lg:w-[150px] text-center  ">_projects</NavLink>
            </div>
            <NavLink to='/contact' className="lg:block hidden pt-1 lg:border-l-[1px] border-[#1E2D3D] lg:w-[150px] text-center ">
                _contact-me
            </NavLink>
        </div>
    );}
}

export default TopBar;