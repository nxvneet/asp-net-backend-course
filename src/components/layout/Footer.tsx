import { Code2, MessageCircle, Share2, Link } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-12 md:py-16 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">ASP.NET Integrator</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              The ultimate interactive guide for mastering frontend to ASP.NET integration.
            </p>
            <div className="flex space-x-4 text-muted-foreground">
              <a href="#" className="hover:text-foreground"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="hover:text-foreground"><Share2 className="h-5 w-5" /></a>
              <a href="#" className="hover:text-foreground"><Link className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Learning Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Learning Roadmap</a></li>
              <li><a href="#" className="hover:text-foreground">API Fundamentals</a></li>
              <li><a href="#" className="hover:text-foreground">Real-World Projects</a></li>
              <li><a href="#" className="hover:text-foreground">Interview Questions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Documentation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Microsoft ASP.NET Docs</a></li>
              <li><a href="#" className="hover:text-foreground">Entity Framework Core</a></li>
              <li><a href="#" className="hover:text-foreground">React Documentation</a></li>
              <li><a href="#" className="hover:text-foreground">Tailwind CSS</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Support</a></li>
              <li><a href="#" className="hover:text-foreground">Community</a></li>
              <li><a href="#" className="hover:text-foreground">Feedback</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ASP.NET Integrator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
