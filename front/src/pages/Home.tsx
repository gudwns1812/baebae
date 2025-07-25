import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-br from-blue-100 to-cyan-100">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-10 drop-shadow">BaeBae에 오신것을 환영합니다.</h1>
      <div className="flex gap-6">
        <button
          onClick={() => navigate('/login')}
          className="px-8 py-3 rounded-lg bg-blue-500 text-white font-semibold text-lg shadow hover:bg-blue-600 transition"
        >
          로그인
        </button>
        <button
          onClick={() => navigate('/register')}
          className="px-8 py-3 rounded-lg bg-cyan-400 text-white font-semibold text-lg shadow hover:bg-cyan-500 transition"
        >
          회원가입
        </button>
      </div>
    </div>
  );
};

export default Home;