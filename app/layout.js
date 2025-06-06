import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { dark } from "@clerk/themes";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Doctors Appointment App",
  description: "Connect with doctors anytime, anywhere",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors />

            <footer className="bg-muted/50 py-12 text-gray-200">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">


      {/* Social Icons */}
      <div className="flex space-x-4">
        <a href="#" className="hover:text-white">🐦</a>
        <a href="#" className="hover:text-white">💼</a>
        <a href="#" className="hover:text-white">📸</a>
      </div>
    </div>

    <div className="mt-8 text-sm text-center text-gray-400">
      &copy; {new Date().getFullYear()} Sadhef. All rights reserved.
    </div>
  </div>
</footer>

          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
