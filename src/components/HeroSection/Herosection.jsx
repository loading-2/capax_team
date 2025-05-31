import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-black overflow-hidden pt-24 pb-20 md:pb-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-red-600 to-gray-300 bg-clip-text text-transparent">
              This is Capax
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Join the fastest growing hacking team in the World. Take on challenges in Web Exploitation, OSINT, Crypto, and more...
            </p>

            <motion.a
              href="#members"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-bold bg-gradient-to-r from-red-600 to-black text-white shadow-lg hover:from-red-700 hover:to-violet-600 transition-all duration-300"
            >
            Our Team <FiArrowRight className="text-xl" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
            className="flex justify-center"
          >
            <img
              src="https://assets-global.website-files.com/636bccf7762dd7f5b962f8d1/64198be962cfef95c0d37db1_hacker%20illustration.svg"
              alt="loading..."
              className="w-full max-w-md md:max-w-lg"
            />
          </motion.div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full opacity-20 blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500 rounded-full opacity-20 blur-3xl -z-10 animate-pulse delay-500"></div>
    </section>
  );
};

export default HeroSection;
