import Header from "../components/Header";
import ContactUsForm from '../components/ContactUsForm'

const Contactus = () => {

  return (
    <>
      {/* <div className="dataforai-herobanner">
        <Header />
      </div> */}
      <Header defaultBlack/>  
      <div className="relative z-10">
        <ContactUsForm />
      </div>
    </>
  );
};

export default Contactus;
