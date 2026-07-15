import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // ⚠️ Remove the server: { entry: "server" } block completely
    deployment: {
      target: "static", // 👈 FORCE LOVABLE TO EXPORT STATIC HTML
    },
  },
  vite: {
    base: "/SideHelper/", // Keeps your asset mapping intact
  }
});
