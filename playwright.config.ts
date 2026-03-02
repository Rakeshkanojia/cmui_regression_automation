import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  // Test directory
  testDir: './tests',
  
  // Maximum time one test can run
  timeout: process.env.CI ? 120 * 1000 : 60 * 1000,
  
  // Run tests in parallel
  fullyParallel: true,
  
  // Fail the build on CI if you accidentally left test.only in the source code
  forbidOnly: !!process.env.CI,
  
  // Retry on CI only - reduced to 1 for faster debugging
  retries: process.env.CI ? 1 : 0,
  
  // Number of parallel workers
  workers: process.env.CI ? 1 : undefined,
  
  // Reporter to use
  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['json', { outputFile: 'test-results/results.json' }],
    ['list'],
    ['allure-playwright', { 
      outputFolder: 'allure-results',
      detail: true,
      suiteTitle: true
    }]
  ],

  use: {
    // Base URL for your application
    baseURL: process.env.BASE_URL || 'https://staging.itsacheckmate.com',
    
    // Collect trace - always on for CI debugging
    trace: process.env.CI ? 'on' : 'on-first-retry',
    
    // Take screenshot - on failure, or on all steps in CI for debugging
    screenshot: process.env.CI ? 'on' : 'only-on-failure',
    
    // Record video on failure
    video: 'retain-on-failure',
    
    // Browser viewport
    viewport: { width: 1280, height: 720 },
  },

  // Configure projects for major browsers
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // Uncomment to test on other browsers
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});
