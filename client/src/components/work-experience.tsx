import { Briefcase, CheckCircle, Shield } from "lucide-react";

export default function WorkExperience() {
  const experiences = [
    {
      title: "NLP Intern",
      company: "Elevvo Tech",
      period: "Present",
      color: "google-green",
      icon: CheckCircle,
      achievements: [
        "Built and fine-tuned NLP models for real-world text classification tasks",
        "Preprocessed large text corpora using NLTK and spaCy",
        "Collaborated with senior data scientists for model optimization and evaluation"
      ]
    },
    {
      title: "Cybersecurity Intern",
      company: "CodeAlpha",
      period: "Present",
      color: "google-red",
      icon: Shield,
      achievements: [
        "Performed vulnerability assessments and basic penetration testing",
        "Worked with Linux-based security tools and simulated attack environments",
        "Gained experience in firewall configuration, intrusion detection, and ethical hacking best practices"
      ]
    }
  ];

  return (
    <section className="print-break">
      <h2 className="text-3xl font-semibold text-google-gray-900 mb-8 flex items-center gap-3">
        <Briefcase className="h-8 w-8 text-google-green" />
        Work Experience
      </h2>
      
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <div 
            key={index}
            className={`bg-white rounded-xl shadow-material p-6 border-l-4 border-${experience.color} hover:shadow-material-hover transition-all duration-200 hover:-translate-y-1`}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-google-gray-900">
                  {experience.title}
                </h3>
                <p className="text-google-blue font-medium">
                  {experience.company}
                </p>
              </div>
              <span className={`bg-${experience.color} text-white px-3 py-1 rounded-full text-sm font-medium mt-2 sm:mt-0 self-start`}>
                {experience.period}
              </span>
            </div>
            <ul className="space-y-2 text-google-gray-700">
              {experience.achievements.map((achievement, achievementIndex) => (
                <li key={achievementIndex} className="flex items-start gap-3">
                  <experience.icon className={`h-4 w-4 text-${experience.color} mt-1 flex-shrink-0`} />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
