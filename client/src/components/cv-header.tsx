import { Mail, MapPin, Github, Linkedin } from "lucide-react";

export default function CVHeader() {
  return (
    <header className="bg-gradient-to-r from-google-blue to-blue-600 text-black py-12 px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-5"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl lg:text-6xl font-bold mb-3 tracking-tight">
            Humna Imran
          </h1>
          <p className="text-xl lg:text-2xl font-light mb-6 opacity-90">
            Artificial Intelligence | Cybersecurity
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm lg:text-base">
            <div className="flex items-center gap-2 bg-white bg-opacity-10 rounded-full px-4 py-2 backdrop-blur-sm hover:bg-opacity-20 transition-all">
              <MapPin className="h-4 w-4" />
              <span>Faisalabad, Pakistan</span>
            </div>
            <a 
              href="mailto:devhamnah@gmail.com" 
              className="flex items-center gap-2 bg-white bg-opacity-10 rounded-full px-4 py-2 backdrop-blur-sm hover:bg-opacity-20 transition-all hover:underline"
            >
              <Mail className="h-4 w-4" />
              <span>devhamnah@gmail.com</span>
            </a>
            <a 
              href="https://linkedin.com/in/hamnaic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white bg-opacity-10 rounded-full px-4 py-2 backdrop-blur-sm hover:bg-opacity-20 transition-all hover:underline"
            >
              <Linkedin className="h-4 w-4" />
              <span>linkedin.com/in/hamnaic</span>
            </a>
            <a 
              href="https://github.com/hamnasz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white bg-opacity-10 rounded-full px-4 py-2 backdrop-blur-sm hover:bg-opacity-20 transition-all hover:underline"
            >
              <Github className="h-4 w-4" />
              <span>github.com/hamnasz</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
