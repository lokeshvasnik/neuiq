import { motion, AnimatePresence } from "framer-motion";

const AccordionSection = ({
    index,
    title,
    content,
    expandedIndex,
    toggleAccordion,
}) => {
    const isOpen = expandedIndex === index;

    return (
        <div
            className={`${index !== 0 ? "border-t-2 border-gray-400" : ""} py-4 sm:py-6`}>
            <button
                className="flex justify-between w-full text-left font-bold text-black-900 text-xl md:text-2xl"
                onClick={() => toggleAccordion(index)}>
                {title}
                <span>{isOpen ? "-" : "+"}</span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { height: "auto", opacity: 1 },
                            collapsed: { height: 0, opacity: 0 },
                        }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="overflow-hidden">
                        <p className="text-base sm:text-xl text-black-700 mt-4 w-full">
                            {content}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AccordionSection;