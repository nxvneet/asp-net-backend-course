import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"

const initialChecklist = [
  { id: "api", label: "API endpoint created & tested in Swagger", checked: false },
  { id: "cors", label: "CORS configured for the frontend origin", checked: false },
  { id: "dto", label: "DTOs match the frontend Types/Interfaces", checked: false },
  { id: "fetch", label: "Frontend HTTP client (fetch/axios) service created", checked: false },
  { id: "auth", label: "Authentication (JWT) headers configured", checked: false },
  { id: "error", label: "Global error handling implemented (try/catch & ErrorBoundaries)", checked: false },
  { id: "loading", label: "Loading states and skeletons added to UI", checked: false },
  { id: "security", label: "Security validated (CSRF, XSS, HTTPS)", checked: false },
]

export function IntegrationChecklist() {
  const [items, setItems] = useState(initialChecklist)

  const toggleItem = (id: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ))
  }

  const completedCount = items.filter(i => i.checked).length

  return (
    <section className="py-20 bg-muted/30">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Launch Checklist</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Never miss a step. Use this interactive checklist before deploying your integrated full-stack application.
          </p>
        </div>

        <Card className="shadow-md">
          <CardContent className="p-6 md:p-8">
            <div className="flex justify-between items-center mb-8 border-b pb-4">
              <h3 className="text-xl font-semibold">Integration Steps</h3>
              <div className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                {completedCount} / {items.length} Completed
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {items.map((item) => (
                <div 
                  key={item.id} 
                  className={`flex items-start space-x-3 p-4 rounded-lg border transition-colors ${item.checked ? "bg-muted/50 border-emerald-500/30" : "hover:bg-muted/30"}`}
                >
                  <Checkbox 
                    id={item.id} 
                    checked={item.checked} 
                    onCheckedChange={() => toggleItem(item.id)} 
                    className={`mt-1 ${item.checked ? "data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500" : ""}`}
                  />
                  <div className="space-y-1 leading-none">
                    <label
                      htmlFor={item.id}
                      className={`text-sm font-medium leading-normal cursor-pointer select-none ${item.checked ? "text-muted-foreground line-through" : ""}`}
                    >
                      {item.label}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
