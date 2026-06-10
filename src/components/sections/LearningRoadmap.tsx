import React, { useState } from "react"
import { CheckCircle2, Circle, Lock, PlayCircle, BookOpen, Code, Lightbulb } from "lucide-react"
import {
  ClientServerVisual,
  HttpFundamentalsVisual,
  RestApiVisual,
  AspNetWebApiVisual,
  FrontendApiVisual,
  AuthVisual,
  ErrorHandlingVisual,
  StateManagementVisual,
  FileUploadVisual,
  RealWorldProjectVisual,
  InterviewPrepVisual
} from "./RoadmapVisuals"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

type ModuleStatus = "completed" | "in-progress" | "locked"
type ModuleLevel = "Beginner" | "Intermediate" | "Advanced" | "All Levels"

interface Module {
  id: number
  title: string
  status: ModuleStatus
  description: string
  level: ModuleLevel
  content: {
    videoDuration: string
    readingTime: string
    overview: string
    keyTakeaways: string[]
    codeSnippet?: string
    visual: React.ReactNode
  }
}

const modules: Module[] = [
  { 
    id: 1, 
    title: "What is Client-Server Architecture", 
    status: "completed", 
    description: "Understand the fundamentals of how clients and servers communicate.", 
    level: "Beginner",
    content: {
      videoDuration: "10 mins",
      readingTime: "5 mins",
      overview: "The client-server model is a distributed application structure that partitions tasks or workloads between the providers of a resource or service, called servers, and service requesters, called clients. In web development, your React app is the client, and ASP.NET Core is the server.",
      keyTakeaways: [
        "Clients initiate communication by sending requests.",
        "Servers wait for requests, process them, and return responses.",
        "This separation of concerns allows the frontend and backend to scale and evolve independently."
      ],
      visual: <ClientServerVisual />
    }
  },
  { 
    id: 2, 
    title: "HTTP Fundamentals", 
    status: "completed", 
    description: "Deep dive into verbs, status codes, and headers.", 
    level: "Beginner",
    content: {
      videoDuration: "15 mins",
      readingTime: "8 mins",
      overview: "HTTP (Hypertext Transfer Protocol) is the foundation of data communication for the World Wide Web. Understanding its core concepts is crucial for integrating frontends and backends.",
      keyTakeaways: [
        "Verbs (GET, POST, PUT, DELETE) define the action to be performed.",
        "Status Codes (200, 400, 404, 500) indicate the result of the request.",
        "Headers provide metadata about the request or response (e.g., Content-Type, Authorization)."
      ],
      visual: <HttpFundamentalsVisual />
    }
  },
  { 
    id: 3, 
    title: "REST APIs", 
    status: "in-progress", 
    description: "Design principles and conventions of RESTful services.", 
    level: "Beginner",
    content: {
      videoDuration: "20 mins",
      readingTime: "10 mins",
      overview: "Representational State Transfer (REST) is a software architectural style that defines a set of constraints to be used for creating Web services. RESTful APIs allow systems to communicate over HTTP in a standard way.",
      keyTakeaways: [
        "Stateless interactions: Each request contains all info needed.",
        "Resource-based URLs (e.g., /api/users instead of /api/getUsers).",
        "Standard use of HTTP methods for CRUD operations."
      ],
      visual: <RestApiVisual />
    }
  },
  { 
    id: 4, 
    title: "ASP.NET Core Web APIs", 
    status: "locked", 
    description: "Building robust backend endpoints using controllers and Minimal APIs.", 
    level: "Intermediate",
    content: {
      videoDuration: "25 mins",
      readingTime: "12 mins",
      overview: "ASP.NET Core provides powerful tools for building web APIs. You can use MVC-style Controllers or the newer, lightweight Minimal APIs to handle incoming HTTP requests.",
      keyTakeaways: [
        "Controllers group related endpoints and use attribute routing.",
        "Dependency Injection is built-in and heavily used.",
        "Model binding automatically maps HTTP request data to C# objects."
      ],
      codeSnippet: `[ApiController]\n[Route("api/[controller]")]\npublic class UsersController : ControllerBase {\n    [HttpGet]\n    public IActionResult Get() => Ok(new { Name = "John" });\n}`,
      visual: <AspNetWebApiVisual />
    }
  },
  { 
    id: 5, 
    title: "Frontend API Calls", 
    status: "locked", 
    description: "Using fetch() and axios in React to consume your endpoints.", 
    level: "Intermediate",
    content: {
      videoDuration: "18 mins",
      readingTime: "10 mins",
      overview: "To integrate your React app with ASP.NET, you need to make HTTP requests from the browser. 'fetch' is the native browser API, while 'axios' is a popular third-party library that simplifies request configuration and error handling.",
      keyTakeaways: [
        "Always handle loading and error states in React.",
        "Use async/await for cleaner asynchronous code.",
        "Axios interceptors are great for attaching auth tokens globally."
      ],
      codeSnippet: `const fetchUsers = async () => {\n  try {\n    const response = await axios.get('/api/users');\n    setUsers(response.data);\n  } catch (error) {\n    console.error(error);\n  }\n};`,
      visual: <FrontendApiVisual />
    }
  },
  { id: 6, title: "Authentication & Authorization", status: "locked", description: "Implementing JWTs, identity, and protecting routes.", level: "Advanced", content: { videoDuration: "30 mins", readingTime: "15 mins", overview: "Security is paramount. Learn how to issue JSON Web Tokens (JWT) in ASP.NET Core and securely store and attach them to requests in React.", keyTakeaways: ["JWTs contain claims about the user.", "Use [Authorize] attributes in ASP.NET Core.", "Store tokens securely (HTTP-only cookies preferred)."], visual: <AuthVisual /> } },
  { id: 7, title: "Error Handling", status: "locked", description: "Global exception handlers, ProblemDetails, and friendly UI messages.", level: "Intermediate", content: { videoDuration: "15 mins", readingTime: "8 mins", overview: "When things go wrong, the API must return structured errors. ASP.NET Core's ProblemDetails is the standard way to return HTTP errors.", keyTakeaways: ["Use global exception middleware.", "Return standard ProblemDetails JSON.", "Parse error messages in React to show user-friendly toasts."], visual: <ErrorHandlingVisual /> } },
  { id: 8, title: "State Management", status: "locked", description: "Syncing backend data with React Context and Redux/Zustand.", level: "Advanced", content: { videoDuration: "20 mins", readingTime: "12 mins", overview: "Once data is fetched from the API, it needs to be stored and managed in the React application.", keyTakeaways: ["Use React Query or SWR for server state.", "Use Zustand or Redux for complex client state.", "Keep client state synchronized with the backend."], visual: <StateManagementVisual /> } },
  { id: 9, title: "File Uploads", status: "locked", description: "Handling multipart/form-data from React to ASP.NET controllers.", level: "Advanced", content: { videoDuration: "25 mins", readingTime: "10 mins", overview: "Uploading files requires specific HTTP headers and processing on both sides.", keyTakeaways: ["Use FormData object in React.", "Set Content-Type to multipart/form-data.", "Use IFormFile in ASP.NET Core controller actions."], visual: <FileUploadVisual /> } },
  { id: 10, title: "Real-World Project", status: "locked", description: "Putting it all together: Building a full Employee Management System.", level: "Advanced", content: { videoDuration: "45 mins", readingTime: "20 mins", overview: "Apply all the concepts learned in a comprehensive project.", keyTakeaways: ["Architecture planning.", "End-to-end integration.", "Deployment considerations."], visual: <RealWorldProjectVisual /> } },
  { id: 11, title: "Interview Questions", status: "locked", description: "Commonly asked full-stack integration questions.", level: "All Levels", content: { videoDuration: "0 mins", readingTime: "30 mins", overview: "Review this module to prepare for your next technical interview.", keyTakeaways: ["Understand the 'Why' behind architectural choices.", "Be ready to explain CORS and Auth flows.", "Practice writing clean controller and component code."], visual: <InterviewPrepVisual /> } },
]

