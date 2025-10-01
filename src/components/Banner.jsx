import { useState } from "react";
import ContactModal from "../components/ContactModal"; 

const Banner = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); 

  return (
    <>
      <div className="text-white">
        <div className="lg:px-0 py-10 max-w-full mx-auto">
          <div className="flex sm:flex-row flex-col-reverse text-left md:items-center gap-4 lg:min-h-[500px]">
            <div className="sm:w-full">
              <h1 className="text-3xl md:text-4xl lg:text-6xl sm:leading-[4.5rem] lg:leading-[4.5rem] whitespace-pre-line">
                {data.title.split("\n").map((line, index) => (
                  <span
                    key={index}
                    className={
                      data.boldLines?.includes(index) ? "font-bold" : ""
                    }>
                    {line}
                    <br />
                  </span>
                ))}
              </h1>

              <p className="sm:my-4 sm:mb-10 sm:text-lg md:text-sm text-base my-4 text-[#bfcadb] md:whitespace-pre-line">
                {data.subtitle}
              </p>

              {data.contactUs && (
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-4 py-2 sm:px-5 text-base sm:py-2 w-40 sm:w-40 rounded-md whitespace-nowrap bg-[#00CACF] text-black flex items-center sm:text-lg font-medium justify-center uppercase">
                  Contact Us
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
     
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Banner;
