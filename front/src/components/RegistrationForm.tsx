import React, { useState } from 'react';

const RegistrationForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });
      if (response.ok) {
        setMessage('회원가입 성공!');
      } else {
        setMessage('회원가입 실패');
      }
    } catch (error) {
      setMessage('서버 오류');
    }
  };

  return (
    <form
      className="max-w-md mx-auto mt-16 bg-white rounded-2xl shadow-lg p-10 flex flex-col gap-6"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-blue-600 mb-2 text-center">회원가입</h2>
      <div className="flex flex-col gap-2">
        <label htmlFor="username" className="font-semibold text-gray-700">Username</label>
        <input
          type="text"
          id="username"
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-semibold text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="font-semibold text-gray-700">Password</label>
        <input
          type="password"
          id="password"
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="mt-2 bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition"
      >
        회원가입
      </button>
      {message && <div className="text-center text-blue-500 font-semibold">{message}</div>}
    </form>
  );
};

export default RegistrationForm;