export function LearningRoadmap() {
  const [selectedModule, setSelectedModule] = useState<Module | null>(null)
  
  const completedCount = modules.filter(m => m.status === "completed").length
  const progressPercentage = (completedCount / modules.length) * 100

  return (
    <section id="learning-path" className="py-20 bg-muted/30">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Your Learning Journey</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Follow this structured roadmap to go from beginner to advanced full-stack integration master. Click on any module to view the learning materials.
          </p>
          
          <div className="bg-card border rounded-xl p-6 shadow-sm mb-12 max-w-xl mx-auto">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">Course Progress</span>
              <span className="text-primary font-bold">{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
            <p className="text-sm text-muted-foreground mt-3 text-left">
              {completedCount} of {modules.length} modules completed
            </p>
          </div>
        </div>

        <div className="relative border-l-2 border-muted ml-4 md:ml-8 space-y-8 pb-8">
          {modules.map((mod) => {
            const isCompleted = mod.status === "completed"
            const isInProgress = mod.status === "in-progress"
            const isLocked = mod.status === "locked"

            return (
              <div key={mod.id} className="relative pl-8 md:pl-12 group">
                <div className={`absolute -left-[17px] top-4 rounded-full border-4 border-background bg-background 
                  ${isCompleted ? "text-success" : isInProgress ? "text-primary ring-4 ring-primary/20" : "text-muted"}`}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="h-6 w-6 fill-success/20" />
                  ) : isInProgress ? (
                    <Circle className="h-6 w-6 fill-primary/20" />
                  ) : (
                    <Lock className="h-6 w-6 p-1" />
                  )}
                </div>

                <Card 
                  className={`transition-all duration-200 cursor-pointer ${isInProgress ? "border-primary shadow-md scale-[1.02]" : isLocked ? "opacity-75 hover:opacity-100" : "hover:shadow-md hover:-translate-y-1"}`}
                  onClick={() => setSelectedModule(mod)}
                >
                  <CardHeader className="pb-3 flex flex-col md:flex-row md:items-start justify-between space-y-4 md:space-y-0">
                    <div>
                      <CardTitle className="text-xl mb-1 flex items-center gap-2 group-hover:text-primary transition-colors">
                        {mod.title}
                      </CardTitle>
                      <p className="text-muted-foreground">{mod.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={isCompleted ? "default" : isInProgress ? "secondary" : "outline"}
                        className={isCompleted ? "bg-success hover:bg-success/90" : ""}
                      >
                        {mod.level}
                      </Badge>
                      <Button variant="ghost" size="sm" className="hidden md:flex ml-2" onClick={(e) => { e.stopPropagation(); setSelectedModule(mod); }}>
                        View Material
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            )
          })}
        </div>
      </div>

      <Sheet open={!!selectedModule} onOpenChange={(open) => !open && setSelectedModule(null)}>
        <SheetContent className="w-full sm:max-w-xl overflow-y-auto">
          {selectedModule && (
            <>
              <SheetHeader className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant={selectedModule.status === "completed" ? "default" : selectedModule.status === "in-progress" ? "secondary" : "outline"}
                      className={selectedModule.status === "completed" ? "bg-success hover:bg-success/90" : ""}
                    >
                    {selectedModule.status.toUpperCase()}
                  </Badge>
                  <Badge variant="outline">{selectedModule.level}</Badge>
                </div>
                <SheetTitle className="text-2xl">{selectedModule.title}</SheetTitle>
                <SheetDescription className="text-base">
                  {selectedModule.description}
                </SheetDescription>
              </SheetHeader>

              <div className="space-y-6">
                <div className="flex flex-wrap gap-3 mb-2">
                  <Badge variant="outline" className="flex items-center gap-1.5 font-medium text-foreground py-1 px-3 border-primary/20 bg-primary/5 cursor-default">
                    <BookOpen className="w-4 h-4 text-primary" /> 
                    Estimated Read Time: {selectedModule.content.readingTime}
                  </Badge>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-amber-500" /> Overview
                  </h4>
                  <div className="mb-4">
                    {selectedModule.content.visual}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedModule.content.overview}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">Key Takeaways</h4>
                  <ul className="space-y-2">
                    {selectedModule.content.keyTakeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedModule.content.codeSnippet && (
                  <div>
                    <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <Code className="w-5 h-5 text-blue-500" /> Code Example
                    </h4>
                    <div className="bg-slate-950 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm font-mono text-cyan-400">
                        <code>{selectedModule.content.codeSnippet}</code>
                      </pre>
                    </div>
                  </div>
                )}

                <div className="pt-6 border-t mt-8 flex flex-col sm:flex-row gap-3">
                  <Button className="w-full sm:w-auto" onClick={() => setSelectedModule(null)}>
                    {selectedModule.status === "completed" ? "Review Completed" : "Mark as Complete"}
                  </Button>
                  <Button variant="outline" className="w-full sm:w-auto" onClick={() => setSelectedModule(null)}>
                    Close
                  </Button>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </section>
  )
}
