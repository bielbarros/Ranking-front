
# 📦 Commercial System Frontend — Angular

Este repositório contém o frontend do sistema comercial desenvolvido em Angular. A aplicação oferece uma interface dinâmica, responsiva e interativa, integrada com uma API RESTful, voltada para o gerenciamento de processos comerciais como cadastro de clientes, controle de estoque, vendas e relatórios.

---

## 🚀 Tecnologias Utilizadas

- [Angular CLI](https://angular.io/cli) v16+
- [TypeScript](https://www.typescriptlang.org/)
- [RxJS](https://rxjs.dev/)
- [SCSS](https://sass-lang.com/)
- [Angular Material](https://material.angular.io/) (ou Bootstrap)
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
- Integração com [API REST (Spring Boot)](https://spring.io/projects/spring-boot)

---

## 📁 Estrutura do Projeto

```bash
src/
├── app/
│   ├── core/                # Serviços, interceptors, guards e helpers
│   ├── shared/              # Componentes e módulos reutilizáveis
│   ├── features/            # Módulos de funcionalidades (ex: vendas, produtos, etc)
│   ├── layout/              # Componentes de layout (navbar, sidebar)
│   └── app-routing.module.ts
├── assets/                  # Recursos estáticos (imagens, JSONs, etc)
└── environments/            # Configurações de ambiente
```

---

## ⚙️ Instalação e Execução Local

### Pré-requisitos

- Node.js (v18+)
- Angular CLI
- Git

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/nome-do-repo.git

# Acesse o diretório do projeto
cd nome-do-repo

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
ng serve

# Acesse via http://localhost:4200/
```

---

## 🔐 Autenticação e Autorização

- Login com autenticação JWT
- Interceptor HTTP configurado para envio automático do token
- Guards protegendo rotas por perfis (admin, usuário, etc.)

---

## 📡 Integração com Backend

A comunicação é feita via **HTTPClient** usando endpoints RESTful. URLs e tokens são configuráveis via `environment.ts`.

Exemplo de consumo:

```typescript
this.http.get<Produto[]>(`${environment.apiUrl}/produtos`);
```

---

## 🧪 Testes

```bash
# Rodar testes unitários
ng test

# Rodar testes end-to-end
ng e2e
```

---

## 🛠️ Scripts Úteis

| Comando                  | Descrição                      |
|--------------------------|-------------------------------|
| `ng serve`               | Inicia o servidor de dev       |
| `ng build`               | Compila o projeto              |
| `npm run lint`           | Executa análise de código      |
| `npm run format`         | Formata os arquivos com Prettier |

---

## 🗂️ Funcionalidades Implementadas

- [] Login e logout com JWT
- [x] Cadastro e edição de colaboradores
- [] Dashboard com gráficos (em breve)

---

## 📌 Roadmap

- [ ] Internacionalização (i18n)
- [ ] Responsividade mobile completa
- [ ] Tema dark/light
- [ ] Implementação de PWA

---

## 👨‍💻 Desenvolvido por

**Gabriel Barros**

Desenvolvedor Full Stack | Foco em Java, Angular e soluções modernas para web.

---
