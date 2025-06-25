import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  // O diretório onde Playwright vai procurar por seus testes E2E (nossa pasta customizada).
  testDir: './tests/e2e', 
  
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  
  // AUMENTAMOS O TIMEOUT GLOBAL PARA DAR MAIS CHANCE AO CARREGAMENTO DA PÁGINA
  timeout: 180 * 1000, // 3 minutos

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL para usar em ações como `await page.goto('/')`. */
    baseURL: 'https://demo.playwright.dev/todomvc', // <<< DEFINIMOS A URL DO TODOMVC AQUI
    
    /* Coletar trace quando retentar o teste que falhou. */
    trace: 'on-first-retry',

    // >>> LINHAS ADICIONADAS PARA DIAGNÓSTICO E VISIBILIDADE <<<
    headless: false, // Isso fará o navegador abrir visivelmente
    slowMo: 500,     // Adiciona um atraso de 500ms entre as ações
    // >>> FIM DAS LINHAS ADICIONADAS <<<
  }, // <--- Vírgula ESSENCIAL aqui

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});