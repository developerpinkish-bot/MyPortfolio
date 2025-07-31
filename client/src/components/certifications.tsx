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

type Cert = {
  title: string;
  provider: string;
  icon: any;
  url?: string;
};

export default function Certifications() {
  const certifications: Cert[] = [
    { title: "Introduction to Computers and Operating Systems and Security", provider: "Microsoft", icon: Cpu, url: "/certificates/microsoft_certificate_1.pdf" },
    { title: "Cybersecurity Identity and Access Solutions using Azure AD", provider: "Microsoft", icon: Lock, url: "/certificates/microsoft_certificate_4.pdf" },
    { title: "Cybersecurity Solutions and Microsoft Defender", provider: "Microsoft", icon: Shield, url: "/certificates/microsoft_certificate_5.pdf" },
    { title: "Cybersecurity Threat Vectors and Mitigation", provider: "Microsoft", icon: Server, url: "/certificates/microsoft_certificate_3.pdf" },
    { title: "Cybersecurity Tools and Technologies", provider: "Microsoft", icon: Cpu, url: "/certificates/microsoft_certificate_6.pdf" },
    { title: "Introduction to Networking and Cloud Computing", provider: "Microsoft", icon: Globe, url: "/certificates/microsoft_certificate_2.pdf" },
    { title: "Accelerate Your Job Search with AI", provider: "Google", icon: Megaphone, url: "/certificates/google_certificate_course_4.pdf" },
    { title: "Google Cybersecurity Professional Certificate", provider: "Google", icon: Shield, url: "/certificates/google_cybersecurity.pdf" },
    { title: "Assets, Threats, and Vulnerabilities", provider: "Google", icon: Lock, url: "/certificates/google_certificate_course_8.pdf" },
    { title: "Automate Cybersecurity Tasks with Python", provider: "Google", icon: Cpu, url: "/certificates/google_certificate_course_6.pdf" },
    { title: "Connect and Protect – Networks and Network Security", provider: "Google", icon: Server, url: "/certificates/google_certificate_course_3.pdf" },
    { title: "Play It Safe: Manage Security Risks", provider: "Google", icon: Shield, url: "/certificates/google_certificate_course_2.pdf" },
    { title: "Put It to Work: Prepare for Cybersecurity Jobs", provider: "Google", icon: Megaphone, url: "/certificates/google_certificate_course_5.pdf" },
    { title: "Sound the Alarm: Detection and Response", provider: "Google", icon: CloudLightning, url: "/certificates/google_certificate_course_7.pdf" },
    { title: "Tools of the Trade: Linux and SQL", provider: "Google", icon: Cpu, url: "/certificates/google_certificate_course_9.pdf" },
    { title: "Foundations of Cybersecurity", provider: "Google", icon: BookText, url: "/certificates/google_certificate.pdf" },
    { title: "Ethical Hacking with Kali Linux", provider: "IBM", icon: Lock, url: "/certificates/ibm_certificate_3.pdf" },
    { title: "Digital Marketing Certificate", provider: "WAPEXP College", icon: Megaphone }
  ];

  const providerColors: Record<string, string> = {
    Microsoft: "#EA4335",
    Google: "#1A73E8",
    IBM: "#34A853",
    "WAPEXP College": "#F9AB00"
  };

  return (
    <section className="print-break">
      <h2 className="text-2xl font-semibold text-google-gray-900 dark:text-[#F1F3F4] mb-4 flex items-center gap-2">
        <Award className="h-6 w-6 text-[#F9AB00]" />
        Certifications
      </h2>

      {/* --- THIS IS THE LINE THAT WAS CHANGED --- */}
      <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
        {certifications.map((cert, index) => {
          const Icon = cert.icon;
          const color = providerColors[cert.provider] || "#F9AB00";

          const content = (
            <div className="flex items-center gap-2">
              <Icon className="h-4 w-4 shrink-0" style={{ color }} />
              <h4 className="text-sm font-medium text-google-gray-900 dark:text-[#E8EAED] leading-tight">
                {cert.title}
              </h4>
            </div>
          );

          const classes =
            "p-3 border-l-4 rounded-md shadow-sm bg-white dark:bg-[#202124] hover:shadow-material-hover hover:-translate-y-1 transition-transform duration-200 flex items-center h-full"; // Added flex, items-center, h-full for better vertical alignment

          return cert.url ? (
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className={classes}
              style={{ borderColor: color }}
            >
              {content}
            </a>
          ) : (
            <div
              key={index}
              className={classes}
              style={{ borderColor: color }}
            >
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}