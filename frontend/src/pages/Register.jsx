import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await register(formData.username, formData.email, formData.password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.msg || 'Erro ao registrar.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
        <div className="logo-icon"></div>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary)' }}>ORGANIZA</h2>
      </div>
      
      <h1>Comece sua jornada</h1>
      <p>Crie uma conta para organizar suas tarefas.</p>

      {error && (
        <div style={{
          background: '#fee2e2',
          color: '#991b1b',
          padding: '0.85rem 1rem',
          borderRadius: '8px',
          marginBottom: '1.25rem',
          fontSize: '0.85rem',
          fontWeight: '500',
        }}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label className="input-label">Nome de Usuário</label>
          <input
            type="text"
            className="form-input"
            placeholder="Como devemos chamar você?"
            value={formData.username}
            onChange={e => setFormData({ ...formData, username: e.target.value })}
            required
            style={{ marginBottom: 0 }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label className="input-label">E-mail</label>
          <input
            type="email"
            className="form-input"
            placeholder="voce@email.com"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            required
            style={{ marginBottom: 0 }}
          />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label className="input-label">Senha</label>
          <input
            type="password"
            className="form-input"
            placeholder="Senha forte"
            value={formData.password}
            onChange={e => setFormData({ ...formData, password: e.target.value })}
            required
            style={{ marginBottom: 0 }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: '100%', padding: '0.85rem' }}
          disabled={loading}
        >
          {loading ? 'Criando...' : 'Criar Conta'}
        </button>
      </form>

      <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
        Já tem uma conta? <Link to="/login" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>Entrar</Link>
      </div>
    </div>
  );
};

export default Register;
