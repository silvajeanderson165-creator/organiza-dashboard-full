const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const User = require('../models/User');

// POST /api/auth/register
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({ username, email, password });
    
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    
    await user.save();
    
    const payload = { user: { id: user.id } };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' }, (err, token) => {
      if (err) throw err;
      res.json({ token, user: { id: user.id, username: user.username, email: user.email }});
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const payload = { user: { id: user.id } };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' }, (err, token) => {
      if (err) throw err;
      res.json({ token, user: { id: user.id, username: user.username, email: user.email } });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// GET /api/auth/user
router.get('/user', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

const nodemailer = require('nodemailer');

// POST /api/auth/forgot-password
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ msg: 'E-mail não encontrado.' });
    }

    // Cria um JWT descartável assinado com a senha atual (se ele trocar a senha depois, o link expira!)
    const secret = process.env.JWT_SECRET + user.password;
    const token = jwt.sign({ id: user.id }, secret, { expiresIn: '15m' });

    // O Frontend precisa estar rodando para a pessoa clicar no e-mail (usamos o padrão do Vercel host ou localhost)
    const frontendUrl = process.env.NODE_ENV === 'production' 
      ? 'https://organiza-dashboard-full.vercel.app' // Altere para a sua url da vercel depois
      : 'http://localhost:3005';
      
    const resetLink = `${frontendUrl}/reset-password/${user.id}/${token}`;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: `"ORGANIZA Suporte" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Recuperação de Senha - ORGANIZA',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #1e5a44;">Redefinição de Senha</h2>
          <p>Você solicitou a recuperação de senha no Organiza Dashboard.</p>
          <p>Clique no botão abaixo para criar uma senha nova. O link é válido por apenas 15 minutos.</p>
          <a href="${resetLink}" style="display: inline-block; background-color: #1e5a44; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 10px;">
            Redefinir Senha
          </a>
          <p style="margin-top: 20px; font-size: 12px; color: #777;">Se você não solicitou isso, ignore este e-mail.</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    res.json({ msg: 'E-mail enviado com sucesso. Verifique sua caixa de entrada.' });
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor ao enviar e-mail.');
  }
});

// POST /api/auth/reset-password/:id/:token
router.post('/reset-password/:id/:token', async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ msg: 'Link inválido ou usuário não encontrado.' });

    // A assinatura do token é baseada na senha atual
    const secret = process.env.JWT_SECRET + user.password;
    
    try {
      jwt.verify(token, secret);
    } catch (err) {
      return res.status(400).json({ msg: 'Token expirado ou inválido. Solicite novamente.' });
    }

    // Encripata a senha nova
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    res.json({ msg: 'Senha redefinida com sucesso! Você já pode fazer login.' });
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor ao redefinir a senha.');
  }
});

module.exports = router;
