// page-objects/LoginPage.ts
import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator; // Para o exemplo, mesmo que simulado

  constructor(page: Page) {
    this.page = page;
    // Estes são seletores de exemplo. Para testes simulados, não serão usados.
    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.locator('.error-message'); 
  }

  async goto() {
    // Navegamos para uma página em branco para evitar problemas de rede
    await this.page.goto('about:blank'); 
  }

  async login(username: string, password: string) {
    // Estas ações não farão nada em 'about:blank', são apenas para estrutura do PO
    // await this.usernameInput.fill(username);
    // await this.passwordInput.fill(password);
    // await this.loginButton.click();
    console.log(`Simulating login action for user: ${username}`); // Adicionei para depuração

  }
}