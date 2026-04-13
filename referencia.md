README.md (Raiz do Projeto)
 # 📋 Task Manager - Gerenciador de Tarefas Full Stack

Sistema completo de gerenciamento de tarefas com autenticação, desenvolvido com MERN Stack (MongoDB, Express, React, Node.js).

## 🚀 Funcionalidades

- ✅ Autenticação de usuários (Register/Login/Logout)
- ✅ CRUD completo de tarefas
- ✅ Filtros por status (Pendente, Em Progresso, Concluída)
- ✅ Sistema de prioridades (Baixa, Média, Alta)
- ✅ Datas de vencimento
- ✅ Indicador de tarefas atrasadas
- ✅ Dashboard com estatísticas
- ✅ Design responsivo
- ✅ Proteção de rotas
- ✅ JWT Authentication

## 🛠️ Tecnologias Utilizadas

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- Bcrypt.js

### Frontend
- React.js
- React Router DOM
- Axios
- CSS3

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js (v14 ou superior)
- MongoDB instalado e rodando
- npm ou yarn

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/task-manager.git
cd task-manager.  

2. Configurar e iniciar o Backend 
# Entrar na pasta do backend
cd backend

# Instalar dependências
npm install

# Criar arquivo .env
cp .env.example .env

# Editar o arquivo .env com suas configurações
# MONGO_URI=mongodb://localhost:27017/taskmanager
# JWT_SECRET=sua_chave_secreta_aqui
# PORT=5000

# Iniciar MongoDB (em outro terminal)
mongod

# Iniciar o servidor
npm run dev  

3. Configurar e iniciar o Frontend 
# Abrir novo terminal e entrar na pasta do frontend
cd frontend

# Instalar dependências
npm install

# Iniciar aplicação React
npm start  


📁 Estrutura do Projeto  

task-manager/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── tasks.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── TaskCard.js
    │   │   ├── TaskCard.css
    │   │   ├── TaskForm.js
    │   │   └── TaskForm.css
    │   ├── context/
    │   │   └── AuthContext.js
    │   ├── pages/
    │   │   ├── Login.js
    │   │   ├── Login.css
    │   │   ├── Register.js
    │   │   ├── Register.css
    │   │   ├── Dashboard.js
    │   │   └── Dashboard.css
    │   ├── services/
    │   │   └── api.js
    │   ├── App.js
    │   ├── App.css
    │   ├── index.js
    │   └── index.css
    ├── .gitignore
    └── package.json  



     Variáveis de Ambiente
Backend (.env)
  
MONGO_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=sua_chave_secreta_super_segura
PORT=5000  

API Endpoints  
Autenticação
POST /api/auth/register - Registrar novo usuário
POST /api/auth/login - Login de usuário
GET /api/auth/user - Obter dados do usuário logado
Tarefas
GET /api/tasks - Listar todas as tarefas do usuário
GET /api/tasks/:id - Obter tarefa específica
POST /api/tasks - Criar nova tarefa
PUT /api/tasks/:id - Atualizar tarefa
DELETE /api/tasks/:id - Deletar tarefa
🎨 Screenshots
Tela de Login


Dashboard


Gerenciamento de Tarefas


👨‍💻 Desenvolvedor
Seu Nome - @seu_usuario

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

🤝 Contribuindo
Contribuições são bem-vindas! Sinta-se livre para abrir issues e pull requests.

Fork o projeto
Crie sua branch de feature (git checkout -b feature/NovaFuncionalidade)
Commit suas mudanças (git commit -m 'Adiciona nova funcionalidade')
Push para a branch (git push origin feature/NovaFuncionalidade)
Abra um Pull Request  


Contato  

Para dúvidas ou sugestões, entre em contato:

Email: seu.email@exemplo.com
LinkedIn: Seu Nome  

---

## **backend/.env.example**

```env
# Configurações do Banco de Dados
MONGO_URI=mongodb://localhost:27017/taskmanager

# Chave Secreta JWT (MUDE ESTA CHAVE!)
JWT_SECRET=mude_esta_chave_para_algo_super_seguro_e_aleatorio

# Porta do Servidor
PORT=5000

# Ambiente
NODE_ENV=development 

backend/.gitignore  
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
logs
*.log

# OS
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
*.swp
*.swo
*~  
frontend/.gitignore  
# Dependencies
/node_modules
/.pnp
.pnp.js

# Testing
/coverage

# Production
/build

# Misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE
.vscode/
.idea/
*.swp
*.swo
*~ 
 .gitignore (Raiz do Projeto) 
 # Dependencies
node_modules/
*/node_modules/

# Environment variables
.env
*/.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# OS
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# Build
/frontend/build
/backend/dist

# Testing
/coverage 
INSTRUÇÕES_DE_INSTALACAO.md  
# 📖 Instruções Detalhadas de Instalação

## 🔧 Passo a Passo Completo

### 1️⃣ Preparar o Ambiente

#### Instalar Node.js
1. Acesse https://nodejs.org/
2. Baixe e instale a versão LTS
3. Verifique a instalação:
```bash
node --version
npm --version  
Instalar MongoDB
Windows:

Baixe em https://www.mongodb.com/try/download/community
Execute o instalador
Adicione ao PATH do sistema 
Mac (usando Homebrew): 
brew tap mongodb/brew
brew install mongodb-community
Linux (Ubuntu/Debian): 
sudo apt-get update
sudo apt-get install -y mongodb 

