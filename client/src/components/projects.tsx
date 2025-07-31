import {
  Folder,
  Bot,
  Network,
  GraduationCap,
  Languages,
  CreditCard,
  MessageCircle
} from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "AI Resume Matching App",
      description:
        "An app that uses GPT-based suggestions to match resumes against newly uploaded job listings in real time.",
      icon: Bot,
      color: "#1A73E8" // Google Blue
    },
    {
      title: "Network Packet Sniffer",
      description: "Monitored and analyzed network traffic using Python and Scapy",
      icon: Network,
      color: "#EA4335" // Google Red
    },
    {
      title: "Online Exam LMS",
      description: "A secure, automated examination system for academic institutions",
      icon: GraduationCap,
      color: "#F9AB00" // Google Yellow
    },
    {
      title: "Language Learning App",
      description: "AI-powered app for personalized vocabulary practice",
      icon: Languages,
      color: "#34A853" // Google Green
    },
    {
      title: "Credit Scoring App",
      description: "Built a scoring model using AI for micro-finance decisions",
      icon: CreditCard,
      color: "#1A73E8" // Google Blue
    },
    {
      title: "Cognitive Bot",
      description:
        "A chatbot that adapts responses based on user sentiment and behavior",
      icon: MessageCircle,
      color: "#EA4335" // Google Red
    }
  ];

  return (
    <section className="print-break">
      <h2 className="text-2xl font-semibold text-google-gray-900 dark:text-[#F1F3F4] mb-6 flex items-center gap-2">
        <Folder className="h-6 w-6 text-[#34A853]" /> {/* Google Green */}
        Projects
      </h2>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#202124] rounded-xl shadow-material p-6 border-l-4 hover:shadow-material-hover transition-all duration-200 hover:-translate-y-1"
            style={{ borderColor: project.color }}
          >
            <h4 className="font-semibold text-google-gray-900 dark:text-[#E8EAED] mb-2 flex items-center gap-2">
              <project.icon className="h-5 w-5" style={{ color: project.color }} />
              {project.title}
            </h4>
            <p className="text-sm text-google-gray-700 dark:text-[#959696]">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
