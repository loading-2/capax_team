import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";

const members = [
  {
    name: "Capax",
    image: "https://avatars.githubusercontent.com/u/000000?v=4",
    description: "Web And Reverse engineering & malware analysis.",
  tags: ["Web", "OSINT"],
    
  },

  {
    name: "Capax",
    image: "https://avatars.githubusercontent.com/u/000000?v=4",
    description: "Web And Reverse engineering & malware analysis.",
    tags: ["Web", "OSINT"],
    
  },

  {
    name: "Capax",
    image: "https://avatars.githubusercontent.com/u/000000?v=4",
    description: "Web And Reverse engineering & malware analysis.",
    tags: ["Web", "OSINT"],
    
  },
  {
    name: "Capax",
    image: "https://avatars.githubusercontent.com/u/000000?v=4",
    description: "Web And Reverse engineering & malware analysis.",
    tags: ["Web", "OSINT"],
    
  },
  {
    name: "Capax",
    image: "https://avatars.githubusercontent.com/u/000000?v=4",
    description: "Web And Reverse engineering & malware analysis.",
    tags: ["Web", "OSINT"],
    
  },
  {
    name: "Capax",
    image: "https://avatars.githubusercontent.com/u/000000?v=4",
    description: "Web And Reverse engineering & malware analysis.",
    tags: ["Web", "OSINT"],
    
  },
  {
    name: "Capax",
    image: "https://avatars.githubusercontent.com/u/000000?v=4",
    description: "Web And Reverse engineering & malware analysis.",
    tags: ["Web", "OSINT"],
    
  },
  {
    name: "Capax",
    image: "https://avatars.githubusercontent.com/u/000000?v=4",
    description: "Web And Reverse engineering & malware analysis.",
    tags: ["Web", "OSINT"],
    
  },


  {
    name: "Capax",
    image: "https://avatars.githubusercontent.com/u/000000?v=4",
    description: "Web And Reverse engineering & malware analysis.",
    tags: ["Web", "OSINT"],
    
  },


  
];

const Members = () => {
  return (
    <section id="members" className="py-20 bg-black">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3}}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-5xl font-extrabold text-center text-white mb-16 tracking-wide"
        >
          <span className="text-red-500">Capax</span> Team Members
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{opacity:0, scale:0.8}}
              animate={{ opacity:1 ,scale:1}}
              transition={{delay:1.6 ,duration:0.8,
              type:"spring",
              stiffness:100,
              damping:15,}}
              
              className="bg-black rounded-3xl p-8 shadow-xl border border-gray-700 flex flex-col items-center text-center hover:shadow-red-600 hover:border-red-600 transition-all"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 rounded-full object-cover mb-6 border-4 border-red-600 shadow-lg"
              />
              <h3 className="text-2xl font-semibold text-white mb-3">{member.name}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{member.description}</p>
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {member.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-1 rounded-full bg-gradient-to-r from-black-600 via-red-500 to-black-600 text-sm font-medium text-white shadow-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition transform hover:scale-110"
                aria-label={`${member.name} GitHub`}
              >
            
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
