# Projeto de Automação de Testes com Playwright e Page Object Model (POM)

Este projeto demonstra a implementação de testes de automação End-to-End (E2E) utilizando Playwright e TypeScript, seguindo a arquitetura Page Object Model (POM). O foco principal é em testes de funcionalidade de um aplicativo de gerenciamento de tarefas (como o ToDoMVC), cobrindo fluxos essenciais de usuário.

---

## 🚀 Funcionalidades Testadas (Exemplo: ToDoMVC)

* Adicionar novos itens à lista de tarefas.
* Marcar itens existentes como concluídos.
* Excluir itens da lista de tarefas.
* Limpar todos os itens concluídos.

---

## 🛠️ Tecnologias Utilizadas

* **Playwright:** Framework de automação de testes End-to-End.
* **TypeScript:** Linguagem de programação para tipagem estática e melhor manutenibilidade do código.
* **Node.js:** Ambiente de execução para JavaScript/TypeScript.
* **Page Object Model (POM):** Padrão de design para criar uma camada de abstração sobre a interface do usuário, melhorando a reutilização e manutenibilidade do código de teste.
* **JSON:** Para gerenciamento de dados de teste.

---

## 📂 Estrutura do Projeto


/playwright-custom-project
├── tests/
│   └── e2e/               # Contém os arquivos de teste End-to-End (.spec.ts)
│       └── todo.spec.ts   # Testes para as funcionalidades do ToDoMVC
├── page-objects/          # Implementação do Page Object Model
│   └── TodoPage.ts        # Page Object para a página principal do ToDoMVC
│   └── components/        # Componentes reutilizáveis (vazio por enquanto)
├── test-data/             # Dados de teste em formato JSON
│   ├── tasks.json         # Dados de exemplo para tarefas
│   └── users.json         # Dados de exemplo para usuários (não usados no ToDoMVC)
├── playwright.config.ts   # Configuração principal do Playwright
├── package.json           # Dependências do projeto e scripts
├── tsconfig.json          # Configuração do TypeScript
└── README.md              # Este arquivo!

---

## ⚙️ Configuração e Instalação

Para configurar e rodar este projeto em sua máquina local, siga os passos abaixo:

1.  **Pré-requisitos:**
    * Certifique-se de ter o **Node.js** (versão LTS recomendada) e o **npm** (gerenciador de pacotes do Node.js) instalados. Você pode verificar as versões com:
        ```bash
        node -v
        npm -v
        ```
    * (Opcional, mas recomendado para Windows) Considere usar o [NVM for Windows](https://github.com/com/coreybutler/nvm-windows) para gerenciar versões do Node.js.

2.  **Clonar o Repositório (ou Criar o Projeto Localmente):**
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    cd seu-repositorio # Ou cd playwright-custom-project se criou localmente
    ```

3.  **Instalar Dependências:**
    ```bash
    npm install
    ```
    Este comando instalará o Playwright e outras dependências listadas no `package.json`.

4.  **Instalar os Navegadores do Playwright:**
    ```bash
    npx playwright install
    ```
    Este comando baixa e instala os navegadores Chromium, Firefox e WebKit necessários para o Playwright.

---

## ▶️ Como Rodar os Testes

Certifique-se de estar na raiz do projeto (`playwright-custom-project/`) no seu terminal.

1.  **Rodar Todos os Testes (modo headless):**
    ```bash
    npx playwright test
    ```
    Os testes serão executados em segundo plano, e um sumário dos resultados será exibido no terminal.

2.  **Rodar Testes em Modo Debug (visual):**
    ```bash
    npx playwright test --debug
    ```
    Um navegador será aberto visivelmente, permitindo que você observe a execução dos testes passo a passo. O Playwright Inspector também será exibido para depuração.

3.  **Gerar e Abrir o Relatório HTML:**
    Após a execução dos testes, um relatório HTML detalhado é gerado. Para abri-lo em seu navegador padrão:
    ```bash
    npx playwright show-report
    ```

---

## 💡 Conceitos Chave Demonstrados

* **Page Object Model (POM):** Organização do código de teste em classes que representam as páginas ou componentes da aplicação. Isso aumenta a legibilidade, reusabilidade e manutenibilidade dos testes.
* **Gerenciamento de Dados de Teste:** Utilização de arquivos JSON separados (`test-data/`) para armazenar dados usados nos testes, facilitando a alteração e reuso.
* **Asserções Robustas:** Uso de `expect` do Playwright para verificar o estado da UI e o comportamento da aplicação.
* **Configuração do Playwright:** Uso do `playwright.config.ts` para definir `baseURL`, navegadores, timeouts e outras opções.

---

## 🚀 Próximos Passos (Potenciais Melhorias)

* **Integração CI/CD:** Configurar workflows no GitHub Actions ou GitLab CI/CD para executar os testes automaticamente em cada push ou Pull Request.
* **Testes de API:** Adicionar testes de integração/API usando a API de requisições HTTP do Playwright ou outras bibliotecas como Axios.
* **Múltiplos Ambientes:** Configurar diferentes `baseURL`s (dev, staging, produção) no `playwright.config.ts`.
* **Relatórios Customizados:** Explorar outros reporters do Playwright ou integrar com ferramentas de relatório mais avançadas.

---

**Autor:** Reinaldo Aparecido Fernandes