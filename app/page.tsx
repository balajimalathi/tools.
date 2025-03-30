import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { tools } from "@/lib/tools-data"
import { Icons } from "@/components/shared/icons"

export default function ToolsGrid() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href={"/"}>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold tracking-tight">Tools.</span>
            </div></Link>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/balajimalathi/tools." target="_blank" rel="noreferrer">
              <Icons.gitHub className="size-6" />
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="container px-8 py-10 md:py-16">
          <div className="flex flex-col items-start gap-4 md:gap-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                My Handy Tools
              </h1>
              <p className="mt-4 max-w-[700px] text-muted-foreground">
                Explore my collection of powerful tools designed to enhance your workflow and boost productivity.
              </p>
            </div>

            <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {tools.map((tool) => (
                <Link key={tool.slug} href={tool.live ? `/tools/${tool.slug}` : `#`} className="group">
                  <Card className="overflow-hidden py-0 transition-all duration-200 hover:shadow-md dark:hover:shadow-primary/10">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={tool.image || "/placeholder.svg"}
                        alt={tool.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {tool.isNew && (
                        <Badge className="absolute right-2 top-2">New</Badge>
                      )}
                      {!tool.live && (
                        <Badge variant="secondary" className="absolute right-2 top-2">In progress</Badge>
                      )}
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="line-clamp-1 text-2xl">{tool.name} <span className="text-sm text-muted-foreground">v{tool.version}</span></CardTitle>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {tool.technology.map((tag) => (
                          <Badge key={tag} className="px-2 py-0 text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="line-clamp-2 text-sm text-muted-foreground">
                        {tool.description}
                      </p>
                    </CardContent>
                    <CardFooter className="justify-between px-4 pb-4 pt-0">
                      <div className="flex flex-wrap gap-2">
                        {tool.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="px-2 py-0 text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      {tool.live && (
                        <Link href={`${tool.repoUrl}`} target="_blank" rel="noreferrer">
                          <Icons.gitHub className="size-6" />
                        </Link>
                      )}
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t px-4 py-6">
        <div className="container flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Skndan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
