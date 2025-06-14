"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner";

const Toaster = ({
  ...props
}) => {
  const { theme = "light" } = useTheme() // Changed default to light

  return (
    (<Sonner
      theme="light" // Force light theme
      className="toaster group"
      style={
        {
          "--normal-bg": "#ffffff", // White background
          "--normal-text": "#1f2937", // Dark text
          "--normal-border": "#e5e7eb", // Light gray border
          "--success-bg": "#f0fdf4", // Light green
          "--success-text": "#166534", // Dark green text
          "--error-bg": "#fef2f2", // Light red
          "--error-text": "#dc2626", // Dark red text
          "--warning-bg": "#fffbeb", // Light yellow
          "--warning-text": "#d97706", // Dark orange text
        }
      }
      toastOptions={{
        style: {
          background: '#ffffff',
          color: '#1f2937',
          border: '1px solid #e5e7eb',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }
      }}
      {...props} />)
  );
}

export { Toaster }