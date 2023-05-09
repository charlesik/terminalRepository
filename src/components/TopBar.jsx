import { NavLink } from "react-router-dom";

function TopBar() {
    return (
        <div className="flex justify-between text-[#607B96] border-b h-[30px]  border-[#1E2D3D]">
            <div className="flex ">
                <div  className="pt-1 text-[#607B96] border-r-[1px] w-[250px] border-[#1E2D3D]">charles-cyfa.dev</div>
                <NavLink to='/'  className="pt-1 text-[#607B96] border-r-[1px] border-[#1E2D3D] w-[150px] text-center">_hello</NavLink>
                <NavLink to='/about' className="pt-1 text-[#607B96] border-r-[1px] border-[#1E2D3D] w-[150px] text-center">_about-me</NavLink>
                <NavLink to='/projects' className="pt-1 text-[#607B96] border-r-[1px] border-[#1E2D3D] w-[150px] text-center">_projects</NavLink>
            </div>
            <NavLink to='/contact' className="pt-1 border-l-[1px] border-[#1E2D3D] w-[150px] text-center">
                _contact-me
            </NavLink>
        </div>
    );
}

export default TopBar;