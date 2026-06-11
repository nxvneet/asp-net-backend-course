import React, { useState } from "react"
import { CheckCircle2, Circle, Lock, BookOpen, Code, Lightbulb, BrainCircuit, Target, MessageSquare } from "lucide-react"
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

type ModuleStatus = "completed" | "in-progress" | "locked"
type ModuleLevel = "Beginner" | "Intermediate" | "Advanced" | "All Levels"

interface Module {
  id: number
  title: string
  status: ModuleStatus
  description: string
  level: ModuleLevel
  content: {
    readingTime: string
    overview: string
    keyTakeaways: string[]
    codeSnippet?: string
    visual: React.ReactNode
    interviewDeepDive: {
      underTheHood: string
      interviewQuestion: string
      seniorAnswer: string
    }
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
      readingTime: "5 mins",
      overview: "The client-server model partitions workloads between resource providers (servers) and service requesters (clients). In modern web apps, the React frontend acts as the client requesting data, while the ASP.NET Core backend processes business logic and returns JSON.",
      keyTakeaways: [
        "Clients initiate communication by sending requests.",
        "Servers wait for requests, process them, and return responses.",
        "This separation of concerns allows the frontend and backend to scale and evolve independently."
      ],
      visual: <ClientServerVisual />,
      interviewDeepDive: {
        underTheHood: "In an enterprise architecture, 'Client-Server' isn't just a 1-to-1 relationship. The React client often talks to a Reverse Proxy or API Gateway (like Nginx or Azure API Management), which then load-balances requests across multiple stateless ASP.NET Core instances. Keeping the backend stateless is crucial for horizontal scaling.",
        interviewQuestion: "What is the difference between stateful and stateless architectures, and why do we prefer stateless for REST APIs?",
        seniorAnswer: "Stateful architectures store client session data on the server, meaning subsequent requests from a client must be routed to the exact same server (sticky sessions), which hinders scaling. Stateless architectures, like REST, require the client to send all necessary context (like a JWT token) with every request. This allows any ASP.NET Core instance behind a load balancer to handle the request independently, enabling seamless horizontal scaling and better fault tolerance."
      }
    }
  },
  { 
    id: 2, 
    title: "HTTP Fundamentals", 
    status: "completed", 
    description: "Deep dive into verbs, status codes, and headers.", 
    level: "Beginner",
    content: {
      readingTime: "8 mins",
      overview: "HTTP is the foundation of web communication. A thorough understanding of HTTP methods (verbs) for intent, status codes for results, and headers for metadata (like Authentication or Content-Type) is essential for integrating systems.",
      keyTakeaways: [
        "Verbs (GET, POST, PUT, DELETE) define the action.",
        "Status Codes (200, 400, 404, 500) indicate the outcome.",
        "Headers provide metadata (e.g., Content-Type, Authorization)."
      ],
      visual: <HttpFundamentalsVisual />,
      interviewDeepDive: {
        underTheHood: "While HTTP/1.1 relies on a text-based protocol that suffers from Head-of-Line blocking (where one slow request blocks others on the same connection), modern ASP.NET Core apps over HTTPS automatically use HTTP/2. HTTP/2 uses a binary framing layer to multiplex multiple requests over a single TCP connection, drastically improving performance for React apps fetching multiple resources.",
        interviewQuestion: "How does CORS work, and why is it necessary when connecting a React app to an ASP.NET API?",
        seniorAnswer: "Cross-Origin Resource Sharing (CORS) is a security mechanism enforced by the browser, not the API. If a React app running on 'localhost:3000' makes an AJAX request to an API on 'localhost:5000', the browser blocks it by default to prevent cross-site request forgery. To fix this, the ASP.NET API must explicitly send an 'Access-Control-Allow-Origin' header. For complex requests (like POST with JSON), the browser first sends an HTTP OPTIONS 'preflight' request to verify the server permits the actual request."
      }
    }
  },
  { 
    id: 3, 
    title: "REST APIs", 
    status: "in-progress", 
    description: "Design principles and conventions of RESTful services.", 
    level: "Beginner",
    content: {
      readingTime: "10 mins",
      overview: "Representational State Transfer (REST) defines architectural constraints for creating scalable web services. It emphasizes resource-based URLs, stateless communication, and the standard use of HTTP methods to perform CRUD operations.",
      keyTakeaways: [
        "Stateless interactions: Each request contains all info needed.",
        "Resource-based URLs (e.g., /api/users).",
        "Standard use of HTTP methods mapping to CRUD."
      ],
      visual: <RestApiVisual />,
      interviewDeepDive: {
        underTheHood: "True REST (Richardson Maturity Model Level 3) involves HATEOAS (Hypermedia as the Engine of Application State), where the API returns navigational links alongside data. However, most modern 'REST' APIs are only Level 2, meaning they use verbs and resource URIs correctly but leave application state logic (routing) to the React frontend.",
        interviewQuestion: "What is the difference between PUT and PATCH methods?",
        seniorAnswer: "PUT is idempotent and is used to replace an entire resource. If a field is omitted in a PUT request, it should theoretically be set to null or its default. PATCH is used for partial updates, applying only the changes specified in the payload (often using standard formats like JSON Patch). In high-performance ASP.NET APIs, PATCH is preferred for large objects to avoid sending unnecessary data over the wire."
      }
    }
  },
  { 
    id: 4, 
    title: "ASP.NET Core Web APIs", 
    status: "locked", 
    description: "Building robust backend endpoints using controllers and Minimal APIs.", 
    level: "Intermediate",
    content: {
      readingTime: "12 mins",
      overview: "ASP.NET Core provides powerful tools for building APIs. You can use MVC-style Controllers for structured routing, or the newer Minimal APIs for low-ceremony, high-performance endpoints. Both heavily leverage built-in Dependency Injection and Model Binding.",
      keyTakeaways: [
        "Controllers group related endpoints with attribute routing.",
        "Dependency Injection manages service lifecycles (Transient, Scoped, Singleton).",
        "Model binding maps HTTP request data to C# objects."
      ],
      codeSnippet: `[ApiController]\n[Route("api/[controller]")]\npublic class UsersController : ControllerBase {\n    private readonly IUserService _userService;\n    public UsersController(IUserService userService) => _userService = userService;\n\n    [HttpGet]\n    public async Task<IActionResult> Get() => Ok(await _userService.GetAllAsync());\n}`,
      visual: <AspNetWebApiVisual />,
      interviewDeepDive: {
        underTheHood: "ASP.NET Core uses the Kestrel web server. Unlike Node.js's single-threaded Event Loop, Kestrel uses a multi-threaded asynchronous ThreadPool. When an endpoint performs I/O (like a DB query), using `async/await` yields the thread back to the pool to serve other requests, preventing thread starvation and allowing massive concurrency.",
        interviewQuestion: "Explain the difference between Transient, Scoped, and Singleton service lifetimes in ASP.NET Core DI.",
        seniorAnswer: "Transient services are created every single time they are requested; they are best for lightweight, stateless services. Scoped services are created once per HTTP request; they are ideal for Entity Framework DbContexts or services maintaining state during a single transaction. Singleton services are created the first time they are requested and shared across all requests; they must be thread-safe and are used for caching or configuration. Injecting a Scoped service into a Singleton is a dangerous anti-pattern that causes 'captive dependencies'."
      }
    }
  },
  { 
    id: 5, 
    title: "Frontend API Calls", 
    status: "locked", 
    description: "Using fetch() and axios in React to consume your endpoints.", 
    level: "Intermediate",
    content: {
      readingTime: "10 mins",
      overview: "Integrating React requires making HTTP requests from the browser. 'fetch' is the native API, while 'axios' simplifies request configuration, automatic JSON parsing, and provides powerful interceptors for global request/response handling.",
      keyTakeaways: [
        "Always handle loading and error states in React.",
        "Use async/await for cleaner asynchronous code.",
        "Axios interceptors are great for attaching auth tokens globally."
      ],
      codeSnippet: `const fetchUsers = async () => {\n  try {\n    const response = await axios.get('/api/users');\n    setUsers(response.data);\n  } catch (error) {\n    console.error(error);\n  }\n};`,
      visual: <FrontendApiVisual />,
      interviewDeepDive: {
        underTheHood: "When making API calls inside React's `useEffect`, developers often encounter 'race conditions' if the component re-renders or unmounts before the promise resolves. This can lead to setting state on an unmounted component or rendering stale data if a later request finishes before an earlier one.",
        interviewQuestion: "How do you handle race conditions and unmounted component errors when fetching data in React?",
        seniorAnswer: "To prevent state updates on unmounted components and avoid race conditions, I use an `AbortController` combined with the `useEffect` cleanup function. By passing the `signal` to the `fetch` or `axios` call, I can cancel the in-flight HTTP request if the component unmounts or if the dependency array changes. Alternatively, in modern React, using a data-fetching library like TanStack Query (React Query) abstracts away these complexities, handling cancellation, caching, and background refetching automatically."
      }
    }
  },
  { id: 6, title: "Authentication & Authorization", status: "locked", description: "Implementing JWTs, identity, and protecting routes.", level: "Advanced", content: { readingTime: "15 mins", overview: "Security is paramount. Learn how to issue JSON Web Tokens (JWT) in ASP.NET Core and securely store and attach them to requests in React.", keyTakeaways: ["JWTs contain claims about the user.", "Use [Authorize] attributes in ASP.NET Core.", "Store tokens securely (HTTP-only cookies preferred)."], visual: <AuthVisual />, interviewDeepDive: { underTheHood: "A JWT is just Base64-encoded JSON; anyone can decode and read the payload. The security comes from the Signature. ASP.NET Core verifies the signature using a secret key (symmetric HS256) or public/private key pair (asymmetric RS256) to ensure the payload hasn't been tampered with.", interviewQuestion: "Where is the safest place to store a JWT in a React application?", seniorAnswer: "Storing a JWT in `localStorage` or `sessionStorage` exposes it to Cross-Site Scripting (XSS) attacks, where malicious JavaScript can steal the token. The most secure approach is the 'Backend-for-Frontend' (BFF) pattern, where the token is never exposed to JavaScript. Instead, the backend sends the token via an `HttpOnly`, `Secure`, `SameSite=Strict` cookie. The browser automatically includes this cookie in subsequent API requests, protecting against XSS, while `SameSite` mitigates Cross-Site Request Forgery (CSRF)." } } },
  { id: 7, title: "Error Handling", status: "locked", description: "Global exception handlers, ProblemDetails, and friendly UI messages.", level: "Intermediate", content: { readingTime: "8 mins", overview: "When things go wrong, the API must return structured errors. ASP.NET Core's ProblemDetails is the standard way to return HTTP errors.", keyTakeaways: ["Use global exception middleware.", "Return standard ProblemDetails JSON.", "Parse error messages in React to show user-friendly toasts."], visual: <ErrorHandlingVisual />, interviewDeepDive: { underTheHood: "In ASP.NET Core, an unhandled exception results in a 500 status code and potentially leaks sensitive stack traces. Using a Global Exception Middleware or the new `IExceptionHandler` interface ensures that all errors are intercepted, logged securely on the server, and mapped to a standardized RFC 7807 `ProblemDetails` response.", interviewQuestion: "How do you handle API validation errors on the frontend?", seniorAnswer: "When ASP.NET Core's model validation fails, it automatically returns a 400 Bad Request with a `ValidationProblemDetails` object containing a dictionary of field errors. In React, I intercept the 400 response in an Axios `catch` block, extract the `errors` dictionary, and map those error messages directly to the corresponding UI form inputs using a library like React Hook Form, providing immediate, contextual feedback to the user." } } },
  { id: 8, title: "State Management", status: "locked", description: "Syncing backend data with React Context and Redux/Zustand.", level: "Advanced", content: { readingTime: "12 mins", overview: "Once data is fetched from the API, it needs to be stored and managed in the React application.", keyTakeaways: ["Use React Query or SWR for server state.", "Use Zustand or Redux for complex client state.", "Keep client state synchronized with the backend."], visual: <StateManagementVisual />, interviewDeepDive: { underTheHood: "React Context is great for dependency injection but terrible for high-frequency state updates, as any change forces all consuming components to re-render. Libraries like Zustand or Redux solve this by subscribing components only to specific slices of the state tree.", interviewQuestion: "What is the difference between Client State and Server State, and how does it impact architecture?", seniorAnswer: "Client State represents UI-specific data (like modals being open, theme selection, or form drafts). Server State represents data persisted in the ASP.NET database. Historically, developers mixed both in Redux, leading to massive boilerplate. Today, the best practice is to separate them: use TanStack Query to manage Server State (handling caching, deduplication, and polling), and use a lightweight library like Zustand solely for transient Client State. This drastically simplifies the codebase." } } },
  { id: 9, title: "File Uploads", status: "locked", description: "Handling multipart/form-data from React to ASP.NET controllers.", level: "Advanced", content: { readingTime: "10 mins", overview: "Uploading files requires specific HTTP headers and processing on both sides.", keyTakeaways: ["Use FormData object in React.", "Set Content-Type to multipart/form-data.", "Use IFormFile in ASP.NET Core controller actions."], visual: <FileUploadVisual />, interviewDeepDive: { underTheHood: "When sending JSON, the payload is parsed entirely into memory. For large files, doing this would crash the ASP.NET Core server. Using `multipart/form-data` allows the server to stream the incoming file directly to disk or cloud storage (like Azure Blob Storage) using `IFormFile`, keeping memory consumption low.", interviewQuestion: "How do you safely process user-uploaded files in an ASP.NET Core API?", seniorAnswer: "Processing file uploads is a huge security risk. First, never trust the client-provided file name or `Content-Type`; always validate the 'magic bytes' (file signature) to ensure an uploaded image is actually an image and not an executable script. Second, enforce strict file size limits using `[RequestSizeLimit]`. Finally, store the files in a completely separate domain or storage bucket (like AWS S3) rather than the local web server filesystem, preventing directory traversal and execution attacks." } } },
  { id: 10, title: "Real-World Project", status: "locked", description: "Putting it all together: Building a full Employee Management System.", level: "Advanced", content: { readingTime: "20 mins", overview: "Apply all the concepts learned in a comprehensive project.", keyTakeaways: ["Architecture planning.", "End-to-end integration.", "Deployment considerations."], visual: <RealWorldProjectVisual />, interviewDeepDive: { underTheHood: "A production-ready architecture rarely involves the React app hitting the Database directly. It typically flows: React App -> Content Delivery Network (CDN) -> API Gateway -> Load Balancer -> ASP.NET Core Microservices -> Distributed Cache (Redis) -> Primary SQL Database.", interviewQuestion: "If an API request takes 5 seconds to generate a complex report, how do you prevent the React UI from timing out or freezing?", seniorAnswer: "We shouldn't keep the HTTP connection open for 5 seconds. Instead, we use the Asynchronous Request-Reply pattern. The React app POSTs a request to generate the report. The ASP.NET API immediately returns a '202 Accepted' with a tracking ID and queues a background job (using Hangfire or Azure Service Bus). The React app then either polls a status endpoint using that ID, or listens for a SignalR WebSocket event. Once the background job finishes, the UI is notified to download the completed report." } } },
  { id: 11, title: "Interview Questions", status: "locked", description: "Commonly asked full-stack integration questions.", level: "All Levels", content: { readingTime: "30 mins", overview: "Review this module to prepare for your next technical interview.", keyTakeaways: ["Understand the 'Why' behind architectural choices.", "Be ready to explain CORS and Auth flows.", "Practice writing clean controller and component code."], visual: <InterviewPrepVisual />, interviewDeepDive: { underTheHood: "Interviews for full-stack roles are shifting away from basic syntax questions and moving heavily toward System Design and architectural trade-offs. Interviewers want to know if you can identify bottlenecks, secure the application against OWASP top 10 vulnerabilities, and structure code for long-term maintainability.", interviewQuestion: "How would you optimize a React app that fetches 10,000 records from an ASP.NET API?", seniorAnswer: "Fetching 10,000 records at once crushes both the backend database and the frontend browser memory. I would implement Server-Side Pagination and Filtering. The ASP.NET API would accept `pageNumber` and `pageSize` parameters, using Entity Framework's `.Skip()` and `.Take()` to only query the required slice from the database. On the React side, I would implement an Infinite Scroll or Pagination component using React Query, ensuring the DOM only renders a small virtualized list (using a library like `react-window`) to maintain 60fps performance." } } },
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

      <Dialog open={!!selectedModule} onOpenChange={(open) => !open && setSelectedModule(null)}>
        <DialogContent className="max-w-none w-screen h-[100dvh] max-h-[100dvh] m-0 p-0 sm:rounded-none border-none overflow-y-auto block">
          {selectedModule && (
            <div className="max-w-4xl mx-auto p-6 md:p-12 md:py-16 w-full">
              <DialogHeader className="mb-8 mt-4 md:mt-0">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant={selectedModule.status === "completed" ? "default" : selectedModule.status === "in-progress" ? "secondary" : "outline"}
                      className={selectedModule.status === "completed" ? "bg-success hover:bg-success/90" : ""}
                    >
                    {selectedModule.status.toUpperCase()}
                  </Badge>
                  <Badge variant="outline">{selectedModule.level}</Badge>
                </div>
                <DialogTitle className="text-2xl">{selectedModule.title}</DialogTitle>
                <DialogDescription className="text-base">
                  {selectedModule.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-8 pb-10">
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
                  <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Key Takeaways
                  </h4>
                  <ul className="space-y-2">
                    {selectedModule.content.keyTakeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
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

                {/* Interview Deep Dive Section */}
                <div className="mt-8 border rounded-xl overflow-hidden shadow-sm">
                  <div className="bg-slate-900 px-5 py-4 flex items-center gap-3">
                    <BrainCircuit className="w-6 h-6 text-primary" />
                    <h4 className="text-lg font-bold text-white">Interview Deep Dive</h4>
                  </div>
                  <div className="p-5 bg-slate-50 dark:bg-slate-950 space-y-6">
                    <div>
                      <h5 className="font-semibold flex items-center gap-2 mb-2 text-primary">
                        <Target className="w-4 h-4" /> Under the Hood
                      </h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {selectedModule.content.interviewDeepDive.underTheHood}
                      </p>
                    </div>
                    
                    <div className="bg-white dark:bg-slate-900 border rounded-lg p-4">
                      <h5 className="font-semibold flex items-center gap-2 mb-3">
                        <MessageSquare className="w-4 h-4 text-amber-500" /> Common Interview Question
                      </h5>
                      <p className="text-sm font-medium italic mb-4 pb-4 border-b">
                        "{selectedModule.content.interviewDeepDive.interviewQuestion}"
                      </p>
                      <h5 className="text-xs font-bold text-success uppercase tracking-wider mb-2">The Senior Answer</h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {selectedModule.content.interviewDeepDive.seniorAnswer}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t mt-8 flex flex-col sm:flex-row gap-3">
                  <Button className="w-full sm:w-auto" onClick={() => setSelectedModule(null)}>
                    {selectedModule.status === "completed" ? "Review Completed" : "Mark as Complete"}
                  </Button>
                  <Button variant="outline" className="w-full sm:w-auto" onClick={() => setSelectedModule(null)}>
                    Close
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
