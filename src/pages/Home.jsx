// src/pages/Home.jsx

import profile from "../assets/profile.jpg"; // replace with your image
import aboutPic from "../assets/about.jpg"; // can be same or different
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaDownload } from "react-icons/fa";
import { HiCode, HiOutlinePhotograph, HiDocumentText, HiMail, HiMailOpen } from 'react-icons/hi';
// Frontend
import { FaHtml5, FaJs, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiFramer } from "react-icons/si";

// Creative Tools
import { SiAdobephotoshop, SiCanva } from "react-icons/si";

// Other Tools
import { SiWordpress, SiJirasoftware } from "react-icons/si";


const Home = () => {
  return (
    <div className="bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-700 dark:to-zinc-600 py-10 pb-0">
        {/* Hero Section */}
        <section className="flex items-center justify-center px-6 md:px-20 py-12">
            <div className="w-full max-w-5xl bg-white/40 dark:bg-zinc-800/40 backdrop-blur-md shadow-xl border border-white/20 dark:border-zinc-500 rounded-2xl p-8 md:p-14 flex flex-col md:flex-row items-center gap-10">
                
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
        <section className="px-6 md:px-20 py-12 bg-white dark:bg-zinc-800/40 backdrop-blur-md shadow-xl border border-white/20 dark:border-zinc-500 max-w-5xl mx-auto rounded-2xl hover:shadow-xl transition-all">
            <h2 className="text-3xl font-bold mb-6 text-zinc-800 dark:text-white">
            About Me
            </h2>
            <div className="prose dark:prose-invert text-justify flex flex-1">
            <div className="relative w-200 mb-4 mr-4 float-left">
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
                    className="w-full max-w-[16rem] flex items-center justify-center gap-2 my-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition duration-200"
                >
                    <FaLinkedin size={20} />
                    LinkedIn
                </a>

                {/* GitHub Button */}
                <a
                    href="https://github.com/adityacl12345" // replace with your actual link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-[16rem] flex items-center justify-center gap-2 my-4 px-4 py-2 bg-zinc-800 hover:bg-zinc-900 text-white rounded-lg shadow-md transition duration-200"
                >
                    <FaGithub size={20} />
                    GitHub
                </a>
                {/* Facebook */}
                <a
                    href="https://facebook.com/yourusername" // Replace with your actual link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-[16rem] flex items-center justify-center gap-2 my-4 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg shadow-md transition duration-200"
                >
                    <FaFacebook size={20} />
                    Facebook
                </a>

                {/* Instagram */}
                <a
                    href="https://instagram.com/yourusername" // Replace with your actual link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full max-w-[16rem] flex items-center justify-center gap-2 my-4 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg shadow-md transition duration-200"
                >
                    <FaInstagram size={20} />
                    Instagram
                </a>
            </div>
            <p className="dark:text-white px-2 mx-4 max-w-3xl">
                I'm a frontend developer with over 5 years of experience building
                responsive, scalable, and user-focused interfaces. My passion lies
                in translating designs into clean, maintainable code using React,
                Tailwind, and modern JavaScript.
                <br/><br/>
                I've worked with teams across Germany and India, and enjoy
                transforming real-world business needs into interactive, accessible
                web products. I value simplicity, thoughtful UX, and performance.
                <br/><br/>
                Outside of work, I enjoy gaming, exploring design systems, and
                occasionally blogging about frontend practices. Love playing Fifa, so hit me up when you are in for a friendly.
                <br/><br/>
                In my free time, I like listening to music especially metal, watching documentaries mostly crime, going on walks, and sometimes just exploring random ideas or projects. I love traveling too with my wife and my puppy and photograph memories.
                Right now, I’m just trying to live a bit more mindfully, keep learning, and enjoy the simple things. That’s a bit about me.
            </p>
            </div>
        </section>
        {/* What I Do Section */}
        <section className="px-6 md:px-20 py-16 my-10 dark:bg-zinc-800/40 backdrop-blur-md shadow-xl border border-white/20 dark:border-zinc-500 max-w-5xl mx-auto rounded-2xl hover:shadow-xl transition-all">
            <h2 className="text-3xl font-bold text-zinc-800 dark:text-white mb-10 text-center">
                What I Do
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {/* Developer Projects */}
                <a
                href="/projects"
                className="flex flex-col items-center justify-center bg-white dark:bg-zinc-800 rounded-xl shadow-md hover:shadow-xl transition-all p-6 group hover:-translate-y-1"
                >
                <span className="text-4xl mb-3 text-blue-600 group-hover:scale-110 transition">
                    <HiCode />
                </span>
                <h3 className="text-lg font-semibold text-zinc-700 dark:text-white">
                    Projects
                </h3>
                </a>

                {/* Photography & Art */}
                <a
                href="/art"
                className="flex flex-col items-center justify-center bg-white dark:bg-zinc-800 rounded-xl shadow-md hover:shadow-xl transition-all p-6 group hover:-translate-y-1"
                >
                <span className="text-4xl mb-3 text-pink-500 group-hover:scale-110 transition">
                    <HiOutlinePhotograph />
                </span>
                <h3 className="text-lg font-semibold text-zinc-700 dark:text-white">
                    Art & Photo
                </h3>
                </a>

                {/* Resume & Docs */}
                <a
                href="/documents"
                className="flex flex-col items-center justify-center bg-white dark:bg-zinc-800 rounded-xl shadow-md hover:shadow-xl transition-all p-6 group hover:-translate-y-1"
                >
                <span className="text-4xl mb-3 text-green-600 group-hover:scale-110 transition">
                    <HiDocumentText />
                </span>
                <h3 className="text-lg font-semibold text-zinc-700 dark:text-white">
                    Resume & Docs
                </h3>
                </a>

                {/* Contact */}
                <a
                href="/contact"
                className="flex flex-col items-center justify-center bg-white dark:bg-zinc-800 rounded-xl shadow-md hover:shadow-xl transition-all p-6 group hover:-translate-y-1"
                >
                <span className="text-4xl mb-3 text-purple-600 group-hover:scale-110 transition">
                    <HiMailOpen />
                </span>
                <h3 className="text-lg font-semibold text-zinc-700 dark:text-white">
                    Contact Me
                </h3>
                </a>
            </div>
        </section>
        {/* Skills & Tools */}
        <section className="px-6 md:px-20 py-16 my-10 dark:bg-zinc-800/40 backdrop-blur-md shadow-xl border border-white/20 dark:border-zinc-500 max-w-5xl mx-auto rounded-2xl hover:shadow-xl transition-all">
            <h2 className="text-3xl font-bold text-center text-zinc-800 dark:text-white mb-12">
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
                        [SiFramer, "Framer Motion"]
                        ].map(([Icon, label], idx) => (
                        <span key={idx} className="flex items-center gap-2 px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 rounded-full">
                            <Icon size={16} />
                            {label}
                        </span>
                        ))}
                    </div>
                </div>
                {/* Separator */}
                <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-zinc-100 to-transparent opacity-50 mx-4 h-full min-h-[200px]" />
                <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-4 text-zinc-700 dark:text-zinc-200">
                        🎨 Creative
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {[ 
                        [SiAdobephotoshop, "Photoshop"],
                        [SiCanva, "Canva"]
                        ].map(([Icon, label], idx) => (
                        <span key={idx} className="flex items-center gap-2 px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 rounded-full">
                            <Icon size={16} />
                            {label}
                        </span>
                        ))}
                    </div>
                </div>
                {/* Separator */}
                <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-zinc-100 to-transparent opacity-50 mx-4 h-full min-h-[200px]" />
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
                        <span key={idx} className="flex items-center gap-2 px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 rounded-full">
                            <Icon size={16} />
                            {label}
                        </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        {/* Connect / Footer Section */}
        <section className="bg-zinc-100 dark:bg-zinc-950 px-6 md:px-20 py-16 mt-20">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-zinc-800 dark:text-white mb-4">Let’s Connect</h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                I’m always open to new opportunities, collaborations, and creative ideas.
                Feel free to drop a message — I’ll get back to you quickly!
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
                {/* Email Button */}
                <a
                    href="mailto:adityaghosh1991@gmail.com"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition"
                >
                    <HiMail />
                    Email Me
                </a>

                {/* Resume Button */}
                <a
                    href="/AdityaGhosh_CV_Frontend_2025.pdf" // place your PDF in public/ folder
                    download
                    className="inline-flex items-center justify-center gap-2 px-5 py-2 bg-zinc-800 hover:bg-zinc-900 text-white rounded-lg shadow transition"
                >
                    <FaDownload />
                    Resume
                </a>
                </div>

                {/* Social Links (optional) */}
                <div className="flex justify-center gap-6 text-xl text-zinc-600 dark:text-zinc-300 mb-6">
                <a href="https://www.linkedin.com/in/aditya-ghosh-b30a22115/" target="_blank" rel="noreferrer">
                    <FaLinkedin className="hover:text-blue-600 transition" />
                </a>
                <a href="https://github.com/adityacl12345" target="_blank" rel="noreferrer">
                    <FaGithub className="hover:text-zinc-800 dark:hover:text-white transition" />
                </a>
                </div>

                {/* Footer Note */}
                <p className="text-xs text-zinc-400 dark:text-zinc-500">
                © {new Date().getFullYear()} Aditya Ghosh. All rights reserved.
                </p>
            </div>
        </section>


    </div>
  );
};

export default Home;
