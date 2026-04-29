import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // Main Dashboard
        main: resolve(__dirname, 'index.html'),
        
        // Individual Enterprise Modules
        attendance: resolve(__dirname, 'attendance.html'),
        canteencounter: resolve(__dirname, 'canteencounter.html'),
        mealplan: resolve(__dirname, 'mealplan.html'),
        roster: resolve(__dirname, 'roster.html'),
        log: resolve(__dirname, 'Log.html'),
        report: resolve(__dirname, 'report.html')
      }
    }
  }
});