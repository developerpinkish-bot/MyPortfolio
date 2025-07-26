import { GraduationCap } from "lucide-react";

export default function Education() {
  const courses = [
    "AI",
    "Machine Learning", 
    "Cybersecurity",
    "Data Structures",
    "Operating Systems"
  ];

  return (
    <section className="print-break">
      <h2 className="text-3xl font-semibold text-google-gray-900 dark:text-google-gray-800 mb-8 flex items-center gap-3">
        <GraduationCap className="h-8 w-8 text-google-yellow dark:text-google-yellow" />
        Education
      </h2>
      
      <div className="bg-white dark:bg-google-gray-100 rounded-xl shadow-material p-6 border-l-4 border-google-yellow hover:shadow-material-hover transition-all duration-200 hover:-translate-y-1">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-google-gray-900 dark:text-google-gray-800">
              Bachelor of Science in Artificial Intelligence
            </h3>
            <p className="text-google-blue dark:text-google-blue font-medium">
              The University of Faisalabad
            </p>
          </div>
          <span className="bg-google-yellow text-google-gray-900 dark:text-google-gray-900 px-3 py-1 rounded-full text-sm font-medium mt-2 sm:mt-0 self-start">
            2023 – 2027
          </span>
        </div>
        
        <div className="mb-4">
          <h4 className="font-semibold text-google-gray-800 dark:text-google-gray-700 mb-2">Leadership Role</h4>
          <p className="text-google-gray-700 dark:text-google-gray-600 mb-2">
            <strong>Vice President, Girls Representative</strong>
          </p>
          <p className="text-google-gray-600 dark:text-google-gray-500">
            Led technical meetups and workshops for women in STEM
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold text-google-gray-800 dark:text-google-gray-700 mb-2">Relevant Coursework</h4>
          <div className="flex flex-wrap gap-2">
            {courses.map((course, index) => (
              <span 
                key={index}
                className="bg-google-gray-100 dark:bg-google-gray-200 text-google-gray-700 dark:text-google-gray-600 px-3 py-1 rounded-full text-sm hover:bg-google-gray-200 dark:hover:bg-google-gray-300 transition-colors"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
