"use client";

import { useState } from "react";
import { supabase } from "@/supabase-client";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true); // Switch state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = isLogin 
      ? await supabase.auth.signInWithPassword({ email, password })
      : await supabase.auth.signUp({ email, password });

    if (error) {
      alert("System Error: " + error.message);
    } else {
      if (isLogin) {
        router.push("/");
        router.refresh();
      } else {
        alert("Registration successful! Check your email or try logging in.");
        setIsLogin(true);
      }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-linear-to-br from-gray-100 to-gray-400 rounded-[2.5rem] shadow-2xl border-x-8 border-t-8 border-gray-500 p-10 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-full h-full bg-white opacity-10 skew-x-12 pointer-events-none"></div>

        <div className="relative z-10">
          <header className="text-center mb-10">
            <h2 className="text-4xl font-black text-gray-800 uppercase italic tracking-tighter transition-all">
              User <span className="text-blue-600">{isLogin ? "Login" : "Signup"}</span>
            </h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto mt-2 rounded-full"></div>
          </header>

          <form className="space-y-5" onSubmit={handleAuth}>
            <div>
              <label className="block text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-1 ml-1">
                System ID (Email)
              </label>
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-800 border-2 border-gray-600 rounded-2xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all shadow-inner"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-1 ml-1">
                Access Code
              </label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-800 border-2 border-gray-600 rounded-2xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-all shadow-inner"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-4 rounded-2xl shadow-lg active:scale-95 transition-all uppercase tracking-widest mt-4 text-sm disabled:opacity-50"
            >
              {loading ? "Processing..." : isLogin ? "Authorize" : "Register Unit"}
            </button>
          </form>

          <footer className="mt-10 pt-6 border-t border-gray-400/50 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-xs text-gray-600 font-bold uppercase tracking-tight hover:text-blue-600 transition-colors"
            >
              {isLogin ? "Need a new account? Register System" : "Already have access? Login here"}
            </button>
          </footer>
        </div>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1 opacity-20">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-8 h-1 bg-gray-900 rounded-full"></div>
          ))}
        </div>
      </div>
    </div>
  );
}