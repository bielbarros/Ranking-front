
# 📦 Commercial System Frontend — Angular

Este repositório contém o frontend do sistema comercial desenvolvido em Angular. A aplicação oferece uma interface dinâmica, responsiva e interativa, integrada com uma API RESTful, voltada para o gerenciamento de processos comerciais e acompanhamento de desempenho e metas, podendo cadastrar funcionários e listar metas batidas e pontos adicionados para gestão de métricas.

---

## 🚀 Tecnologias Utilizadas

- [Angular CLI](https://angular.io/cli) v16+
- [TypeScript](https://www.typescriptlang.org/)
- [Angular Material](https://material.angular.io/) (ou Bootstrap)
- Integração com [API REST (Spring Boot)](https://spring.io/projects/spring-boot)

---

## 📸 Capturas de Tela

### 🏠 Tela Principal
![Tela Principal](./src/assets/telaPrincipal.png)

### 📌 Cadastro
![Cadastro](./src/assets/cadastro.png)

### 📝 Edição
![Edição](./src/assets/edição.png)

### 🗑️ Exclusão
![Exclusão](./src/assets/exclusão.png)

### 📄 PDF Gerado
![PDF Gerado](./src/assets/pdfGerado.png)



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


## 📡 Integração com Backend

A comunicação é feita via **HTTPClient** usando endpoints RESTful. URLs e tokens são configuráveis via `environment.ts`.

Exemplo de consumo:

```typescript
this.http.get<Produto[]>(`${environment.apiUrl}/produtos`);
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

- [] Login e logout com JWT (em breve)
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
