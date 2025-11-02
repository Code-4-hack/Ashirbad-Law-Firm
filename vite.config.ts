import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// ✅ Vite configuration — optimized for Netlify & local development
export default defineConfig(({ mode }) => ({
  // ✅ For Netlify hosting, keep base path as root
  base: "/",

  server: {
    host: "0.0.0.0", // Works for localhost and LAN testing
    port: 8080,
  },

  plugins: [
    react(),
    // You can safely remove or re-enable your lovable tagger plugin later
    // ...(mode === "development" ? [componentTagger()] : [])
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    outDir: "dist",
    sourcemap: mode === "development",
    emptyOutDir: true,
  },

  optimizeDeps: {
    include: ["react", "react-dom"],
  },
}));
