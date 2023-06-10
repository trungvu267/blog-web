import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@api": path.resolve(__dirname, "src/api"),
      "@components": path.resolve(__dirname, "src/components"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@services": path.resolve(__dirname, "src/services"),
      "@states": path.resolve(__dirname, "src/states"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
});
