import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await login(formData.email, formData.password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.msg || 'Erro no login. Verifique suas credenciais.');
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
      
      <h1>Bem-vindo de volta!</h1>
      <p>Faça login para gerenciar suas tarefas eficientemente.</p>

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
        <div style={{ marginBottom: '1.25rem' }}>
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
          <label className="input-label" style={{ marginBottom: '0.3rem', display: 'block' }}>Senha</label>
          <input
            type="password"
            className="form-input"
            placeholder="••••••••"
            value={formData.password}
            onChange={e => setFormData({ ...formData, password: e.target.value })}
            required
            style={{ marginBottom: '0.5rem' }}
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link to="/forgot-password" style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>Esqueceu a senha?</Link>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: '100%', padding: '0.85rem' }}
          disabled={loading}
        >
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>

      <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
        Não tem uma conta? <Link to="/register" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>Cadastre-se</Link>
      </div>
    </div>
  );
};

export default Login;
