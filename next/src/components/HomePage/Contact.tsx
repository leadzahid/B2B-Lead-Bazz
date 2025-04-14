import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div id="contact" className="max-w-7xl mx-auto px-5 pt-16 sm:pt-20 pb-8">
      <h1 className=" text-center text-2xl sm:text-3xl font-bold text-purple-800">
        {` We're Here to Help—Get in Touch`}
      </h1>
      <div className=" max-w-screen-md mx-auto my-5">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
