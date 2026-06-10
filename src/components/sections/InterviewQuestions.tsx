import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

const questions = [
  {
    category: "CORS",
    level: "Intermediate",
    q: "What is CORS and why is it needed when connecting React to ASP.NET Core?",
    a: "CORS (Cross-Origin Resource Sharing) is a browser security feature that prevents a web page from making requests to a different domain than the one that served the web page.",
    deepDive: "By default, if your React app is running on localhost:3000 and your ASP.NET API is on localhost:5001, the browser blocks the request. You must configure CORS in the ASP.NET Core middleware (`builder.Services.AddCors()`) to explicitly allow the React app's origin.",
    followUp: "How would you configure CORS to allow specific headers or credentials?"
  },
  {
    category: "Authentication",
    level: "Advanced",
    q: "How do you securely store JWT tokens in a React application?",
    a: "The most secure approach is using HTTP-only cookies, but if storing in the browser, in-memory storage combined with short-lived access tokens and refresh tokens in HTTP-only cookies is recommended.",
    deepDive: "Storing JWTs in localStorage exposes them to XSS attacks. By storing the refresh token in an HTTP-only cookie, the browser handles sending it securely, and JavaScript cannot access it. The ASP.NET backend handles the validation and issuing of new short-lived access tokens.",
    followUp: "What is the difference between an access token and a refresh token?"
  },
  {
    category: "Dependency Injection",
    level: "Beginner",
    q: "Why do we use Dependency Injection (DI) in ASP.NET Core Controllers?",
    a: "DI allows us to decouple our components, making them easier to test, maintain, and swap out.",
    deepDive: "Instead of a Controller instantiating its own Service (`var service = new UserService()`), the framework injects it via the constructor. This allows injecting mock services during unit testing and centralizes the object lifecycle management (Transient, Scoped, Singleton) in `Program.cs`.",
    followUp: "What is the difference between AddScoped, AddTransient, and AddSingleton?"
  },
  {
    category: "Middleware",
    level: "Intermediate",
    q: "What is the Middleware pipeline in ASP.NET Core and how does it relate to requests?",
    a: "Middleware are software components assembled into an app pipeline to handle requests and responses.",
    deepDive: "Each component chooses whether to pass the request to the next component in the pipeline and can perform work before and after the next component. For frontend integration, crucial middleware includes CORS, Authentication, Authorization, and global Exception Handling.",
    followUp: "How would you write a custom middleware to log the duration of every API request?"
  }
]

export function InterviewQuestions() {
  return (
    <section id="interview-prep" className="py-20 bg-muted/30">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Common Interview Questions</h2>
          <p className="text-muted-foreground text-lg">
            Prepare for full-stack role interviews with these deep-dive questions.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {questions.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border rounded-xl px-6">
              <AccordionTrigger className="hover:no-underline text-left py-4">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 w-full pr-4">
                  <span className="font-semibold text-lg">{item.q}</span>
                  <div className="flex gap-2 mt-2 md:mt-0 md:ml-auto">
                    <Badge variant="outline">{item.category}</Badge>
                    <Badge variant={item.level === "Advanced" ? "destructive" : item.level === "Intermediate" ? "default" : "secondary"}>
                      {item.level}
                    </Badge>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground pb-6 space-y-4 pt-2">
                <div>
                  <strong className="text-foreground">Expected Answer:</strong> {item.a}
                </div>
                <div className="bg-muted p-4 rounded-lg border">
                  <strong className="text-foreground block mb-2">Deep-Dive Explanation:</strong>
                  {item.deepDive}
                </div>
                <div className="text-primary font-medium flex items-center gap-2">
                  <span className="bg-primary/10 px-2 py-1 rounded text-sm">Follow-up</span>
                  {item.followUp}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
