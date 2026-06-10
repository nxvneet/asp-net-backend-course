import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Server, Key, Database, RefreshCw } from "lucide-react"

export function StepByStepTutorial() {
  return (
    <section id="api-fundamentals" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Step-by-Step Integration</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn the exact workflow to build and connect a full-stack application.
          </p>
        </div>

        <Tabs defaultValue="step1" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 h-auto rounded-xl p-1 bg-muted/50 border">
            <TabsTrigger value="step1" className="rounded-lg py-2.5 data-[state=active]:bg-background data-[state=active]:shadow-sm">
              <Server className="w-4 h-4 mr-2" /> <span className="hidden sm:inline">Build</span> API
            </TabsTrigger>
            <TabsTrigger value="step2" className="rounded-lg py-2.5 data-[state=active]:bg-background data-[state=active]:shadow-sm">
              <RefreshCw className="w-4 h-4 mr-2" /> Test
            </TabsTrigger>
            <TabsTrigger value="step3" className="rounded-lg py-2.5 data-[state=active]:bg-background data-[state=active]:shadow-sm">
              <Code2 className="w-4 h-4 mr-2" /> Frontend
            </TabsTrigger>
            <TabsTrigger value="step4" className="rounded-lg py-2.5 data-[state=active]:bg-background data-[state=active]:shadow-sm">
              <Key className="w-4 h-4 mr-2" /> Auth
            </TabsTrigger>
            <TabsTrigger value="step5" className="rounded-lg py-2.5 data-[state=active]:bg-background data-[state=active]:shadow-sm">
              <Database className="w-4 h-4 mr-2" /> CRUD
            </TabsTrigger>
          </TabsList>

          <div className="mt-8">
            <TabsContent value="step1">
              <Card className="border-border/50 shadow-sm">
                <CardHeader>
                  <CardTitle>Build the ASP.NET Core API</CardTitle>
                  <CardDescription>Define your controllers, routes, and services.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-xl border font-mono text-sm overflow-x-auto text-muted-foreground">
                    <span className="text-primary">{"[ApiController]"}</span><br/>
                    <span className="text-primary">{"[Route(\"api/[controller]\")]"}</span><br/>
                    <span className="text-secondary">public class</span> ProductsController : ControllerBase<br/>
                    {"{"}<br/>
                    &nbsp;&nbsp;<span className="text-secondary">private readonly</span> IProductService _productService;<br/><br/>
                    &nbsp;&nbsp;<span className="text-secondary">public</span> ProductsController(IProductService productService)<br/>
                    &nbsp;&nbsp;{"{"}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;_productService = productService;<br/>
                    &nbsp;&nbsp;{"}"}<br/><br/>
                    &nbsp;&nbsp;<span className="text-primary">{"[HttpGet]"}</span><br/>
                    &nbsp;&nbsp;<span className="text-secondary">public async</span> Task&lt;IActionResult&gt; GetProducts()<br/>
                    &nbsp;&nbsp;{"{"}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-secondary">return</span> Ok(<span className="text-secondary">await</span> _productService.GetAllAsync());<br/>
                    &nbsp;&nbsp;{"}"}<br/>
                    {"}"}
                  </div>
                  <p className="text-muted-foreground">Use Dependency Injection to provide your service to the controller. The controller simply handles the HTTP request and returns the appropriate HTTP status code (200 OK).</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="step2">
              <Card className="border-border/50 shadow-sm">
                <CardHeader>
                  <CardTitle>Test with Swagger / Postman</CardTitle>
                  <CardDescription>Verify your endpoints before writing frontend code.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted/50 p-6 rounded-xl border flex flex-col items-center justify-center min-h-[200px]">
                     <div className="w-full max-w-md bg-background border rounded shadow-sm overflow-hidden">
                       <div className="bg-emerald-500/10 px-4 py-2 border-b flex items-center gap-4">
                          <span className="bg-emerald-500 text-white font-bold text-xs px-2 py-1 rounded">GET</span>
                          <span className="font-mono text-sm">/api/products</span>
                       </div>
                       <div className="p-4 bg-slate-900 text-emerald-400 font-mono text-sm">
                          {`[\n  {\n    "id": 1,\n    "name": "Laptop",\n    "price": 999.99\n  }\n]`}
                       </div>
                     </div>
                  </div>
                  <p className="text-muted-foreground">Always ensure your API returns the expected JSON structure and CORS is configured correctly for your frontend origin.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="step3">
              <Card className="border-border/50 shadow-sm">
                <CardHeader>
                  <CardTitle>Connect the React Frontend</CardTitle>
                  <CardDescription>Use fetch or axios to retrieve the data.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-xl border font-mono text-sm overflow-x-auto text-muted-foreground">
                    <span className="text-secondary">import</span> {"{ useEffect, useState }"} <span className="text-secondary">from</span> <span className="text-accent">'react'</span>;<br/>
                    <span className="text-secondary">import</span> axios <span className="text-secondary">from</span> <span className="text-accent">'axios'</span>;<br/><br/>
                    <span className="text-secondary">export function</span> ProductList() {"{"}<br/>
                    &nbsp;&nbsp;<span className="text-secondary">const</span> [products, setProducts] = useState([]);<br/><br/>
                    &nbsp;&nbsp;useEffect(() =&gt; {"{"}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;axios.get(<span className="text-accent">'https://localhost:5001/api/products'</span>)<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.then(res =&gt; setProducts(res.data));<br/>
                    &nbsp;&nbsp;{"}"}, []);<br/><br/>
                    &nbsp;&nbsp;<span className="text-secondary">return</span> (<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt;{"{products.map(p => <li key={p.id}>{p.name}</li>)}"}&lt;/ul&gt;<br/>
                    &nbsp;&nbsp;);<br/>
                    {"}"}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="step4">
              <Card className="border-border/50 shadow-sm">
                <CardHeader>
                  <CardTitle>Handle Authentication</CardTitle>
                  <CardDescription>Secure your API with JWT Bearer tokens.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                   <div className="bg-muted/50 p-4 rounded-xl border font-mono text-sm overflow-x-auto text-muted-foreground">
                    <span className="text-secondary">// ASP.NET Core</span><br/>
                    <span className="text-primary">{"[Authorize]"}</span><br/>
                    <span className="text-primary">{"[HttpGet(\"secure-data\")]"}</span><br/>
                    <span className="text-secondary">public</span> IActionResult GetSecureData() {"{ ... }"}<br/><br/>
                    <span className="text-secondary">// React Frontend (Axios Interceptor)</span><br/>
                    axios.interceptors.request.use(config =&gt; {"{"}<br/>
                    &nbsp;&nbsp;<span className="text-secondary">const</span> token = localStorage.getItem(<span className="text-accent">'token'</span>);<br/>
                    &nbsp;&nbsp;<span className="text-secondary">if</span> (token) {"{"}<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;config.headers.Authorization = <span className="text-accent">`Bearer {"${token}"}`</span>;<br/>
                    &nbsp;&nbsp;{"}"}<br/>
                    &nbsp;&nbsp;<span className="text-secondary">return</span> config;<br/>
                    {"}"});
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="step5">
              <Card className="border-border/50 shadow-sm">
                <CardHeader>
                  <CardTitle>Implement CRUD Operations</CardTitle>
                  <CardDescription>Complete the lifecycle: Create, Read, Update, Delete.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-emerald-500/10 border-emerald-500/20 border rounded-lg p-4 text-center">
                      <div className="font-bold text-emerald-600 dark:text-emerald-400 mb-1">POST</div>
                      <div className="text-sm text-muted-foreground">Create</div>
                    </div>
                    <div className="bg-blue-500/10 border-blue-500/20 border rounded-lg p-4 text-center">
                      <div className="font-bold text-blue-600 dark:text-blue-400 mb-1">GET</div>
                      <div className="text-sm text-muted-foreground">Read</div>
                    </div>
                    <div className="bg-amber-500/10 border-amber-500/20 border rounded-lg p-4 text-center">
                      <div className="font-bold text-amber-600 dark:text-amber-400 mb-1">PUT</div>
                      <div className="text-sm text-muted-foreground">Update</div>
                    </div>
                    <div className="bg-red-500/10 border-red-500/20 border rounded-lg p-4 text-center">
                      <div className="font-bold text-red-600 dark:text-red-400 mb-1">DELETE</div>
                      <div className="text-sm text-muted-foreground">Delete</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mt-4">Match frontend Axios methods directly to ASP.NET Http verbs. Ensure the request payload format matches your API's expected DTO (Data Transfer Object).</p>
                </CardContent>
              </Card>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </section>
  )
}
