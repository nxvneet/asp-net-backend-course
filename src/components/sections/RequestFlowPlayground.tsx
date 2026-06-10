import { useState } from "react"
import { motion } from "framer-motion"
import { Play, Check, Server, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export function RequestFlowPlayground() {
  const [requestState, setRequestState] = useState<"idle" | "sending" | "processing" | "returning" | "completed">("idle")

  const triggerRequest = () => {
    if (requestState !== "idle" && requestState !== "completed") return
    setRequestState("sending")
    
    setTimeout(() => setRequestState("processing"), 1000)
    setTimeout(() => setRequestState("returning"), 2000)
    setTimeout(() => setRequestState("completed"), 3000)
  }

  const reset = () => setRequestState("idle")

  return (
    <section className="py-20 bg-background">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Live Request Flow</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience what happens under the hood when a React app calls an ASP.NET API.
          </p>
        </div>

        <div className="bg-muted/30 rounded-2xl border p-4 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center min-h-[400px]">
            
            {/* Frontend Panel */}
            <div className={`relative bg-card rounded-xl border p-6 shadow-sm transition-all duration-300 ${requestState === "completed" ? "ring-2 ring-emerald-500" : ""}`}>
              <div className="flex items-center gap-2 mb-4 text-sm font-semibold">
                <Globe className="h-5 w-5 text-cyan-500" /> React Client
              </div>
              <div className="bg-slate-900 rounded-lg p-4 font-mono text-xs text-cyan-400 mb-6">
                <span className="text-purple-400">const</span> fetchUser = <span className="text-purple-400">async</span> () {"=> {"}<br/>
                &nbsp;&nbsp;<span className="text-purple-400">const</span> res = <span className="text-purple-400">await</span> fetch(<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">'/api/users/1'</span><br/>
                &nbsp;&nbsp;);<br/>
                &nbsp;&nbsp;<span className="text-purple-400">const</span> data = <span className="text-purple-400">await</span> res.json();<br/>
                &nbsp;&nbsp;setUser(data);<br/>
                {"}"}
              </div>
              <div className="flex justify-between items-center">
                <Button 
                  onClick={triggerRequest} 
                  disabled={requestState !== "idle" && requestState !== "completed"}
                  className="w-full"
                >
                  {requestState === "idle" || requestState === "completed" ? (
                    <><Play className="h-4 w-4 mr-2" /> Send Request</>
                  ) : (
                    <span className="animate-pulse">Processing...</span>
                  )}
                </Button>
              </div>
            </div>

            {/* Network Panel (Middle) */}
            <div className="relative h-[200px] lg:h-full flex flex-col items-center justify-center">
              {/* Request Path */}
              <div className="absolute inset-x-0 top-1/3 h-0.5 bg-muted-foreground/20 overflow-hidden">
                {requestState === "sending" && (
                  <motion.div 
                    initial={{ left: "-10%" }}
                    animate={{ left: "100%" }}
                    transition={{ duration: 1, ease: "linear" }}
                    className="absolute top-0 h-full w-[20%] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
                  />
                )}
              </div>
              <div className="absolute top-1/3 -translate-y-6 text-xs text-muted-foreground font-mono">
                GET /api/users/1
              </div>

              {/* Status Badge */}
              {requestState !== "idle" && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-background border rounded-full px-4 py-1.5 shadow-sm text-sm font-semibold z-10 my-auto"
                >
                  {requestState === "sending" && <span className="text-cyan-500">Sending Request...</span>}
                  {requestState === "processing" && <span className="text-primary">Backend Processing...</span>}
                  {requestState === "returning" && <span className="text-emerald-500">Returning JSON...</span>}
                  {requestState === "completed" && <span className="text-emerald-500 flex items-center gap-1"><Check className="h-4 w-4" /> 200 OK</span>}
                </motion.div>
              )}

              {/* Response Path */}
              <div className="absolute inset-x-0 bottom-1/3 h-0.5 bg-muted-foreground/20 overflow-hidden">
                {requestState === "returning" && (
                   <motion.div 
                    initial={{ right: "-10%" }}
                    animate={{ right: "100%" }}
                    transition={{ duration: 1, ease: "linear" }}
                    className="absolute top-0 h-full w-[20%] bg-gradient-to-l from-transparent via-emerald-500 to-transparent"
                  />
                )}
              </div>
              <div className="absolute bottom-1/3 translate-y-2 text-xs text-muted-foreground font-mono">
                {"{ id: 1, name: 'John' }"}
              </div>
            </div>

            {/* Backend Panel */}
            <div className={`relative bg-card rounded-xl border p-6 shadow-sm transition-all duration-300 ${requestState === "processing" ? "ring-2 ring-primary" : ""}`}>
              <div className="flex items-center gap-2 mb-4 text-sm font-semibold">
                <Server className="h-5 w-5 text-primary" /> ASP.NET API
              </div>
              <div className="bg-slate-900 rounded-lg p-4 font-mono text-xs text-blue-300 mb-6 relative overflow-hidden">
                <span className="text-emerald-400">{"[HttpGet(\"{id}\")]"}</span><br/>
                <span className="text-purple-400">public</span> IActionResult GetUser(<span className="text-purple-400">int</span> id)<br/>
                {"{"}<br/>
                &nbsp;&nbsp;<span className="text-purple-400">var</span> user = _db.Users.Find(id);<br/>
                &nbsp;&nbsp;<span className="text-purple-400">return</span> Ok(user);<br/>
                {"}"}
                
                {requestState === "processing" && (
                  <motion.div 
                    initial={{ top: 0, opacity: 0.5 }}
                    animate={{ top: "100%", opacity: 0 }}
                    transition={{ duration: 1, ease: "linear" }}
                    className="absolute left-0 w-full h-8 bg-gradient-to-b from-transparent to-primary/30"
                  />
                )}
              </div>
              
              {requestState === "completed" && (
                <div className="flex justify-end">
                  <Button variant="ghost" size="sm" onClick={reset}>Reset Flow</Button>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
