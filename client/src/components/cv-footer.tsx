import { Mail, Github, Linkedin } from "lucide-react";

export default function CVFooter() {
  return (
    <footer className="bg-google-gray-900 dark:bg-google-gray-200 text-white dark:text-google-gray-800 py-8 px-8 mt-16 transition-colors duration-200">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-lg font-light italic mb-4">
          "Securing the future through AI and ethics."
        </p>
        <div className="flex justify-center gap-6">
          <a 
            href="https://linkedin.com/in/hamnaic"
            target="_blank"
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-google-gray-300 dark:text-google-gray-600 hover:text-white dark:hover:text-google-gray-900 transition-colors group"
          >
            <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span>LinkedIn</span>
          </a>
          <a 
            href="https://github.com/hamnasz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-google-gray-300 dark:text-google-gray-600 hover:text-white dark:hover:text-google-gray-900 transition-colors group"
          >
            <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span>GitHub</span>
          </a>
          <a 
            href="mailto:devhamnah@gmail.com" 
            className="flex items-center gap-2 text-google-gray-300 dark:text-google-gray-600 hover:text-white dark:hover:text-google-gray-900 transition-colors group"
          >
            <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
