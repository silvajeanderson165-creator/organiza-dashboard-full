# ORGANIZA - Task Manager Workspace 🚀

<div align="center">
  <h3>Uma aplicação Full Stack completa desenvolvida do zero para gestão inteligente e ranqueamento de tarefas diárias.</h3>
  <img src="https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge" />
</div>

<br />

## 💻 Sobre o Projeto

O **ORGANIZA** é mais do que uma lista de tarefas, é uma prova de arquitetura modular focada em Clean UI/UX e desenvolvimento moderno Full-Stack (MERN). Criado para oferecer uma experiência de usuário responsiva, este projeto emprega design premium baseando-se em conceitos como *Glassmorphism*, *Dark/Light Mode* instantâneo e layout intuitivo, tudo apoiado por um ecossistema sólido no backend capaz de orquestrar milhares de requisições.

A concepção da aplicação foi pensada do princípio ao fim para demonstrar maturidade desde a escrita de *schemas* no banco de dados até a finalização do *Deploy* Serverless num pipeline na Vercel.

---

## 🛠️ Stack Tecnológico (O que movimenta esse projeto)

### 📌 Frontend / User Interface
Desenvolvido em cima de reatividade pura trazendo experiências de zero reload para o usuário final:
- **React v19**: Motor que lidera a renderização de componentes com a mais nova interface da tecnologia.
- **Vite.js v8**: Dev Server substituto do Webpack, o qual proveu uma montagem da aplicação ultra-rápida.
- **React Router DOM**: Orquestração impecável de Single Page Application (SPA), entregando fluidez de abas.
- **Axios**: Agente de interceptação e consumo enxuto da API.
- **Vanilla CSS3 Custom Design**: Estilização altamente rigorosa construída nativamente do zero (sem Tailwind/Bootstrap) com o intuito de mostrar extrema perícia e domínio em engenharia visual (CSS Gradients, Shadow DOMs e variáveis).
- **Context API**: Propagação de estado global nativo (especialmente Autenticação).
- **Lucide React**: Biblioteca vetorial SVG minimalista e moderna.

### 📌 Backend / API e Regra de Negócios
Totalmente assíncrono e pautado pelo protocolo REST:
- **Node.js + Express.js v5**: Base da API, contendo roteamento otimizado, Middlewares e divisão em MVC (Model-View-Controller).
- **MongoDB Atlas + Mongoose**: Banco de dados Não-Relacional (SaaS Cloud) com modelagem orientada a esquemas e validação estrita.
- **Autenticação Segura JWT (JSON Web Tokens)**: Criação de sessões stateless para que cada requisição em endpoints sensíveis passe pelo Middleware e se revalide individualmente.
- **Bcrypt**: Responsável pela Hasherização matemática das credenciais garantindo total isolamento de vazamento de dados primários da base de usuários.
- **DotEnv + Cors**: Padronização de acesso seguro entre Frontend-Backend, bem como sigilo de keys privadas.

### 📌 Arquitetura & Cloud
- **Vercel Serverless Platform**: Execução avançada lidando simultâneamente com a hospedagem via roteador *monorepo multi-services*.

---

## 🎯 Por que recrutar este autor baseando-se no código?

1. **Domínio de Fluxos Completos (E2E)**
   - Este projeto não utiliza "gambiarras" ou lógicas unicamente front-end. Há a completa e clara divisão entre o que é Interface e o que é Dado. O Banco de Dados é manipulado de forma higiênica.
2. **Capacidade com Seguranças Primárias**
   - Senhas passam por Salts aleatórios do Node. Interceptadores bloqueiam APIs abertas para usuários deslogados. O autor comprova que sabe a diferença entre segurança local vs. segurança de servidor.
3. **Senso Crítico Produtivo e Design System**
   - Como evidenciado na camada visual, existe a preocupação além do simples "funcionar". A plataforma não apenas valida credenciais; ela entrega mensagens de erro precisas (Toasts), bloqueios dinâmicos via botões enquanto a conexão (Loadings) atua, evidenciando mentalidade de desenvolvimento centrada no usuário final.

---

<br/>
<div align="center">
  Feito com dedicação 🧩 e muita lógica!
</div>
