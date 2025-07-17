import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { HiMail } from 'react-icons/hi';
export default function Footer() {
    return (
        <footer className="bg-zinc-100 dark:bg-zinc-950 px-6 md:px-20 py-16">
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
                    href="AdityaGhosh_CV_Frontend_2025.pdf"
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
        </footer>
    );
}