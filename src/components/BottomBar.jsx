function BottomBar() {
    return (
        <div className="flex justify-between text-[#607B96] border-t w-full h-[30px]  border-[#1E2D3D] absolute bottom-0">
            <div className="flex ">
                <div className="pt-1 text-[#607B96] border-r-[1px] lg:w-[250px] border-[#607B96]">find me in</div>
                <div className="pt-1 text-[#607B96] border-r-[1px] border-[#607B96] lg:w-[100px] text-center">LinkedIn</div>
                {/* <div className="pt-1 text-[#607B96] border-r-[1px] border-[#607B96] w-[150px] text-center">_about-me</div>
                <div className="pt-1 text-[#607B96] border-r-[1px] border-[#607B96] w-[150px] text-center">_projects</div> */}
            </div>
            <div className="pt-1 border-l-[1px] border-[#607B96] w-[150px] text-center">
                <a href="https://github.com/charlesik">@charlesik</a>
            </div>
        </div>
    );
}

export default BottomBar;