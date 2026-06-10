import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function FinalInterviewPrep() {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Final Interview Preparation</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Review these practical scenarios to prove your full-stack integration expertise.
          </p>
        </div>

        <div className="relative border-l-2 border-primary/30 ml-4 md:ml-8 space-y-12 pb-8">
          
          {/* Junior */}
          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-emerald-500 border-4 border-background" />
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
              Junior Developer
              <Badge variant="outline" className="text-emerald-500 border-emerald-500">Foundation</Badge>
            </h3>
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Scenario: Fetching a List of Users</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong>Question:</strong> How do you retrieve a list of users from an ASP.NET Core API and display them in a React component?
                </p>
                <div className="bg-muted p-4 rounded-lg text-sm mb-4">
                  <strong className="block mb-2">Key Talking Points:</strong>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Mention using `useEffect` with an empty dependency array to fetch on mount.</li>
                    <li>Explain using `fetch()` or `axios` to make a GET request to the controller endpoint.</li>
                    <li>Discuss saving the result to a React state variable (`useState`).</li>
                    <li>Mention mapping over the state array to render elements with unique `key` props.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mid */}
          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-blue-500 border-4 border-background" />
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
              Mid-Level Developer
              <Badge variant="outline" className="text-blue-500 border-blue-500">Implementation</Badge>
            </h3>
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Scenario: Form Submission and Validation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong>Question:</strong> How do you handle a form submission that creates a new record, including validation errors from the server?
                </p>
                <div className="bg-muted p-4 rounded-lg text-sm mb-4">
                  <strong className="block mb-2">Key Talking Points:</strong>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Use Controlled Components or react-hook-form on the frontend.</li>
                    <li>Send a POST request with the JSON payload.</li>
                    <li>Explain ASP.NET Core `[ApiController]` behavior (automatic 400 Bad Request if ModelState is invalid).</li>
                    <li>Discuss catching the 400 error in Axios, parsing the `ProblemDetails` or `errors` object, and mapping them back to the UI fields.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Senior */}
          <div className="relative pl-8 md:pl-12">
            <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-purple-500 border-4 border-background" />
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
              Senior Developer
              <Badge variant="outline" className="text-purple-500 border-purple-500">Architecture & Security</Badge>
            </h3>
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Scenario: Securing the Application at Scale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  <strong>Question:</strong> Design a secure authentication and state management flow for an enterprise React application backed by microservices.
                </p>
                <div className="bg-muted p-4 rounded-lg text-sm mb-4">
                  <strong className="block mb-2">Key Talking Points:</strong>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Advocate for the BFF (Backend-For-Frontend) pattern to handle tokens securely via HTTP-Only cookies, keeping JWTs out of the browser memory.</li>
                    <li>Discuss implementing a distributed cache (Redis) in the ASP.NET layer for token validation or session state.</li>
                    <li>Explain handling Cross-Site Request Forgery (CSRF) tokens alongside cookies.</li>
                    <li>Detail the use of API Gateways (e.g., Ocelot or YARP) to route frontend requests to the correct microservice.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  )
}
