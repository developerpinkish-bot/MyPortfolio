import CVHeader from "@/components/cv-header";
import ProfessionalSummary from "@/components/professional-summary";
import WorkExperience from "@/components/work-experience";
import Education from "@/components/education";
import TechnicalSkills from "@/components/technical-skills";
import Projects from "@/components/projects";
import Certifications from "@/components/certifications";
import CVFooter from "@/components/cv-footer";

export default function CVTemplate() {
  return (
    <div className="font-google bg-white text-google-gray-900 leading-relaxed min-h-screen">
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
