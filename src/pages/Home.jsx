// src/pages/Home.jsx
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg"; // replace with your image
import aboutPic from "../assets/about.jpg"; // can be same or different
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaDownload, FaWhatsapp, FaEnvelope, FaPhone, FaFacebookF } from "react-icons/fa";
import { HiCode, HiOutlinePhotograph, HiDocumentText, HiMail, HiMailOpen } from 'react-icons/hi';
// Frontend
import { FaHtml5, FaJs, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiFramer } from "react-icons/si";

// Creative Tools
import { SiAdobephotoshop, SiCanva } from "react-icons/si";

// Other Tools
import { SiWordpress, SiJirasoftware } from "react-icons/si";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import FloatingSocialBar, { SocialIcons } from "../components/FloatingSocialBar";
import CertificateCard from "../components/CertificateCard";
import LearningProgressBar from "../components/LearningProgressBar";

const sectionClass = "px-6 md:px-20 py-16 bg-white dark:bg-zinc-800/40 backdrop-blur-md shadow-xl border border-white/20 dark:border-zinc-500 max-w-6xl mx-6 xl:mx-auto rounded-2xl hover:shadow-xl transition-all";


const Home = () => {
    const [showDocs, setShowDocs] = useState(false);
    const docsRef = useRef(null);
    const [isDocked, setIsDocked] = useState(false);
    const contactRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (docsRef.current && !docsRef.current.contains(event.target)) {
            setShowDocs(false);
            }
        }

        if (showDocs) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showDocs]);

    return (
      <div className="py-10">
        <FloatingSocialBar contactRef={contactRef} onDockChange={(dock) => setIsDocked(dock)}/>
        {/* Hero Section */}
        <section className={`${sectionClass} my-0`}>
          <div className="w-full flex flex-col md:flex-row items-center gap-10">
            {/* Left Text Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-zinc-800 dark:text-white mb-3">
                Aditya Ghosh
              </h1>
              <p className="text-zinc-500 dark:text-zinc-300 mb-2">
                Frontend Developer | React | JS | HTML | CSS | NODE | MONGODB
              </p>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                Kolkata, India
              </p>
            </div>

            {/* Right Profile Image */}
            <div className="flex-1 flex justify-center">
              <img
                src={profile}
                alt="Aditya Ghosh"
                className="w-52 h-52 md:w-64 md:h-64 object-cover rounded-full border-4 border-white dark:border-zinc-700 shadow-lg hover:scale-105 transition duration-300 ease-in-out"
              />
            </div>
          </div>
        </section>
        {/* About Section */}
        <section className={`${sectionClass} my-10`}>
          <h2 className="text-3xl text-center uppercase font-bold mb-6 text-zinc-800 dark:text-white">
            About Me
          </h2>
          <div className="prose dark:prose-invert text-justify flex flex-1 flex-col md:flex-row">
            <div className="relative md:max-w-2xl mb-4 md:mr-6 float-left">
              <img
                src={aboutPic}
                alt="Aditya writing"
                className="rounded-md shadow-md"
              />
              {/* LinkedIn Button */}
              <a
                href="https://www.linkedin.com/in/aditya-ghosh-b30a22115/" // replace with your actual link
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-2xl flex items-center justify-center gap-2 my-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition duration-200"
              >
                <FaLinkedin size={20} />
                LinkedIn
              </a>

              {/* GitHub Button */}
              <a
                href="https://github.com/adityacl12345" // replace with your actual link
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-2xl flex items-center justify-center gap-2 my-4 px-4 py-2 bg-zinc-800 hover:bg-zinc-900 text-white rounded-lg shadow-md transition duration-200"
              >
                <FaGithub size={20} />
                GitHub
              </a>
            </div>
            <p className="dark:text-white md:max-w-3xl text-zinc-800">
              👋 Hi, I’m Aditya — a curious mix of gamer, thinker, traveler, and
              metalhead with a camera always within reach. When I’m not building
              interfaces, I’m usually chasing a good Fifa session, discovering
              obscure crime documentaries, or losing myself in atmospheric music
              (yes, mostly metal — the heavier, the better). 
              <br/><br/>
              I live with my amazing wife and our mischievous little pomeranian — a fluffy,
              four-legged reminder to pause and enjoy the chaos. Together, we
              love wandering off on road trips, catching sunsets, and capturing
              stories through photographs. I’m that person who stops mid-walk
              just to frame a perfect cloud, a moody alley, or a sleepy street
              dog. Sometimes it’s the smallest things that tell the best
              stories. <br/><br/>
              My downtime? It's a blend of long walks with music in my
              ears, deep dives into design systems (for fun!), and spontaneous
              midnight Google rabbit holes. I enjoy tinkering with side projects
              that may never launch — just to see what’s possible. 
              If you’re into conversations about visual thinking, minimalism, or why some UI feels like
              poetry, I’m always up for a chat. 
              <br/><br/>
              These days, I’m focused on living slower, being more mindful, and creating more than I
              consume. Whether it's a side hustle idea, a weird UI experiment,
              or a playlist of obscure indie bands — I love sharing things that
              inspire me. So that’s me. A little messy, a little nerdy, very
              curious — always learning, exploring, and trying to build a life
              that feels like me.
            </p>
          </div>
        </section>
        {/* What I Do Section */}
        <section className={`${sectionClass} my-10`}>
          <h2 className="text-3xl font-bold text-zinc-800 dark:text-white mb-10 text-center uppercase">
            What I Do
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Developer Projects */}
            <Link
                to="/projects"
                className="flex flex-col items-center justify-center bg-white dark:bg-zinc-800 rounded-xl shadow-md hover:shadow-xl transition-all p-6 group hover:-translate-y-1"
            >
              <span className="text-4xl mb-3 text-blue-600 group-hover:scale-110 transition">
                <HiCode />
              </span>
              <h3 className="text-lg font-semibold text-zinc-700 dark:text-white">
                Projects
              </h3>
            </Link>

            {/* photo & Art */}
            <Link
                to="/gallery"
                className="flex flex-col items-center justify-center bg-white dark:bg-zinc-800 rounded-xl shadow-md hover:shadow-xl transition-all p-6 group hover:-translate-y-1"
            >
              <span className="text-4xl mb-3 text-pink-500 group-hover:scale-110 transition">
                <HiOutlinePhotograph />
              </span>
              <h3 className="text-lg font-semibold text-zinc-700 dark:text-white">
                Art & Photo
              </h3>
            </Link>

            {/* Resume & Docs */}
            <button
              onClick={() => setShowDocs(!showDocs)}
              className="flex flex-col items-center justify-center bg-white dark:bg-zinc-800 rounded-xl shadow-md hover:shadow-xl transition-all p-6 group hover:-translate-y-1"
            >
              <span className="text-4xl mb-3 text-green-600 group-hover:scale-110 transition">
                <HiDocumentText />
              </span>
              <h3 className="text-lg font-semibold text-zinc-700 dark:text-white">
                Resume & Docs
              </h3>
            </button>

            {/* Contact */}
            <button
              onClick={() =>
                contactRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
              className="flex flex-col items-center justify-center bg-white dark:bg-zinc-800 rounded-xl shadow-md hover:shadow-xl transition-all p-6 group hover:-translate-y-1"
            >
              <span className="text-4xl mb-3 text-purple-600 group-hover:scale-110 transition">
                <HiMailOpen />
              </span>
              <h3 className="text-lg font-semibold text-zinc-700 dark:text-white">
                Contact Me
              </h3>
            </button>
          </div>
          {showDocs && (
            <div
              className="mt-4 flex flex-wrap justify-center gap-4"
              ref={docsRef}
            >
              <a
                href="AdityaGhosh_CV_Frontend_2025.pdf"
                download
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                <span>Resume</span> <FiDownload size={16} className="inline" />
              </a>
              <a
                href="Reference_Freaks4u.pdf"
                download
                className="px-4 py-2 bg-zinc-800 text-white rounded hover:bg-zinc-900"
              >
                <span>Freaks 4U Reference </span>
                <FiDownload size={16} className="inline" />
              </a>
              <a
                href="Reference_Gamigo.pdf"
                download
                className="px-4 py-2 bg-zinc-800 text-white rounded hover:bg-zinc-900"
              >
                <span>Gamigo Reference </span>
                <FiDownload size={16} className="inline" />
              </a>
              <a
                href="Master_Degree.pdf"
                download
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                <span>Master's Degree </span>
                <FiDownload size={16} className="inline" />
              </a>
            </div>
          )}
        </section>
        <section className={`${sectionClass} my-10`}>
          <h2 className="text-3xl font-bold text-center text-zinc-800 dark:text-white mb-8 uppercase">
            Certifications & Progress
          </h2>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            <CertificateCard title="React, NodeJS, Express & MongoDB - The MERN Fullstack Guide" issuer="Udemy" date="July 2024" link="Mern_Certificate_Udemy.pdf" />
            <CertificateCard title="Introduction to Front-End Development" issuer="Meta" date="August 2025" link="Meta_Certificate_Coursera.pdf" />
          </div>

          {/* Progress Bars */}
          <div className="max-w-xl mx-auto">
            <LearningProgressBar title="Become a Certified Web Developer: HTML, CSS and JavaScript" issuer="Udemy" percent={76} />
            <LearningProgressBar title="React - The Complete Guide 2025 (incl. Next.js, Redux)" issuer="Udemy" percent={55} />
            <LearningProgressBar title="Vue - The Complete Guide (incl. Router & Composition API)" issuer="Udemy" percent={34} />
            <LearningProgressBar title="Professional Certificate: Meta Front-End Developer" issuer="Meta, Coursera" percent={15} />
          </div>
        </section>

        {/* Skills & Tools */}
        <section className={`${sectionClass} my-10`}>
          <h2 className="text-3xl font-bold text-center text-zinc-800 dark:text-white mb-12 uppercase">
            Skills & Tools
          </h2>

          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 text-sm items-start min-h-[200px]">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-4 text-zinc-700 dark:text-zinc-200">
                💻 Frontend
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  [FaHtml5, "HTML"],
                  [FaCss3Alt, "CSS"],
                  [FaJs, "JavaScript"],
                  [FaReact, "React"],
                  [SiTailwindcss, "Tailwind CSS"],
                  [SiVite, "Vite"],
                  [SiFramer, "Framer Motion"],
                ].map(([Icon, label], idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-2 px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 rounded-full"
                  >
                    <Icon size={16} />
                    {label}
                  </span>
                ))}
              </div>
            </div>
            {/* Separator */}
            <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-zinc-800 to-transparent dark:bg-gradient-to-b dark:from-transparent dark:via-zinc-100 dark:to-transparent opacity-50 mx-4 h-full min-h-[200px]" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-4 text-zinc-700 dark:text-zinc-200">
                🎨 Creative
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  [SiAdobephotoshop, "Photoshop"],
                  [SiCanva, "Canva"],
                ].map(([Icon, label], idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-2 px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 rounded-full"
                  >
                    <Icon size={16} />
                    {label}
                  </span>
                ))}
              </div>
            </div>
            {/* Separator */}
            <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-zinc-800 to-transparent dark:bg-gradient-to-b dark:from-transparent dark:via-zinc-100 dark:to-transparent opacity-50 mx-4 h-full min-h-[200px]" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-4 text-zinc-700 dark:text-zinc-200">
                🧰 Miscellaneous
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  [FaGitAlt, "Git"],
                  [SiWordpress, "WordPress"],
                  [SiJirasoftware, "Jira"],
                ].map(([Icon, label], idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-2 px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 rounded-full"
                  >
                    <Icon size={16} />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section
          ref={contactRef}
          id="contact"
          className={`${sectionClass} my-10`}
        >
          <h2 className="text-3xl font-bold text-zinc-800 dark:text-white mb-8 text-center uppercase">
            Contact Me
          </h2>

          <p className="text-zinc-600 dark:text-zinc-300 mb-6 text-center">
            Feel free to reach out to me through any of the platforms or the Contact form below!
          </p>

          {/* Contact Info */}
          <div className="space-y-4 mb-10">
            <p className="text-lg text-zinc-800 dark:text-zinc-200 flex items-center justify-center gap-2">
              <FaPhone className="text-green-600" />
              +91 93304 10952
            </p>
            <p className="text-lg text-zinc-800 dark:text-zinc-200 flex items-center justify-center gap-2">
              <FaEnvelope className="text-blue-600" />
              adityaghosh1991@gmail.com
            </p>
            <p className="text-lg text-zinc-800 dark:text-zinc-200 flex items-center justify-center gap-2">
              <FaWhatsapp className="text-green-500" />
              WhatsApp on same number
            </p>
          </div>

          <ContactForm />

          {isDocked && (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 50 }}
              className="flex justify-center mt-6"
            >
              <div className="flex gap-4">
                <SocialIcons />
              </div>
            </motion.div>
          )}
        </section>
      </div>
    );
};

export default Home;
