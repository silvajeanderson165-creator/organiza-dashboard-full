const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  status: {
    type: String,
    enum: ['Pendente', 'Em Progresso', 'Concluída'],
    default: 'Pendente'
  },
  priority: {
    type: String,
    enum: ['Baixa', 'Média', 'Alta'],
    default: 'Média'
  },
  dueDate: {
    type: Date
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
