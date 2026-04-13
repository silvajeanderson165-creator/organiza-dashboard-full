import React, { useState } from 'react';
import api from '../services/api';
import { useParams, useNavigate, Link } from 'react-router-dom';

const ResetPassword = () => {
  const { id, token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg('');
    setError('');
    
    try {
      const res = await api.post(`/auth/reset-password/${id}/${token}`, { password });
      setMsg(res.data.msg);
      setTimeout(() => navigate('/login'), 3000);
    } catch (err) {
      setError(err.response?.data?.msg || 'Erro ao redefinir a senha.');
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
      
      <h1>Criar nova senha</h1>
      <p>Digite a sua nova senha abaixo.</p>

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
          <label className="input-label">Nova Senha</label>
          <input
            type="password"
            className="form-input"
            placeholder="Nova senha forte"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{ marginBottom: 0 }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: '100%', padding: '0.85rem' }}
          disabled={loading || msg !== ''}
        >
          {loading ? 'Salvando...' : 'Salvar Nova Senha'}
        </button>
      </form>

      <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
        <Link to="/login" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>Voltar ao Login</Link>
      </div>
    </div>
  );
};

export default ResetPassword;
