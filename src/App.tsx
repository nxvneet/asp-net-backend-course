import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/sections/HeroSection"
import { LearningRoadmap } from "@/components/sections/LearningRoadmap"
import { ArchitectureVisualization } from "@/components/sections/ArchitectureVisualization"
import { StepByStepTutorial } from "@/components/sections/StepByStepTutorial"
import { RequestFlowPlayground } from "@/components/sections/RequestFlowPlayground"
import { InterviewQuestions } from "@/components/sections/InterviewQuestions"
import { RealProjectWalkthrough } from "@/components/sections/RealProjectWalkthrough"
import { IntegrationChecklist } from "@/components/sections/IntegrationChecklist"
import { FinalInterviewPrep } from "@/components/sections/FinalInterviewPrep"
import { ThemeProvider } from "@/components/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="asp-net-theme">
      <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <LearningRoadmap />
        <ArchitectureVisualization />
        <StepByStepTutorial />
        <RequestFlowPlayground />
        <InterviewQuestions />
        <RealProjectWalkthrough />
        <IntegrationChecklist />
        <FinalInterviewPrep />
      </main>
      <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
