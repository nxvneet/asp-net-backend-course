import { motion } from "framer-motion"
import { Globe, ArrowRightLeft, Server, Database, Code, Lock, Key, Layers, FileJson } from "lucide-react"

export function ArchitectureVisualization() {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">The Complete Picture</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Understanding the architecture is key. See how data flows securely from the user's browser, through the network, into your ASP.NET backend, and down to the database.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-4 relative z-10">
            
            {/* Frontend Layer */}
            <div className="bg-card border rounded-2xl p-6 shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl flex items-center justify-center mb-4 border border-cyan-200 dark:border-cyan-800">
                <Globe className="text-cyan-600 dark:text-cyan-400 h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Frontend Layer</h3>
              <p className="text-sm text-muted-foreground mb-6">Client-side rendering & user interactions.</p>
              
              <div className="w-full space-y-2">
                <div className="bg-muted px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 border">
                  <Code className="h-4 w-4" /> React / SPA
                </div>
                <div className="bg-muted px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 border">
                  Axios / Fetch API
                </div>
                <div className="bg-muted px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 border">
                  State Management
                </div>
              </div>
            </div>

            {/* Communication Layer */}
            <div className="bg-card border rounded-2xl p-6 shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-4 border border-purple-200 dark:border-purple-800">
                <ArrowRightLeft className="text-purple-600 dark:text-purple-400 h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Communication</h3>
              <p className="text-sm text-muted-foreground mb-6">The network bridge connecting client and server.</p>
              
              <div className="w-full space-y-2">
                <div className="bg-muted px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 border">
                  <Lock className="h-4 w-4" /> HTTPS (TLS)
                </div>
                <div className="bg-muted px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 border">
                  <FileJson className="h-4 w-4" /> JSON Payloads
                </div>
                <div className="bg-muted px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 border">
                  <Key className="h-4 w-4" /> JWT Tokens
                </div>
              </div>
            </div>

            {/* Backend Layer */}
            <div className="bg-card border rounded-2xl p-6 shadow-sm flex flex-col items-center text-center relative">
              <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 border border-blue-200 dark:border-blue-800">
                <Server className="text-blue-600 dark:text-blue-400 h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Backend Layer</h3>
              <p className="text-sm text-muted-foreground mb-6">ASP.NET Core processing logic and rules.</p>
              
              <div className="w-full space-y-2">
                <div className="bg-muted px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 border">
                  API Controllers
                </div>
                <div className="bg-muted px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 border">
                  <Layers className="h-4 w-4" /> Service Layer
                </div>
                <div className="bg-muted px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 border">
                  Middleware Pipeline
                </div>
              </div>
            </div>

            {/* Data Layer */}
            <div className="bg-card border rounded-2xl p-6 shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center mb-4 border border-emerald-200 dark:border-emerald-800">
                <Database className="text-emerald-600 dark:text-emerald-400 h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Data Layer</h3>
              <p className="text-sm text-muted-foreground mb-6">Persistent storage and data access.</p>
              
              <div className="w-full space-y-2">
                <div className="bg-muted px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 border">
                  Entity Framework Core
                </div>
                <div className="bg-muted px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 border">
                  Repositories
                </div>
                <div className="bg-muted px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 border">
                  SQL Server
                </div>
              </div>
            </div>

          </div>

          {/* Flow Lines (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-[12.5%] right-[12.5%] h-0.5 bg-muted-foreground/20 -translate-y-1/2 z-0">
             <motion.div 
                className="absolute top-0 left-0 h-full w-[20%] bg-gradient-to-r from-transparent via-primary to-transparent"
                animate={{ left: ["0%", "100%"] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
             />
             <motion.div 
                className="absolute top-0 left-0 h-full w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
                animate={{ left: ["100%", "0%"] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "linear", delay: 1.25 }}
             />
          </div>

        </div>
      </div>
    </section>
  )
}
