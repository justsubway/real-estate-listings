import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages project site: https://justsubway.github.io/real-estate-website/
const repoBase = "/real-estate-website/";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? repoBase : "/",
}));
