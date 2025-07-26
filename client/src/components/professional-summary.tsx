import { User } from "lucide-react";

export default function ProfessionalSummary() {
  return (
    <section className="mb-12 print-break">
      <div className="bg-google-gray-50 dark:bg-google-gray-100 rounded-2xl p-8 shadow-material hover:shadow-material-hover transition-all duration-200 hover:-translate-y-1">
        <h2 className="text-2xl font-semibold text-google-blue dark:text-google-blue mb-4 flex items-center gap-3">
          <User className="h-6 w-6 text-google-blue dark:text-google-blue" />
          Professional Summary
        </h2>
        <p className="text-lg leading-relaxed text-google-gray-700 dark:text-google-gray-600">
          A passionate and detail-oriented BS Artificial Intelligence student with dual interests in AI and Cybersecurity. Google-certified Ethical Hacker with hands-on experience in NLP and penetration testing. Skilled in developing real-world tech solutions, with a strong foundation in programming, systems thinking, and ethical problem-solving.
        </p>
      </div>
    </section>
  );
}
