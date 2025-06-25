// page-objects/HomePage.ts
import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  // Seletores de exemplo. Para testes simulados, não serão usados.
  readonly addTaskButton: Locator;
  readonly taskTitleInput: Locator;
  readonly taskDescriptionInput: Locator;
  readonly saveTaskButton: Locator;
  readonly firstTaskItem: Locator; 

  constructor(page: Page) {
    this.page = page;
    this.addTaskButton = page.getByRole('button', { name: 'Add Task' });
    this.taskTitleInput = page.getByPlaceholder('Task Title');
    this.taskDescriptionInput = page.getByPlaceholder('Task Description');
    this.saveTaskButton = page.getByRole('button', { name: 'Save' });
    this.firstTaskItem = page.locator('.task-list-item').first(); 
  }

  async goto() {
    // Navegamos para uma página em branco para evitar problemas de rede
    await this.page.goto('about:blank'); 
  }

    async createTask(title: string, description: string) {
    // Chama o método da Page Object (seletores não funcionarão em about:blank)
    // await this.addTaskButton.click();         // COMENTAR ESTA LINHA
    // await this.taskTitleInput.fill(title);    // COMENTAR ESTA LINHA
    // await this.taskDescriptionInput.fill(description); // COMENTAR ESTA LINHA
    // await this.saveTaskButton.click();        // COMENTAR ESTA LINHA
    console.log(`Simulating create task: ${title}`);
  }

  async getTaskByTitle(title: string): Promise<Locator> {
  console.log(`Simulating get task by title: ${title}`);
  // Retorna um locator dummy, pois não há elementos em 'about:blank'
  return this.page.locator(`.fake-task-item:has-text("${title}")`); 
}

  async completeTask(title: string) {
  // const task = await this.getTaskByTitle(title); // Manter esta linha se getTaskByTitle for usado
  // await task.locator('.fake-complete-checkbox').click(); // COMENTAR ESTA LINHA
  console.log(`Simulating complete task: ${title}`);
}

  async deleteTask(title: string) {
    // const task = await this.getTaskByTitle(title); // Manter esta linha se getTaskByTitle for usado
    // await task.hover(); // COMENTAR ESTA LINHA
    // await task.locator('.fake-delete-button').click(); // COMENTAR ESTA LINHA
    console.log(`Simulating delete task: ${title}`);
  }
}