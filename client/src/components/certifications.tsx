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
    { title: "Introduction to Computers and Operating Systems and Security", provider: "Microsoft", icon: Cpu },
    { title: "Microsoft Cybersecurity Certificate", provider: "Microsoft", icon: Shield },
    { title: "Cybersecurity Identity and Access Solutions using Azure AD", provider: "Microsoft", icon: Lock },
    { title: "Cybersecurity Solutions and Microsoft Defender", provider: "Microsoft", icon: Shield },
    { title: "Cybersecurity Threat Vectors and Mitigation", provider: "Microsoft", icon:Server },
    { title: "Cybersecurity Tools and Technologies", provider: "Microsoft", icon: Cpu },
    { title: "Microsoft Cybersecurity Professional Certification 1", provider: "Microsoft", icon: BookText },
    { title: "Introduction to Networking and Cloud Computing", provider: "Microsoft", icon: Globe },

    // Google
    { title: "Accelerate Your Job Search with AI", provider: "Google", icon: Megaphone },
    { title: "Google Cybersecurity Certificate", provider: "Google", icon: Shield },
    { title: "Assets, Threats, and Vulnerabilities", provider: "Google", icon: Lock },
    { title: "Automate Cybersecurity Tasks with Python", provider: "Google", icon: Cpu },
    { title: "Connect and Protect – Networks and Network Security", provider: "Google", icon: Server },
    { title: "Play It Safe: Manage Security Risks", provider: "Google", icon: Shield },
    { title: "Put It to Work: Prepare for Cybersecurity Jobs", provider: "Google", icon: Megaphone },
    { title: "Sound the Alarm: Detection and Response", provider: "Google", icon: CloudLightning },
    { title: "Tools of the Trade: Linux and SQL", provider: "Google", icon: Cpu },
    { title: "Foundations of Cybersecurity", provider: "Google", icon: BookText },
    { title: "Google Cybersecurity Professional Certificate", provider: "Google", icon: Shield },

    // IBM
    { title: "Ethical Hacking with Kali Linux", provider: "IBM", icon: Lock },
    { title: "IBM Cybersecurity Certificate", provider: "IBM", icon: Shield },

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
