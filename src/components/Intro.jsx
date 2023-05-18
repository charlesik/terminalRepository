

function Intro() {
    return (
      <div className=" h-[520px] flex justify-center items-center px-6 lg:px-0">
        <div>
          <p className="text-[#E5E9F0]">Hi, I am</p>
          <h1 className="text-[#E5E9F0] font-bold lg:text-5xl text-6xl">Charles Ilo</h1>
          <h2 className="text-[#4D5BCE] text-3xl lg:mb-10 mb-32">&gt;Frontend Developer</h2>
          <p className="text-[#607B96] text-sm">&#47;&#47; click the about tab to get to know me</p>
          <p className="text-[#607B96] text-sm">&#47;&#47; you can also see what I have done in the projects page or check out my GitHub</p>
          <p className="text-[#4D5BCE] text-sm">const <span className="text-[#43D9AD]">githubLink</span> = <a href="https://github.com/charlesik"><q className="text-[#E99287]">https://github.com/charlesik</q></a> </p>

        </div>
      </div>
    );
}

export default Intro;