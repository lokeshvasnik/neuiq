
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ContactModal from "../components/ContactModal"; // import modal
import React, { useState } from "react";

const ContactFooter = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // modal state

  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            data.bgImage.includes("home-page-footer.webp")
              ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${data.bgImage})`
              : `url(${data.bgImage})`,
        }}
      >
        <div className="lg:px-10 px-4 py-10 max-w-full mx-auto">
          <div className="flex sm:flex-row flex-col-reverse items-start sm:items-center gap-4 lg:min-h-[500px] tablet-view">
            <motion.div className="sm:w-[100%] "
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <h1 className="text-2xl sm:text-6xl font-bold sm:leading-[4.5rem] text-white whitespace-pre-line">
                {data.title}
              </h1>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 w-36 font-bold mt-5 sm:px-5 text-base sm:py-2 sm:w-40 rounded-md whitespace-nowrap bg-[#00CACF] text-black flex items-center sm:text-lg justify-center uppercase">
                Contact Us
              </button>
            </motion.div>
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

export default ContactFooter;
