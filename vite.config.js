import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const projectDirectory = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(projectDirectory, "./src/"),
    },
  },
  plugins: [react()],
  preview: {
    allowedHosts: [
      "4173-ifwvay3o6vh7yj91v2r4l-e33adcdc.sg2.manus.computer",
    ],
  },
});
