import { test, expect } from '@playwright/test';

test('should navigate to Google and display the correct title', async ({ page }) => {
  // Navega para a baseURL, que é 'https://www.google.com' conforme configurado.
  await page.goto('https://www.google.com'); // <--- MUDANÇA AQUI!

  // Verifica se o título da página contém "Google".
  await expect(page).toHaveTitle(/Google/); 

  // Adiciona um pequeno atraso para você ver a página no modo debug.
  await page.waitForTimeout(2000); 
});