import { Award, Shield, Megaphone } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      title: "Google Cybersecurity Professional Certificate",
      provider: "Google",
      icon: Shield,
      color: "google-red"
    },
    {
      title: "Google Digital Marketing Certificate", 
      provider: "Google",
      icon: Megaphone,
      color: "google-blue"
    }
  ];

  return (
    <section className="print-break">
      <h2 className="text-2xl font-semibold text-google-gray-900 mb-6 flex items-center gap-2">
        <Award className="h-6 w-6 text-google-yellow" />
        Certifications
      </h2>
      
      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow-material p-4 border border-google-gray-200 hover:shadow-material-hover transition-all duration-200 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3">
              <cert.icon className={`h-6 w-6 text-${cert.color}`} />
              <div>
                <h4 className="font-semibold text-google-gray-900">
                  {cert.title}
                </h4>
                <p className="text-sm text-google-gray-600">
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
