import React from 'react';
import { User, ShieldCheck, Terminal, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

  const LoginPageSelection: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigate = (role: string) => {
      console.log(`Navigating to ${role} login page...`);
      navigate(`/${role}/login/`);
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-4 font-sans">
      
      {/* Main Card Container */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        
        {/* Header Section */}
        <div className="px-8 pt-10 pb-6 text-center">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
            ยินดีต้อนรับ
          </h1>
          <p className="text-gray-500 text-sm">
            กรุณาเลือกประเภทบัญชีเพื่อเข้าสู่ระบบ
          </p>
        </div>

        {/* Buttons Section */}
        <div className="px-8 pb-10 space-y-4">
          
          {/* 1. User Login Button */}
          <button
            onClick={() => handleNavigate('user')}
            className="group w-full relative flex items-center justify-between p-4 bg-white border-2 border-blue-100 rounded-xl hover:border-blue-500 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 ease-in-out"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <User size={24} />
              </div>
              <div className="text-left">
                <h3 className="text-gray-900 font-bold group-hover:text-blue-700">ผู้ใช้งานทั่วไป</h3>
                <p className="text-xs text-gray-400 font-medium">Customer / User</p>
              </div>
            </div>
            <ArrowRight className="text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" size={20} />
          </button>

          {/* 2. Admin Login Button */}
          <button
            onClick={() => handleNavigate('admin')}
            className="group w-full relative flex items-center justify-between p-4 bg-white border-2 border-indigo-100 rounded-xl hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-100 transition-all duration-300 ease-in-out"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                <ShieldCheck size={24} />
              </div>
              <div className="text-left">
                <h3 className="text-gray-900 font-bold group-hover:text-indigo-700">ผู้ดูแลระบบ</h3>
                <p className="text-xs text-gray-400 font-medium">Administrator</p>
              </div>
            </div>
            <ArrowRight className="text-gray-300 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all duration-300" size={20} />
          </button>

          {/* 3. Dev Login Button */}
          <button
            onClick={() => handleNavigate('dev')}
            className="group w-full relative flex items-center justify-between p-4 bg-white border-2 border-emerald-100 rounded-xl hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-100 transition-all duration-300 ease-in-out"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                <Terminal size={24} />
              </div>
              <div className="text-left">
                <h3 className="text-gray-900 font-bold group-hover:text-emerald-700">นักพัฒนา</h3>
                <p className="text-xs text-gray-400 font-medium">Developer Only</p>
              </div>
            </div>
            <ArrowRight className="text-gray-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all duration-300" size={20} />
          </button>

        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-8 py-4 text-center border-t border-gray-100">
          <p className="text-xs text-gray-400">
            © 2025 Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPageSelection;