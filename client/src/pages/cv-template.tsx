import CVHeader from "@/components/cv-header";
import ProfessionalSummary from "@/components/professional-summary";
import WorkExperience from "@/components/work-experience";
import Education from "@/components/education";
import TechnicalSkills from "@/components/technical-skills";
import Projects from "@/components/projects";
import Certifications from "@/components/certifications";
import CVFooter from "@/components/cv-footer";
import { ThemeToggle } from "@/components/theme-toggle";

export default function CVTemplate() {
  return (
    <div className="font-google bg-white dark:bg-google-gray-50 text-google-gray-900 dark:text-google-gray-900 leading-relaxed min-h-screen transition-colors duration-200">
      {/* Theme Toggle - Fixed position for print-free */}
      <div className="fixed top-4 right-4 z-50 no-print">
        <ThemeToggle />
      </div>
      
      <CVHeader />
      
      <main className="max-w-6xl mx-auto px-8 py-12">
        <ProfessionalSummary />
        
        <div className="grid lg:grid-cols-3 gap-12">
          {/* LEFT COLUMN - Primary Content */}
          <div className="lg:col-span-2 space-y-12">
            <WorkExperience />
            <Education />
          </div>

          {/* RIGHT COLUMN - Skills, Projects, Certifications */}
          <div className="space-y-8">
            <TechnicalSkills />
            <Projects />
            <Certifications />
          </div>
        </div>
      </main>

      <CVFooter />
    </div>
  );
}
