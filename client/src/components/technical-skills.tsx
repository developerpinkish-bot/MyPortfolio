import { Code, Bot, Brain, Languages, Shield, BarChart3, Users, Lightbulb } from "lucide-react";

export default function TechnicalSkills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C++", "Python"],
      color: "google-blue",
      bgColor: "bg-google-blue"
    },
    {
      title: "Platforms & Tools", 
      skills: ["Linux", "GitHub", "Jupyter", "Wireshark"],
      color: "google-green",
      bgColor: "bg-google-green"
    }
  ];

  const technologies = [
    { name: "Machine Learning", icon: Bot, color: "google-red" },
    { name: "Deep Learning", icon: Brain, color: "google-red" },
    { name: "Natural Language Processing", icon: Languages, color: "google-red" },
    { name: "Network Security & Penetration Testing", icon: Shield, color: "google-red" },
    { name: "Data Analysis & Visualization", icon: BarChart3, color: "google-red" },
    { name: "Ethical Hacking (Google Certified)", icon: Shield, color: "google-red" }
  ];

  const softSkills = [
    { name: "Communication & Team Leadership", icon: Users, color: "google-yellow" },
    { name: "Problem Solving", icon: Lightbulb, color: "google-yellow" }
  ];

  return (
    <section className="print-break">
      <h2 className="text-2xl font-semibold text-google-gray-900 mb-6 flex items-center gap-2">
        <Code className="h-6 w-6 text-google-blue" />
        Technical Skills
      </h2>
      
      <div className="bg-white rounded-xl shadow-material p-6 hover:shadow-material-hover transition-all duration-200 hover:-translate-y-1">
        <div className="space-y-6">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h4 className="font-semibold text-google-gray-800 mb-3">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className={`${category.bgColor} text-white px-3 py-1 rounded-full text-sm hover:opacity-90 transition-opacity cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
          
          <div>
            <h4 className="font-semibold text-google-gray-800 mb-3">Technologies & Frameworks</h4>
            <div className="space-y-2">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center gap-3 hover:bg-google-gray-50 p-2 rounded-lg transition-colors">
                  <tech.icon className={`h-4 w-4 text-${tech.color}`} />
                  <span className="text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-google-gray-800 mb-3">Soft Skills</h4>
            <div className="space-y-2">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3 hover:bg-google-gray-50 p-2 rounded-lg transition-colors">
                  <skill.icon className={`h-4 w-4 text-${skill.color}`} />
                  <span className="text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
