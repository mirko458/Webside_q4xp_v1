import { defineConfig } from "vite"  
import react from "@vitejs/plugin-react"  
export default defineConfig({  
  base: "/Webside_q4xp_v1/",  
  plugins: [react()],  
  resolve: {  
    alias: {  
      "@": new URL("./src", import.meta.url).pathname  
    }  
  }  
}) 
