const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Carrega variáveis do .env
dotenv.config();

// Conecta MongoDB
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Main Root Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Importar rotas (logo criaremos)
app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks'));

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Servidor rodando porta ${PORT}`);
  });
}

// Export para Serverless Function da Vercel
module.exports = app;
