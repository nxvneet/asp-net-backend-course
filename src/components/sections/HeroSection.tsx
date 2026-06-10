import { ArrowRight, Play, Database, Server, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-32 lg:pt-36 lg:pb-40">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
      <div className="container relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-8 items-center">
          
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground mb-6">
                Master Frontend to <span className="text-primary">ASP.NET</span> Integration
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Learn how to seamlessly connect modern JavaScript frameworks like React with robust ASP.NET Core backends. The ultimate interactive guide and interview prep tool for full-stack developers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-xl font-semibold group" onClick={() => scrollToSection("api-fundamentals")}>
                  Start Course
                  <Play className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-xl font-semibold group" onClick={() => scrollToSection("learning-path")}>
                  View Roadmap
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-[500px]"
          >
            <div className="relative rounded-2xl border bg-card/50 backdrop-blur-sm p-8 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10" />
              
              <div className="relative flex flex-col gap-8">
                {/* Frontend Layer */}
                <div className="flex justify-center">
                  <div className="flex items-center gap-3 bg-white dark:bg-slate-800 rounded-xl px-6 py-4 shadow-sm border animate-bounce-slow">
                    <Globe className="h-6 w-6 text-cyan-500" />
                    <span className="font-semibold">React Frontend</span>
                  </div>
                </div>

                {/* API Arrow */}
                <div className="flex justify-center -my-4 relative z-10">
                  <div className="w-1 h-12 bg-gradient-to-b from-cyan-500 to-primary rounded-full relative overflow-hidden">
                     <motion.div 
                        className="absolute top-0 left-0 w-full h-1/2 bg-white/80 dark:bg-white/50"
                        animate={{ y: ["0%", "200%"] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                     />
                  </div>
                </div>

                {/* Backend Layer */}
                <div className="flex justify-center">
                  <div className="flex items-center gap-3 bg-white dark:bg-slate-800 rounded-xl px-6 py-4 shadow-sm border relative z-20">
                    <Server className="h-6 w-6 text-primary" />
                    <span className="font-semibold">ASP.NET Core API</span>
                  </div>
                </div>

                {/* DB Arrow */}
                <div className="flex justify-center -my-4 relative z-10">
                  <div className="w-1 h-12 bg-gradient-to-b from-primary to-emerald-500 rounded-full relative overflow-hidden">
                    <motion.div 
                        className="absolute top-0 left-0 w-full h-1/2 bg-white/80 dark:bg-white/50"
                        animate={{ y: ["0%", "200%"] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0.5 }}
                     />
                  </div>
                </div>

                {/* Database Layer */}
                <div className="flex justify-center">
                  <div className="flex items-center gap-3 bg-white dark:bg-slate-800 rounded-xl px-6 py-4 shadow-sm border">
                    <Database className="h-6 w-6 text-emerald-500" />
                    <span className="font-semibold">SQL Server (EF Core)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative blurs */}
            <div className="absolute -left-12 top-1/4 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -right-12 bottom-1/4 h-32 w-32 rounded-full bg-secondary/20 blur-3xl" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
