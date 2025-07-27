import {
  Award,
  Shield,
  Megaphone,
  Lock,
  Server,
  Cpu,
  BookText,
  Globe,
  CloudLightning
} from "lucide-react";

export default function Certifications() {
  const certifications = [
    // Microsoft
    { title: "Introduction to Computers and Operating Systems and Security", provider: "Microsoft", icon: Cpu, url: "/certificates/Microsoft Certificate 1.pdf" },
    { title: "Microsoft Cybersecurity Certificate", provider: "Microsoft", icon: Shield, },
    { title: "Cybersecurity Identity and Access Solutions using Azure AD", provider: "Microsoft", icon: Lock, url: "/certificates/Microsoft Certificate 4.pdf" },
    { title: "Cybersecurity Solutions and Microsoft Defender", provider: "Microsoft", icon: Shield, url: "/certificates/Microsoft Certificate 5.pdf" },
    { title: "Cybersecurity Threat Vectors and Mitigation", provider: "Microsoft", icon:Server, url: "/certificates/Microsoft Certificate 3.pdf" },
    { title: "Cybersecurity Tools and Technologies", provider: "Microsoft", icon: Cpu, url: "/certificates/Microsoft Certificate 6.pdf" },
    { title: "Microsoft Cybersecurity Professional Certification 1", provider: "Microsoft", icon: BookText },
    { title: "Introduction to Networking and Cloud Computing", provider: "Microsoft", icon: Globe, url: "/certificates/Microsoft Certificate 2.pdf" },

    // Google
    { title: "Accelerate Your Job Search with AI", provider: "Google", icon: Megaphone, url:"/certificates/Google Certificate Course 4.pdf" },
    { title: "Google Cybersecurity Professional Certificate", provider: "Google", icon: Shield, url:"/certificates/Google CyberSecurity.pdf" },
    { title: "Assets, Threats, and Vulnerabilities", provider: "Google", icon: Lock, url:"/certificates/Google Certificate Course 8.pdf" },
    { title: "Automate Cybersecurity Tasks with Python", provider: "Google", icon: Cpu, url:"/certificates/Google Certificate Course 6.pdf" },
    { title: "Connect and Protect – Networks and Network Security", provider: "Google", icon: Server, url:"/certificates/Google Certificate Course 3.pdf" },
    { title: "Play It Safe: Manage Security Risks", provider: "Google", icon: Shield, url:"/certificates/Google Certificate Course 2.pdf" },
    { title: "Put It to Work: Prepare for Cybersecurity Jobs", provider: "Google", icon: Megaphone, url:"/certificates/Google Certificate Course 5.pdf" },
    { title: "Sound the Alarm: Detection and Response", provider: "Google", icon: CloudLightning,url:"/certificates/Google Certificate Course 7.pdf" },
    { title: "Tools of the Trade: Linux and SQL", provider: "Google", icon: Cpu, url:"/certificates/Google Certificate Course 9.pdf" },
    { title: "Foundations of Cybersecurity", provider: "Google", icon: BookText, url: "/certificates/Google Certificate.pdf" },

    // IBM
    { title: "Ethical Hacking with Kali Linux", provider: "IBM", icon: Lock,url:"/certificates/IBM Certificate 3.pdf" },

    // Others
    { title: "Digital Marketing Certificate", provider: "WAPEXP College", icon: Megaphone }
  ];

  // Tailwind-safe color mapping
  const colorClasses = {
    "Microsoft": "text-google-red",
    "Google": "text-google-blue",
    "IBM": "text-google-green",
    "WAPEXP College": "text-google-yellow"
  };

  return (
    <section className="print-break">
      <h2 className="text-2xl font-semibold text-google-gray-900 dark:text-google-gray-800 mb-6 flex items-center gap-2">
        <Award className="h-6 w-6 text-google-yellow dark:text-google-yellow" />
        Certifications
      </h2>

      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-white dark:bg-google-gray-100 rounded-lg shadow-material p-4 border border-google-gray-200 dark:border-google-gray-300 hover:shadow-material-hover transition-all duration-200 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3">
              <cert.icon className={`h-6 w-6 ${colorClasses[cert.provider] || "text-google-yellow"}`} />
              <div>
                <h4 className="font-semibold text-google-gray-900 dark:text-google-gray-800">
                  {cert.title}
                </h4>
                <p className="text-sm text-google-gray-600 dark:text-google-gray-500">
                  {cert.provider}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
