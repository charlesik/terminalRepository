import { useState } from "react";


function ContactForm() {
    const [formValues, setFormValues]=useState({
        name:'',
        email:'',
        message:''
            })

    function handleChange(e){
        const {name,value}=e.target;
        setFormValues({...formValues,[name]:value})

    }
    const d =new Date()

    return (
      <div className=" w-full text-[#607B96] h-full border ">
        <div className="border-b  border-[#1E2D3D]">
          <div className="border-r border-[#1E2D3D] w-32">contacts</div>
        </div>
        <div className="flex">
        <div className="text-sm flex pt-12 justify-center border w-[50%]">
          <div className="">
            <form action="https://formsubmit.co/charlesikilo@gmail.com" method="POST">
              <label htmlFor="name">_name:</label>
              <input
                type="text"
                name="name"
                id="name"
                className="block bg-[#011221] rounded-md w-[250px] h-7 mt-1 mb-4"
                value={formValues.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">_email:</label>
              <input
                type="email"
                name="email"
                id="email"
                className="block bg-[#011221] rounded-md w-[250px] h-7 mt-1 mb-4"
                value={formValues.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="message">_message:</label>
              <input
                type="textarea"
                name="message"
                id="message"
                className="block bg-[#011221] rounded-md w-[250px] h-[200px] mt-1 mb-4"
                value={formValues.message}
                onChange={handleChange}
                required
              />
              <button  className="bg-[#1C2B3A] h-[30px] text-white w-[100px] rounded-lg mt-2" type="submit">submit-button</button>
            </form>
          </div>
        </div>
        <div className="border border-red-600 pl-10 pt-10 w-[50%] text-sm">
                <p className="text-[#5565E8]"> <span className="mr-4 text-[#607B96]">1</span>    <span className="text-[#C98BDF]">const</span> button <span className="text-[#607B96]">=</span> document.querySelector <span className="text-[#607B96]"> &#40;</span> <span className="text-[#FEA55F]">&#34;#sendbtn&#34;</span> <span className="text-[#607B96]">&#41; ;</span></p>
                <p className="text-[#5565E8]"> <span className="mr-4 text-[#607B96]">2</span>   </p>
                <p className="text-[#5565E8]"> <span className="mr-4 text-[#607B96]">3</span>   <span className="text-[#C98BDF]">const</span> message <span className="text-[#607B96]">=</span> <span className="text-[#607B96]"> &#123;</span> </p>
                <p className="text-[#5565E8]"> <span className="mr-4 text-[#607B96]">4</span>  name<span className="text-[#607B96]">:</span><span className="text-[#FEA55F]"> &#34;{formValues.name}&#34;</span> <span className="text-[#607B96]">,</span></p>
                <p className="text-[#5565E8]"> <span className="mr-4 text-[#607B96]">5</span>  email<span className="text-[#607B96]">:</span><span className="text-[#FEA55F]"> &#34;{formValues.email}&#34;</span> <span className="text-[#607B96]">,</span></p>
                <p className="text-[#5565E8]"> <span className="mr-4 text-[#607B96]">6</span>  message<span className="text-[#607B96]">:</span><span className="text-[#FEA55F]"> &#34;{formValues.message}&#34;</span> <span className="text-[#607B96]">,</span></p>
                <p className="text-[#607B96]"> <span className="mr-4 text-[#607B96]">7</span>  date<span className="text-[#607B96]">:</span><span className="text-[#FEA55F]"> &#34;{d.getDate()}/{d.getMonth()}/{d.getFullYear()}&#34;</span> <span className="text-[#607B96]">,</span></p>
                <p><span className="mr-4 text-[#607B96]">8</span> <span className="text-[#607B96]"> &#125;</span></p>
                <span className="mr-4 text-[#607B96]">9</span>
                <p className="text-[#5565E8]"> <span className="mr-4 text-[#607B96]">10</span>  button.addEventListener<span className="text-[#607B96]">&#40;</span><span className="text-[#FEA55F]"> &#34;click&#34;</span> <span className="text-[#607B96]">&#40; &#41; =&#62; &#123;</span></p>
                <p className="text-[#5565E8]"> <span className="mr-4 text-[#607B96]">11</span>  form.send<span className="text-[#607B96]">&#40;</span>message<span className="text-[#607B96]">&#41;</span><span className="text-[#607B96]">;</span></p>
                <p> <span className="mr-4 text-[#607B96]">12</span> <span className="text-[#607B96]">&#125; &#41;</span></p>
          </div>
        </div>
      </div>
    );
}

export default ContactForm;