import React, { useState } from "react";
import {
  Shield,
  Search,
  AlertCircle,
  CheckCircle,
  ShieldAlert,
  History,
  Trash2,
} from "lucide-react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzePrompt = () => {
    if (!input.trim()) return;
    setLoading(true);

    // Simulating AI Analysis for Safety and Equity
    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      const hasBias =
        lowerInput.includes("better than") ||
        lowerInput.includes("lazy") ||
        lowerInput.includes("always");
      const isUnsafe =
        lowerInput.includes("hack") ||
        lowerInput.includes("bypass") ||
        lowerInput.includes("exploit");

      setResult({
        safetyScore: isUnsafe ? 15 : hasBias ? 55 : 99,
        status: isUnsafe
          ? "High Risk"
          : hasBias
            ? "Bias Detected"
            : "Verified Safe",
        suggestion: isUnsafe
          ? "Critical: This prompt violates safety guidelines."
          : hasBias
            ? "Warning: Potential socio-economic bias detected. Use neutral descriptors."
            : "Success: Prompt follows equitable AI standards.",
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-12 border-b border-slate-800 pb-6">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg shadow-[0_0_15px_rgba(37,99,235,0.4)]">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-black tracking-tighter text-white uppercase">
              Trust-Lens <span className="text-blue-500">AI</span>
            </h1>
          </div>
          <div className="hidden md:flex gap-4 text-xs font-bold text-slate-500 tracking-widest uppercase">
            <span>Safety Engine v4.0</span>
            <span className="text-green-500">● System Online</span>
          </div>
        </header>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#1e293b] rounded-3xl p-1 border border-slate-700 shadow-2xl">
              <div className="p-4 flex items-center justify-between border-b border-slate-700">
                <label
                  htmlFor="prompt-input"
                  className="text-sm font-bold uppercase tracking-widest text-slate-400 cursor-pointer"
                >
                  Prompt Input Engine
                </label>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
              </div>
              <textarea
                id="prompt-input"
                name="prompt-input"
                className="w-full h-72 p-6 bg-transparent text-slate-100 placeholder-slate-600 outline-none resize-none text-lg leading-relaxed"
                placeholder="Enter prompt for safety and bias auditing..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button
              onClick={analyzePrompt}
              disabled={loading}
              className="w-full py-5 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 text-white rounded-2xl font-black text-lg shadow-[0_10px_20px_rgba(37,99,235,0.2)] transition-all active:scale-[0.98] flex items-center justify-center gap-3"
            >
              {loading ? (
                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <Search size={24} />
              )}
              {loading ? "RUNNING AUDIT..." : "ANALYZE & SANITIZE"}
            </button>
          </div>

          {/* Report Section */}
          <div className="lg:col-span-5">
            <div className="bg-[#1e293b] rounded-3xl border border-slate-700 shadow-2xl overflow-hidden h-full flex flex-col">
              <div className="bg-slate-800/50 p-6 border-b border-slate-700">
                <h2 className="text-xl font-bold text-white flex items-center gap-3">
                  <ShieldAlert className="text-blue-400" /> Audit Intelligence
                </h2>
              </div>

              <div className="p-8 grow flex flex-col justify-center">
                {!result ? (
                  <div className="text-center space-y-4 py-12">
                    <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-700">
                      <History className="text-slate-600 w-10 h-10" />
                    </div>
                    <p className="text-slate-500 font-medium italic">
                      System ready. Awaiting input for real-time sanitization
                      audit.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
                    <div>
                      <div className="flex justify-between items-end mb-3">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                          Trust Score
                        </span>
                        <span
                          className={`text-5xl font-black ${
                            result.safetyScore > 80
                              ? "text-green-400"
                              : result.safetyScore > 40
                                ? "text-yellow-400"
                                : "text-red-500"
                          }`}
                        >
                          {result.safetyScore}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-800 h-4 rounded-full p-1 border border-slate-700">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ${
                            result.safetyScore > 80
                              ? "bg-green-400"
                              : result.safetyScore > 40
                                ? "bg-yellow-400"
                                : "bg-red-500"
                          }`}
                          style={{
                            width: `${result.safetyScore}%`,
                            boxShadow: "0 0 15px currentColor",
                          }}
                        ></div>
                      </div>
                    </div>

                    <div
                      className={`p-6 rounded-2xl border-2 ${
                        result.status === "Verified Safe"
                          ? "bg-green-500/5 border-green-500/20"
                          : "bg-red-500/5 border-red-500/20"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        {result.status === "Verified Safe" ? (
                          <CheckCircle className="text-green-400" size={24} />
                        ) : (
                          <AlertCircle className="text-red-400" size={24} />
                        )}
                        <span className="text-lg font-bold text-white">
                          {result.status}
                        </span>
                      </div>
                      <p className="text-slate-400 leading-relaxed font-medium">
                        {result.suggestion}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-slate-800">
                      <button
                        onClick={() => {
                          setResult(null);
                          setInput("");
                        }}
                        className="text-slate-500 hover:text-white flex items-center gap-2 text-sm font-bold transition-colors"
                      >
                        <Trash2 size={16} /> CLEAR SESSION
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
