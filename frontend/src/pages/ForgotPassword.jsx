import React, { useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg('');
    setError('');
    
    try {
      const res = await api.post('/auth/forgot-password', { email });
      setMsg(res.data.msg);
    } catch (err) {
      setError(err.response?.data?.msg || 'Erro ao enviar e-mail.');
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
      
      <h1>Esqueci a senha</h1>
      <p>Digite seu e-mail para receber um link de redefinição.</p>

      {error && (
        <div style={{ background: '#fee2e2', color: '#991b1b', padding: '0.85rem 1rem', borderRadius: '8px', marginBottom: '1.25rem', fontSize: '0.85rem', fontWeight: '500' }}>
          {error}
        </div>
      )}

      {msg && (
        <div style={{ background: '#dcfce7', color: '#166534', padding: '0.85rem 1rem', borderRadius: '8px', marginBottom: '1.25rem', fontSize: '0.85rem', fontWeight: '500' }}>
          {msg}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1.5rem' }}>
          <label className="input-label">E-mail</label>
          <input
            type="email"
            className="form-input"
            placeholder="voce@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
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
          {loading ? 'Enviando...' : 'Enviar Link de Recuperação'}
        </button>
      </form>

      <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
        Lembrou da senha? <Link to="/login" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>Voltar ao Login</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
