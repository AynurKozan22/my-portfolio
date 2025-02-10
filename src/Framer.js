import { motion } from "framer-motion";

const Section = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Başlangıç durumu (gizli ve aşağıda)
      whileInView={{ opacity: 1, y: 0 }} // Görününce animasyon yap
      transition={{ duration: 0.8 }} // Animasyon süresi
      viewport={{ once: true, amount: 0.3 }} // Tek seferlik tetikleme, %30 görünce başlasın
      className="min-h-screen flex items-center justify-center bg-gray-100 p-10 rounded-lg shadow-md"
    >
      {children}
    </motion.div>
  );
};

export default Section;
