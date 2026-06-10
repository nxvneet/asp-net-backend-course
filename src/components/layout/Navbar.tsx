import { useEffect, useState } from "react"
import { Search, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Navbar() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-20% 0px -80% 0px" }
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80 // offset for navbar
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  const navLinks = [
    { id: "learning-path", label: "Learning Path" },
    { id: "api-fundamentals", label: "API Fundamentals" },
    { id: "interview-prep", label: "Interview Prep" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <Code2 className="h-6 w-6 text-primary" />
          <span className="hidden font-bold sm:inline-block text-lg">
            ASP.NET Integrator
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`transition-colors hover:text-primary ${activeSection === link.id ? "text-primary font-bold" : "text-muted-foreground"}`}
            >
              {link.label}
            </button>
          ))}
        </nav>
        
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search resources..."
                className="w-full rounded-full bg-muted pl-8 md:w-[200px] lg:w-[300px]"
              />
            </div>
          </div>
          <Button className="rounded-xl" onClick={() => scrollToSection("learning-path")}>
            Start Learning
          </Button>
        </div>
      </div>
    </header>
  )
}
