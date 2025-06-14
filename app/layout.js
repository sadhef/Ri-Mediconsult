import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ri-MediCare | Premium Healthcare Platform",
  description: "Connect with world-class doctors anytime, anywhere through our secure platform.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        // Light theme configuration for Clerk
        variables: {
          colorPrimary: "#3b82f6", // Blue primary
          colorBackground: "#ffffff", // White background
          colorInputBackground: "#f9fafb", // Light gray input
          colorInputText: "#111827", // Dark text
          colorText: "#111827", // Dark text
          colorTextSecondary: "#6b7280", // Medium gray
          colorNeutral: "#9ca3af", // Light gray
          colorDanger: "#ef4444", // Red
          colorSuccess: "#10b981", // Green
          colorWarning: "#f59e0b", // Orange
          borderRadius: "8px",
          fontFamily: "Inter, sans-serif",
        },
        elements: {
          card: "bg-white border border-gray-200 shadow-lg",
          headerTitle: "text-blue-600 font-semibold",
          headerSubtitle: "text-gray-600",
          socialButtonsBlockButton: "bg-white border border-gray-300 hover:bg-gray-50 text-gray-700",
          formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white shadow-md",
          formFieldInput: "bg-white border border-gray-300 focus:border-blue-500 text-gray-900 placeholder:text-gray-400",
          footerActionLink: "text-blue-600 hover:text-blue-700",
          userButtonPopoverCard: "bg-white border border-gray-200 shadow-xl",
          userPreviewMainIdentifier: "text-gray-900 font-semibold",
          userPreviewSecondaryIdentifier: "text-gray-600",
          userButtonPopoverActionButton: "text-gray-700 hover:text-gray-900 hover:bg-gray-50",
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
          <meta name="theme-color" content="#ffffff" />
        </head>
        <body className={`${inter.className} bg-white text-gray-900`}>
          <ThemeProvider>
            {/* Light Background */}
            <div className="fixed inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.08),transparent_50%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="relative min-h-screen flex flex-col">
              <Header />
              
              <main className="flex-1 relative">
                {children}
              </main>

              {/* Light Theme Footer */}
              <footer className="relative mt-auto border-t border-gray-200 bg-white/80 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-50/50 to-transparent" />
                
                <div className="relative container mx-auto px-6 py-12">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
                          <div className="w-4 h-4 bg-white rounded-sm" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Ri-MediCare</h3>
                      </div>
                      <p className="text-gray-600 text-sm max-w-xs">
                        Connecting patients with world-class healthcare professionals through innovative technology.
                      </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                      <h4 className="text-gray-900 font-semibold">Quick Links</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Find Doctors</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Book Appointment</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Support</a>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                      <h4 className="text-gray-900 font-semibold">Get in Touch</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>24/7 Customer Support</p>
                        <p className="text-blue-600">support@ri-medicare.com</p>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          <span>All systems operational</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Bar */}
                  <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
                    <p>&copy; {new Date().getFullYear()} Sadhef. All rights reserved.</p>
                    <div className="flex gap-6">
                      <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
                      <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
                      <a href="#" className="hover:text-blue-600 transition-colors">Cookies</a>
                    </div>
                  </div>
                </div>
              </footer>
            </div>

            {/* Light Theme Toaster */}
            <Toaster richColors />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
