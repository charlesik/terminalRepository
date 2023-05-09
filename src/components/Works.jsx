

function Works() {
    const projects = [
      {
        title: "Merce Store",
        description: "Online Store UI",
        imgUrl: "/merce.png",
        link: "https://mercestore.netlify.app/",
        tech: "ReactJS",
      },
      {
        title: "Waves DAO",
        description: "Crypto Medium",
        imgUrl: "/waves.png",
        link: "https://wave-daos.vercel.app/",
        tech: "Next JS",
      },
      {
        title: "Food Cafe",
        description: "Restaurant Mockup",
        imgUrl: "/foodcafe.png",
        link: "https://github.com/charlesik/food-cafe-react-js-.git",
        tech: "ReactJS",
      },
      {
        title: "TestApp",
        description: "Movies Data",
        imgUrl: "/movies.png",
        link: "https://charelestestapp.netlify.app/",
        tech: "ReactJS",
      },
      {
        title: "Hermes Delivery",
        description: "Courier Services",
        imgUrl: "/hermes.png",
        link: "https://hermesdemo.netlify.app/",
        tech: "JavaScript",
      },
      {
        title: "VulcanTech NG",
        description: "Mockup For StartUp",
        imgUrl: "techfirm.png",
        link: "https://vulcantechng.netlify.app/",
        tech: "JavaScript",
      },

      //   {
      //     title: "Natasha Ilo Foundation",
      //     description: "Non-Profit Organisation",
      //     imgUrl: '',
      //     link: 'https://natashailofoundation.org',
      //     tech: 'Wordpress'
      //   },
      //   {
      //     title: "Ada Oji River",
      //     description: "On Air Personality",
      //     imgUrl: '',
      //     link: 'https://adaojiriver.org',
      //     tech: 'Wordpress'
      //   },
    ];
    const projectList=projects.map((project,index)=>{
        return(
            <div key={index}>
            <p className="mb-2">project 1 // {project.title}</p>
            <div className="border border-[#1E2D3D] w-[250px] h-[250px] rounded-lg">
                <img src={project.imgUrl} className="h-[50%] rounded-t-lg" alt="" />
                <div className="p-4 bg-[#011221] h-[50%] rounded-b-lg ">
                    <p className="mb-2">{project.description}</p>
                    <button className="bg-[#1C2B3A] h-[30px] text-white w-[90px] rounded-lg mt-2"><a href={project.link}>view-project</a></button>
                </div>
            </div>
          </div>
        )
    })
    return (
      <div className=" w-full text-[#607B96] h-full border">
        <div className="border-r border-[#1E2D3D] w-32">
          projects
        </div>
        <div className="flex justify-center border pt-10 border-[#1E2D3D] text-sm flex-wrap overflow-auto h-full">
         {/* {projectList} */}
        </div>
      </div>
    );
}

export default Works;