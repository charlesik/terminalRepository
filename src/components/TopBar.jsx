import { Link } from "react-router-dom";

function TopBar() {
    return (
        <div className="flex justify-between text-[#607B96] border-b h-[30px]  border-[#1E2D3D]">
            <div className="flex ">
                <Link to='/' className="pt-1 text-[#607B96] border-r-[1px] w-[250px] border-[#607B96]">charles-cyfa.dev</Link>
                <Link to='/' className="pt-1 text-[#607B96] border-r-[1px] border-[#607B96] w-[150px] text-center">_hello</Link>
                <Link to='/about' className="pt-1 text-[#607B96] border-r-[1px] border-[#607B96] w-[150px] text-center">_about-me</Link>
                <Link to='/projects' className="pt-1 text-[#607B96] border-r-[1px] border-[#607B96] w-[150px] text-center">_projects</Link>
            </div>
            <Link to='/contact' className="pt-1 border-l-[1px] border-[#607B96] w-[150px] text-center">
                _contact-me
            </Link>
        </div>
    );
}

export default TopBar;