import { motion } from "framer-motion";

const footerLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Members", href: "#members" },
];

const Footer = () => {
  return (
    <footer className="bg-black py-12 text-gray-400 select-none">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-extrabold text-white mb-6 md:mb-0 cursor-default"
        >
          Capax <span className="text-red-500">Team</span>
        </motion.div>
        <nav className="flex space-x-10">
          {footerLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="text-white hover:text-red-500 transition cursor-pointer font-medium"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>
      </div>
      <motion.div

        className="mt-12 text-center text-gray-600 text-sm"
      >
        &copy; {new Date().getFullYear()} Capax Team. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
