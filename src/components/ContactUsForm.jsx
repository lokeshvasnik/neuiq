import { IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";
import { icons } from "../Utils/icons";

const ContactUsForm = ({
  bgColor = "#ebeef4",
  title = "Let's co-create <br /> value together",
  longText = false,
}) => {

  return (
    <section
      id="contact_us_form"
      className={`contact-us-bg-image relative overflow-hidden ${bgColor == "#ebeef4" ? "text-black" : "text-white"
        }`}
      style={{ background: bgColor }}
    >
      <div className={`lg:px-10 max-w-full mx-auto`}>
        <div
          className={`md:flex md:flex-row flex-col xl:h-[90vh] ${longText
              ? "xl:min-h-[900px] lg:min-h-[800px] md:min-h-[650px]"
              : "xl:min-h-[840px] lg:min-h-[650px] md:min-h-[750px]"
            }`}
        >
          {/* Left Side */}
          <div className="md:w-[55%] text-white md:text-black">
            <div className="contact-us-bg-image flex flex-col lg:w-[90%] z-10 relative py-10 px-5">
              <h2
                className="lg:text-5xl md:text-4xl text-3xl font-bold mb-3 capitalize !leading-tight"
                dangerouslySetInnerHTML={{ __html: title }}
              />

              <div className="flex items-center gap-4">
                <div
                  className="icon size-8 rounded-full border flex justify-center items-center border-black"
                >
                  <IoMail />
                </div>

                <p>
                  <Link to={"mailto:info@neuiq.ai"}>{"info@neuiq.ai"}</Link>
                </p>
              </div>
            </div>

            <div className="xl:size-[650px] lg:size-[500px] md:size-[400px] size-64 absolute sm:left-0 sm:bottom-0 -bottom-10 md:right-0 md:block hidden">
              <img src={icons.contact_us} alt="" className="w-full h-full" />
            </div>
          </div>

          {/* Right Side (Form) */}

          <iframe
            aria-label="Contact Us"
            frameBorder="0"
            className="h-screen w-full md:w-[55%] md:h-auto border-none"
            src='https://forms.zohopublic.in/neuiqtechnologiespvtltd1/form/ContactUs/formperma/63DPtBVl36g8gy3G6GSZfj_do5CtTeAzzyxvAUEdHNU'
          />

        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;
