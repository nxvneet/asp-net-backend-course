import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, LayoutDashboard, Lock, FileEdit, Database } from "lucide-react"

export function RealProjectWalkthrough() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Case Study</Badge>
          <h2 className="text-3xl font-bold tracking-tight mb-4">Enterprise Employee Management System</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how the concepts apply in a real-world enterprise application with authentication, RBAC, and complex CRUD.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Key Features & Implementation</h3>
            
            <div className="flex gap-4">
              <div className="h-10 w-10 shrink-0 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20">
                <Lock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">JWT Login & RBAC</h4>
                <p className="text-muted-foreground text-sm">ASP.NET Identity handles user validation and generates a JWT. React stores it and attaches it to every subsequent Axios request. Admin users get an `Admin` claim for Role-Based Access Control.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-10 w-10 shrink-0 bg-cyan-500/10 rounded-lg flex items-center justify-center border border-cyan-500/20">
                <LayoutDashboard className="h-5 w-5 text-cyan-500" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Real-time Dashboard</h4>
                <p className="text-muted-foreground text-sm">SignalR is integrated alongside REST APIs to push live employee status updates (e.g., active/inactive) directly to the React frontend without polling.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-10 w-10 shrink-0 bg-emerald-500/10 rounded-lg flex items-center justify-center border border-emerald-500/20">
                <Users className="h-5 w-5 text-emerald-500" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Paginated User Management</h4>
                <p className="text-muted-foreground text-sm">Entity Framework Core handles server-side pagination (`.Skip().Take()`). React sends `pageNumber` and `pageSize` via query parameters and displays the results in a data grid.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-10 w-10 shrink-0 bg-purple-500/10 rounded-lg flex items-center justify-center border border-purple-500/20">
                <FileEdit className="h-5 w-5 text-purple-500" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Complex CRUD & File Uploads</h4>
                <p className="text-muted-foreground text-sm">Creating an employee record involves sending JSON data along with an avatar image. React uses `FormData` and ASP.NET accepts `[FromForm]` with `IFormFile`.</p>
              </div>
            </div>
          </div>

          <div className="relative">
             <Card className="shadow-xl border-primary/20 overflow-hidden bg-card/50 backdrop-blur">
                <CardHeader className="bg-muted/50 border-b pb-4">
                   <div className="flex items-center gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-400" />
                     <div className="w-3 h-3 rounded-full bg-amber-400" />
                     <div className="w-3 h-3 rounded-full bg-emerald-400" />
                     <span className="ml-2 text-xs font-mono text-muted-foreground">Admin Portal Dashboard</span>
                   </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="font-bold text-lg">Employees</h4>
                    <Badge variant="default">Add New</Badge>
                  </div>
                  
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-background border rounded-lg shadow-sm">
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                             <Users className="h-5 w-5 text-muted-foreground" />
                           </div>
                           <div>
                             <div className="font-medium text-sm">Employee Name {i}</div>
                             <div className="text-xs text-muted-foreground">Software Engineer</div>
                           </div>
                        </div>
                        <Badge variant="outline" className="text-emerald-500 border-emerald-200 bg-emerald-50 dark:bg-emerald-950/50">Active</Badge>
                      </div>
                    ))}
                  </div>

                  {/* Overlay Data Flow annotation */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none flex items-center justify-center">
                     <div className="bg-background/95 border shadow-2xl p-4 rounded-xl translate-y-12 translate-x-12 max-w-[200px] text-xs font-mono">
                        <div className="text-primary mb-1 flex items-center gap-1"><Database className="h-3 w-3" /> EF Core Query</div>
                        <div className="text-muted-foreground">SELECT * FROM Employees WHERE Active = 1 ORDER BY Id DESC OFFSET 0 ROWS FETCH NEXT 10 ROWS ONLY</div>
                     </div>
                  </div>
                </CardContent>
             </Card>
          </div>

        </div>
      </div>
    </section>
  )
}
