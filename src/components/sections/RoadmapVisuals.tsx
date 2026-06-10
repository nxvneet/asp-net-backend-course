import { Laptop, Server, ArrowRightLeft, Database, Globe, FileJson, ShieldCheck, AlertTriangle, UploadCloud, Briefcase, Users, LayoutDashboard, Key } from "lucide-react"

export const ClientServerVisual = () => (
  <div className="flex flex-col items-center justify-center p-6 bg-slate-100 dark:bg-slate-900 rounded-xl border">
    <div className="flex items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full">
          <Laptop className="w-10 h-10 text-blue-600 dark:text-blue-400" />
        </div>
        <span className="font-semibold">Client (React)</span>
      </div>
      <div className="flex flex-col items-center gap-1 text-muted-foreground">
        <span className="text-xs font-mono">Request</span>
        <ArrowRightLeft className="w-8 h-8" />
        <span className="text-xs font-mono">Response</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="p-4 bg-purple-100 dark:bg-purple-900/30 rounded-full">
          <Server className="w-10 h-10 text-purple-600 dark:text-purple-400" />
        </div>
        <span className="font-semibold">Server (ASP.NET)</span>
      </div>
    </div>
  </div>
)

export const HttpFundamentalsVisual = () => (
  <div className="flex flex-col gap-4 p-6 bg-slate-100 dark:bg-slate-900 rounded-xl border">
    <div className="flex justify-between items-center bg-white dark:bg-slate-950 p-4 rounded-lg shadow-sm">
      <div>
        <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 font-mono px-2 py-1 rounded text-sm font-bold">GET</span>
        <span className="ml-2 font-mono text-sm">/api/users</span>
      </div>
      <ArrowRightLeft className="w-5 h-5 text-muted-foreground mx-4" />
      <div>
        <span className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 font-mono px-2 py-1 rounded text-sm font-bold">200 OK</span>
        <span className="ml-2 font-mono text-sm text-muted-foreground">{"{ data: [...] }"}</span>
      </div>
    </div>
  </div>
)

export const RestApiVisual = () => (
  <div className="grid grid-cols-2 gap-4 p-6 bg-slate-100 dark:bg-slate-900 rounded-xl border">
    {[
      { verb: "GET", action: "Read", color: "emerald" },
      { verb: "POST", action: "Create", color: "blue" },
      { verb: "PUT", action: "Update", color: "amber" },
      { verb: "DELETE", action: "Delete", color: "red" },
    ].map((method) => (
      <div key={method.verb} className="flex items-center gap-3 bg-white dark:bg-slate-950 p-3 rounded-lg shadow-sm border border-l-4" style={{ borderLeftColor: `var(--${method.color}-500)` }}>
        <span className={`font-mono font-bold text-${method.color}-600 dark:text-${method.color}-400`}>{method.verb}</span>
        <span className="text-muted-foreground text-sm">→ {method.action}</span>
      </div>
    ))}
  </div>
)

export const AspNetWebApiVisual = () => (
  <div className="flex flex-col gap-2 p-6 bg-slate-100 dark:bg-slate-900 rounded-xl border relative overflow-hidden">
    <div className="flex items-center gap-4 bg-white dark:bg-slate-950 p-4 rounded-lg border z-10 relative">
      <Globe className="w-6 h-6 text-muted-foreground shrink-0" />
      <div className="h-0.5 flex-1 bg-border relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-xs font-mono text-muted-foreground border rounded-full">Routing</div>
      </div>
      <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded text-purple-600 dark:text-purple-400 font-semibold text-sm border border-purple-200 dark:border-purple-800">
        Controller
      </div>
      <div className="h-0.5 w-8 bg-border"></div>
      <Database className="w-6 h-6 text-blue-500 shrink-0" />
    </div>
  </div>
)

export const FrontendApiVisual = () => (
  <div className="flex flex-col p-6 bg-slate-100 dark:bg-slate-900 rounded-xl border">
    <div className="bg-slate-950 rounded-lg p-4 font-mono text-sm text-blue-400 overflow-x-auto shadow-inner">
      <span className="text-purple-400">const</span> fetchUsers = <span className="text-purple-400">async</span> () =&gt; {"{"}<br/>
      &nbsp;&nbsp;<span className="text-purple-400">const</span> res = <span className="text-purple-400">await</span> axios.<span className="text-emerald-400">get</span>(<span className="text-amber-400">"/api/users"</span>);<br/>
      &nbsp;&nbsp;setUsers(res.data);<br/>
      {"}"}
    </div>
  </div>
)

export const AuthVisual = () => (
  <div className="flex flex-col items-center justify-center p-6 bg-slate-100 dark:bg-slate-900 rounded-xl border">
    <div className="flex items-center gap-6">
      <div className="bg-white dark:bg-slate-950 p-3 rounded-lg border shadow-sm flex flex-col items-center">
        <Laptop className="w-8 h-8 text-muted-foreground mb-2" />
        <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded flex items-center gap-1">
          <Key className="w-3 h-3" /> JWT
        </span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs text-muted-foreground">Authorization Header</span>
        <ArrowRightLeft className="w-6 h-6 text-primary" />
      </div>
      <div className="bg-white dark:bg-slate-950 p-3 rounded-lg border shadow-sm flex flex-col items-center border-emerald-500">
        <ShieldCheck className="w-8 h-8 text-emerald-500 mb-2" />
        <span className="text-xs font-semibold">Protected API</span>
      </div>
    </div>
  </div>
)

