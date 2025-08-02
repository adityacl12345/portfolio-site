// src/components/FloatingSocialBar.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

const FloatingSocialBar = ({ contactRef, onDockChange }) => {
  const { ref: inViewRef, inView } = useInView({ threshold: 0.3 });

  // Attach the observer to contact section
  useEffect(() => {
    if (contactRef?.current) {
      inViewRef(contactRef.current);
    }
  }, [contactRef, inViewRef]);

  // Notify parent of docking change
  useEffect(() => {
    onDockChange(inView);
  }, [inView, onDockChange]);

  if (inView) return null; // hide floating version when docked

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 80 }}
      className="fixed top-1/3 right-0 z-40 flex flex-col gap-4 pr-2"
    >
      <SocialIcons />
    </motion.div>
  );
};

export const SocialIcons = () => (
  <>
    <a
      href="https://wa.me/919330410952"
      target="_blank"
      className="bg-green-500 hover:bg-green-600 p-3 rounded-full shadow text-white transition-all"
    >
      <FaWhatsapp size={20} />
    </a>
    <a
      href="https://www.facebook.com/aditya.ghosh.79"
      target="_blank"
      className="bg-[#1877F2] hover:bg-[#145cc0] p-3 rounded-full shadow text-white transition-all"
    >
      <FaFacebookF size={20} />
    </a>
    <a
      href="https://www.instagram.com/adityapsycho/"
      target="_blank"
      className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-3 rounded-full shadow text-white transition-all"
    >
      <FaInstagram size={20} />
    </a>
  </>
);

export default FloatingSocialBar;
