import ContactForm from "./ContactForm";
import ContactSide from "./ContactSide";


function Contact() {
    return (
        <div className="flex h-[529px] ">
            <ContactSide/>
            <ContactForm/>
            
        </div>
    );
}

export default Contact;