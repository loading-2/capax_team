import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-r from-black to-red-700 text-black">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80, damping: 16 }}
       
          className="text-4xl md:text-5xl font-bold text-center mb-8  bg-white bg-clip-text text-transparent"
        >
          About  <span className="text-red-700">Capax</span> Team
        </motion.h2>

        <motion.p
          
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80, damping: 16 }}
      
          className="max-w-3xl mx-auto text-center text-white text-lg font-bold leading-relaxed"
        >
          We are a passionate team of cybersecurity enthusiasts specializing in Web, OSINT, Reverse Engineering, More... and Exploit Development. Our goal is to learn, share knowledge, and conquer challenges together.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: "Our Mission",
              text: "Empower the infosec community through collaboration, continuous learning, and elite CTF competition.",
              icon: "🛡️",
            },
            {
              title: "Our Vision",
              text: "To become one of the most respected CTF teams in the region, known for technical skills and teamwork.",
              icon: "🚀",
            },
            {
              title: "Our Values",
              text: "Respect, integrity, and always stay hungry for knowledge. Hack for good and grow together.",
              icon: "💡",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{opacity:0, scale:0.8}}
              animate={{ opacity:1 ,scale:1}}
              transition={{delay:1.6 ,duration:0.8,
              type:"spring",
              stiffness:100,
              damping:15,}}
              className="bg-gradient-to-r from-black via-red-800 to-black p-6 rounded-2xl shadow-lg border border-gray-700 hover:border-red-600 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-200">{item.title}</h3>
              <p className="text-white text-gray-400 ">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
