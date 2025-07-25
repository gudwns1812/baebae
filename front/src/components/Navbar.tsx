import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav className="flex justify-between items-center px-8 py-4 bg-blue-500 shadow text-white">
    <Link to="/" className="text-2xl font-extrabold tracking-wide hover:text-cyan-200 transition">BaeBae</Link>
    <div>
      <Link to="/login" className="ml-6 font-semibold hover:text-cyan-200 transition">로그인</Link>
      <Link to="/register" className="ml-6 font-semibold hover:text-cyan-200 transition">회원가입</Link>
    </div>
  </nav>
);

export default Navbar;