import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite(), ViteImageOptimizer()],
  server: {
    port: 5173,
  },
  resolve: {
    alias: {
      "@": path.relative(__dirname, "./src"),
    },
  },
  base: "/",
});
