

function ContactForm() {
    return (
      <div className=" w-[50%] text-[#607B96] h-full border ">
        <div className="border-b  border-[#1E2D3D]">
          <div className="border-r border-[#1E2D3D] w-32">contacts</div>
        </div>
        <div className="text-sm flex pt-12 justify-center">
          <div className="">
            <form action="">
              <label htmlFor="name">_name:</label>
              <input
                type="text"
                name="name"
                id="name"
                className="block bg-[#011221] rounded-md w-[250px] h-7 mt-1 mb-4"
              />
              <label htmlFor="email">_email:</label>
              <input
                type="email"
                name="email"
                id="email"
                className="block bg-[#011221] rounded-md w-[250px] h-7 mt-1 mb-4"
              />
              <label htmlFor="message">_message:</label>
              <input
                type="textarea"
                name="message"
                id="message"
                className="block bg-[#011221] rounded-md w-[250px] h-[200px] mt-1 mb-4"
              />
              <button  className="bg-[#1C2B3A] h-[30px] text-white w-[100px] rounded-lg mt-2">submit-button</button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default ContactForm;