import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  },
};

const ContactModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-lg max-w-3xl w-full relative h-[90vh] flex flex-col"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()} // prevent backdrop close
          >
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 text-xl font-bold z-10"
              onClick={onClose}
            >
              &times;
            </button>

            <div className="flex-1 overflow-y-auto">
              <iframe
                aria-label="Contact Us"
                frameBorder="0"
                className="w-full h-full !bg-white"
                src='https://forms.zohopublic.in/neuiqtechnologiespvtltd1/form/ContactUs/formperma/63DPtBVl36g8gy3G6GSZfj_do5CtTeAzzyxvAUEdHNU'/>
            </div>

            {/* status message */}
            {status && (
              <p className="mt-3 text-sm font-medium text-center text-black">{status}</p>
            )}
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
