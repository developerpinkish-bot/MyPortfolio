import { Code, Bot, Brain, Languages, Shield, BarChart3, Users, Lightbulb } from "lucide-react";

export default function TechnicalSkills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C++", "Python", "SQL", "TypeScript", "NodeJS", "Tailwind CSS", "React", "Markdown"],
      color: "google-blue",
      bgColor: "#4285F4" // custom color used directly
    },
    {
      title: "Platforms & Tools",
      skills: ["Kali Linux", "GitHub Codespace", "Anaconda", "Wireshark", "Azure", "Docker"],
      color: "google-green",
      bgColor: "#34A853"
    }
  ];

  const technologies = [
    { name: "Machine Learning", icon: Bot, color: "#EA4335" },
    { name: "Deep Learning", icon: Brain, color: "#EA4335" },
    { name: "Natural Language Processing", icon: Languages, color: "#EA4335" },
    { name: "Network Security & Penetration Testing", icon: Shield, color: "#EA4335" },
    { name: "Data Analysis & Visualization", icon: BarChart3, color: "#EA4335" },
    { name: "Ethical Hacking (Google Certified)", icon: Shield, color: "#EA4335" }
  ];

  const softSkills = [
    { name: "Communication & Team Leadership", icon: Users, color: "#FBBC05" },
    { name: "Problem Solving", icon: Lightbulb, color: "#FBBC05" }
  ];

  return (
    <section className="print-break">
      <h2 className="text-2xl font-semibold text-google-gray-900 dark:text-[#F1F3F4] mb-6 flex items-center gap-2">
        <Code className="h-6 w-6 text-google-blue dark:text-[#8AB4F8]" />
        Technical Skills
      </h2>

      <div className="bg-white dark:bg-[#202124] rounded-xl shadow-material p-6 hover:shadow-material-hover transition-all duration-200 hover:-translate-y-1">
        <div className="space-y-6">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h4 className="font-semibold text-google-gray-800 dark:text-[#E8EAED] mb-3">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-white px-3 py-1 rounded-full text-sm hover:opacity-90 transition-opacity cursor-default"
                    style={{ backgroundColor: category.bgColor }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h4 className="font-semibold text-google-gray-800 dark:text-[#E8EAED] mb-3">
              Technologies & Frameworks
            </h4>
            <div className="space-y-0">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 hover:bg-google-gray-50 dark:hover:bg-[#3C4043] p-2 rounded-lg transition-colors"
                >
                  <tech.icon className="h-4 w-4" style={{ color: tech.color }} />
                  <span className="text-sm text-google-gray-700 dark:text-[#959696]">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-google-gray-800 dark:text-[#E8EAED] mb-3">
              Soft Skills
            </h4>
            <div className="space-y-0">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 hover:bg-google-gray-50 dark:hover:bg-[#3C4043] p-2 rounded-lg transition-colors"
                >
                  <skill.icon className="h-4 w-4" style={{ color: skill.color }} />
                  <span className="text-sm text-google-gray-700 dark:text-[#959696]">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
