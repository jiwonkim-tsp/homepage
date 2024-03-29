import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@Assets": path.resolve(__dirname, "./src/assets"),
      "@Components": path.resolve(__dirname, "./src/components"),
      "@Constants": path.resolve(__dirname, "./src/constants"),
      "@Data": path.resolve(__dirname, "./src/data"),
      "@Pages": path.resolve(__dirname, "./src/pages"),
      "@Recoil": path.resolve(__dirname, "./src/recoil"),
      "@Styles": path.resolve(__dirname, "./src/styles"),
      "@Hooks": path.resolve(__dirname, "./src/hooks"),
      "@Animation": path.resolve(__dirname, "./src/animation"),
    },
  },
  build: {
    minify: false,
    chunkSizeWarningLimit: 100000000,
  },
  // server: {
  //   https: {
  //     key: fs.readFileSync("./ssl/key.pem"),
  //     cert: fs.readFileSync("./ssl/crt.pem"),
  //   },
  // },
});
