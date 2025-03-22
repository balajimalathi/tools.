import "@/styles/globals.css";
import { Metadata } from "next"
import { Gabarito } from 'next/font/google'
import { cn } from "@/lib/utils"
import { ThemeProvider } from "next-themes";

const gabarito = Gabarito({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Tools Showcase",
  description: "Explore our collection of powerful developer tools",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen antialiased", gabarito.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