export const ErrorHandlingVisual = () => (
  <div className="flex flex-col gap-4 p-6 bg-red-50 dark:bg-red-950/20 rounded-xl border border-red-100 dark:border-red-900/50">
    <div className="flex items-start gap-4 bg-white dark:bg-slate-950 p-4 rounded-lg shadow-sm border border-red-200 dark:border-red-800">
      <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
      <div>
        <div className="font-semibold text-red-600 dark:text-red-400">400 Bad Request</div>
        <div className="font-mono text-xs text-muted-foreground mt-2 bg-muted p-2 rounded">
          {`{
  "type": "https://tools.ietf.org/html/rfc7231#section-6.5.1",
  "title": "One or more validation errors occurred.",
  "status": 400,
  "errors": { "Email": ["The Email field is required."] }
}`}
        </div>
      </div>
    </div>
  </div>
)

export const StateManagementVisual = () => (
  <div className="flex flex-col items-center p-6 bg-slate-100 dark:bg-slate-900 rounded-xl border">
    <div className="bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 p-3 rounded-lg mb-6 shadow-sm flex items-center gap-2">
      <Database className="w-5 h-5 text-blue-600" />
      <span className="font-bold text-blue-700 dark:text-blue-400">Global State Store (Zustand/Redux)</span>
    </div>
    <div className="flex gap-8 relative">
      <div className="absolute top-[-24px] left-[20%] w-0.5 h-6 bg-blue-300"></div>
      <div className="absolute top-[-24px] right-[20%] w-0.5 h-6 bg-blue-300"></div>
      <div className="bg-white dark:bg-slate-950 p-3 rounded-lg border shadow-sm flex items-center gap-2">
        <LayoutDashboard className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm">Sidebar</span>
      </div>
      <div className="bg-white dark:bg-slate-950 p-3 rounded-lg border shadow-sm flex items-center gap-2">
        <Users className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm">User List</span>
      </div>
    </div>
  </div>
)

export const FileUploadVisual = () => (
  <div className="flex items-center justify-center gap-6 p-6 bg-slate-100 dark:bg-slate-900 rounded-xl border">
    <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border shadow-sm border-dashed border-primary">
      <div className="flex flex-col items-center gap-2 text-primary">
        <UploadCloud className="w-8 h-8" />
        <span className="text-xs font-semibold">FormData</span>
      </div>
    </div>
    <ArrowRightLeft className="w-6 h-6 text-muted-foreground" />
    <div className="bg-white dark:bg-slate-950 p-4 rounded-lg border shadow-sm">
      <div className="flex flex-col items-center gap-2 text-purple-600 dark:text-purple-400">
        <FileJson className="w-8 h-8" />
        <span className="text-xs font-semibold">IFormFile</span>
      </div>
    </div>
  </div>
)

export const RealWorldProjectVisual = () => (
  <div className="grid grid-cols-2 gap-4 p-6 bg-slate-100 dark:bg-slate-900 rounded-xl border">
    <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800 flex flex-col items-center gap-2">
      <LayoutDashboard className="w-6 h-6 text-blue-600" />
      <span className="text-sm font-semibold">React Dashboard</span>
    </div>
    <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg border border-purple-200 dark:border-purple-800 flex flex-col items-center gap-2">
      <Server className="w-6 h-6 text-purple-600" />
      <span className="text-sm font-semibold">ASP.NET API</span>
    </div>
    <div className="bg-emerald-50 dark:bg-emerald-950/30 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800 flex flex-col items-center gap-2">
      <ShieldCheck className="w-6 h-6 text-emerald-600" />
      <span className="text-sm font-semibold">Auth Service</span>
    </div>
    <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg border border-amber-200 dark:border-amber-800 flex flex-col items-center gap-2">
      <Database className="w-6 h-6 text-amber-600" />
      <span className="text-sm font-semibold">SQL Server</span>
    </div>
  </div>
)

export const InterviewPrepVisual = () => (
  <div className="flex items-center justify-center gap-8 p-6 bg-slate-100 dark:bg-slate-900 rounded-xl border">
    <div className="flex flex-col items-center gap-2">
      <div className="bg-primary/10 p-4 rounded-full">
        <Briefcase className="w-8 h-8 text-primary" />
      </div>
      <span className="text-sm font-semibold">Interviewer</span>
    </div>
    <div className="relative">
      <div className="absolute -top-4 -left-4 bg-background border px-3 py-1 rounded-2xl rounded-bl-none shadow-sm text-xs font-medium">
        "How do you handle CORS?"
      </div>
    </div>
    <div className="flex flex-col items-center gap-2 mt-8">
      <div className="bg-muted p-4 rounded-full">
        <Users className="w-8 h-8 text-muted-foreground" />
      </div>
      <span className="text-sm font-semibold">You</span>
    </div>
  </div>
)
