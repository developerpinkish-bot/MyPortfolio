import { Folder, Bot, Network, GraduationCap, Languages, CreditCard, MessageCircle } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "AI Resume Builder",
      description: "A tool that creates smart resumes using GPT-based suggestions",
      icon: Bot,
      color: "google-blue"
    },
    {
      title: "Network Packet Sniffer", 
      description: "Monitored and analyzed network traffic using Python and Scapy",
      icon: Network,
      color: "google-red"
    },
    {
      title: "Online Exam LMS",
      description: "A secure, automated examination system for academic institutions",
      icon: GraduationCap,
      color: "google-yellow"
    },
    {
      title: "Language Learning App",
      description: "AI-powered mobile app for personalized vocabulary practice",
      icon: Languages,
      color: "google-green"
    },
    {
      title: "Credit Scoring App",
      description: "Built a scoring model using AI for micro-finance decisions",
      icon: CreditCard,
      color: "google-blue"
    },
    {
      title: "Cognitive Bot",
      description: "A chatbot that adapts responses based on user sentiment and behavior",
      icon: MessageCircle,
      color: "google-red"
    }
  ];

  return (
    <section className="print-break">
      <h2 className="text-2xl font-semibold text-google-gray-900 dark:text-google-gray-800 mb-6 flex items-center gap-2">
        <Folder className="h-6 w-6 text-google-green dark:text-google-green" />
        Projects
      </h2>
      
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`bg-white dark:bg-google-gray-100 rounded-lg shadow-material p-4 border-l-4 border-${project.color} hover:shadow-material-hover transition-all duration-200 hover:-translate-y-1`}
          >
            <h4 className="font-semibold text-google-gray-900 dark:text-google-gray-800 mb-2 flex items-center gap-2">
              <project.icon className={`h-4 w-4 text-${project.color}`} />
              {project.title}
            </h4>
            <p className="text-sm text-google-gray-600 dark:text-google-gray-500">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