Iniciar MongoDB 
# Windows
mongod

# Mac/Linux
sudo service mongodb start
# ou
mongod --dbpath ~/data/db

Criar Estrutura do Projeto 

# Criar pasta principal
mkdir task-manager
cd task-manager

# Criar pastas backend e frontend
mkdir backend frontend  
 
 Configurar Backend 

 cd backend

# Inicializar projeto Node.js
npm init -y

# Instalar dependências
npm install express mongoose bcryptjs jsonwebtoken dotenv cors

# Instalar dependências de desenvolvimento
npm install --save-dev nodemon

# Criar estrutura de pastas
mkdir config controllers middleware models routes  

Criar arquivo package.json scripts: 
 Edite o package.json e adicione os scripts:
"scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js" } 
    Criar arquivo .env: 
    echo "MONGO_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=minha_chave_secreta_super_segura_123456
PORT=5000" > .env 

Configurar Frontend 
cd ../frontend

# Criar projeto React
npx create-react-app .

# Instalar dependências adicionais
npm install axios react-router-dom

# Criar estrutura de pastas
mkdir src/components src/context src/pages src/services 

Copiar os Arquivos
Copie todos os arquivos fornecidos para suas respectivas pastas conforme a estrutura do projeto. 
 Executar o Projeto 
 Terminal 1 - MongoDB: mongod 
 Terminal 2 - Backend: cd backend
npm run dev 
Terminal 3 - Frontend: cd frontend
npm start 

 Acessar a Aplicação
Frontend: http://localhost:3000
Backend API: http://localhost:5000
 Testar a Aplicação
Acesse http://localhost:3000
Clique em "Cadastre-se"
Crie uma nova conta
Faça login
Crie suas primeiras tarefas!
⚠️ Problemas Comuns
MongoDB não inicia
Verifique se a porta 27017 está livre
Certifique-se de ter permissões adequadas
No Windows, execute como Administrador
Erro de CORS
Verifique se o backend está usando cors()
Confirme a porta correta no frontend (api.js)
Token inválido
Limpe o localStorage do navegador
Faça logout e login novamente
Verifique se o JWT_SECRET está configurado
Porta já em uso
# Matar processo na porta 5000
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5000 | xargs kill -9 

Próximos Passos
Adicionar validações mais robustas
Implementar upload de arquivos
Adicionar notificações
Criar testes automatizados
Deploy em produção (Heroku, Vercel, etc)

---

## **COMANDOS_UTEIS.md**

```markdown
# 🛠️ Comandos Úteis

## Backend

### Desenvolvimento
```bash
npm run dev              # Iniciar com nodemon
npm start               # Iniciar em produção 

MongoDB 
mongod                  # Iniciar MongoDB
mongo                   # Abrir shell do MongoDB
use taskmanager         # Usar banco de dados
show collections        # Mostrar coleções
db.tasks.find()         # Ver todas as tarefas
db.users.find()         # Ver todos os usuários
db.tasks.deleteMany({}) # Limpar todas as tarefas
db.users.deleteMany({}) # Limpar todos os usuários  
Frontend
Desenvolvimento  npm start               # Iniciar app React
npm run build           # Build para produção
npm test                # Executar testes 
Limpar Cache 
rm -rf node_modules
rm package-lock.json
npm install 
Git
Básico git init
git add .
git commit -m "Initial commit"
git remote add origin <url>
git push -u origin main 
Branches git checkout -b feature/nova-funcionalidade
git checkout main
git merge feature/nova-funcionalidade 
NPM
Atualizar Pacotes   npm update              # Atualizar todos
npm outdated           # Ver pacotes desatualizados
npm install <pacote>@latest  # Atualizar específico 
Limpar npm cache clean --force
rm -rf node_modules package-lock.json
npm install 

---

## ✅ **CHECKLIST FINAL DO PROJETO**

```markdown
# ✅ Checklist de Arquivos do Projeto

## Backend
- [x] backend/package.json
- [x] backend/server.js
- [x] backend/.env
- [x] backend/.env.example
- [x] backend/.gitignore
- [x] backend/config/db.js
- [x] backend/models/User.js
- [x] backend/models/Task.js
- [x] backend/middleware/auth.js
- [x] backend/routes/auth.js
- [x] backend/routes/tasks.js

## Frontend
- [x] frontend/package.json
- [x] frontend/.gitignore
- [x] frontend/public/index.html
- [x] frontend/src/index.js
- [x] frontend/src/index.css
- [x] frontend/src/App.js
- [x] frontend/src/App.css
- [x] frontend/src/services/api.js
- [x] frontend/src/context/AuthContext.js
- [x] frontend/src/pages/Login.js
- [x] frontend/src/pages/Login.css
- [x] frontend/src/pages/Register.js
- [x] frontend/src/pages/Register.css
- [x] frontend/src/pages/Dashboard.js
- [x] frontend/src/pages/Dashboard.css
- [x] frontend/src/components/TaskCard.js
- [x] frontend/src/components/TaskCard.css
- [x] frontend/src/components/TaskForm.js
- [x] frontend/src/components/TaskForm.css

## Raiz
- [x] README.md
- [x] .gitignore
- [x]


