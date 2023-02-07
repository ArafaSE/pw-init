import { devices } from "@playwright/test";
require('dotenv').config();

const config ={
    testDir: 'POM',
    timeout: 40000,
    use: {
        baseURL: 'https://opensource-demo.orangehrmlive.com',
        headless: false,
        // browserName: 'firefox',
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        // viewport: { width: 1280, height: 720 },
        launchOptions: {
            slowMo: 100,
        }
    },
    projects: [
        {
          name: 'Android Pixel',
          use: { ...devices['Pixel 5'] },
        },
        // {
        //   name: 'Desktop firefox',
        //   use: { ...devices['Desktop Firefox'] },
        // },
        // {
        //   name: 'webkit Mohamed',
        //   use: { ...devices['iPhone 13 Pro Max'] },
        // },
      ],
    reporter: 'html',
    workers: 3,
    retries: 1
};

export default config;