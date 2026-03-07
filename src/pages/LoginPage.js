import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    // stubbed login logic
    if (email && password) {
      onLogin && onLogin();
      navigate('/'); // go to home after login
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-page colorful">
        <div className="login-left">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Email
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </label>
            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </label>
            <button type="submit">Sign in</button>
          </form>
        </div>
        <div className="login-right">
          <div className="illustration">
            <img src="https://via.placeholder.com/400x400.png?text=Shopping" alt="shopping" />
          </div>
        </div>
      </div>
    </div>
  );
}
