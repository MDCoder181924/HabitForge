import React, { useEffect, useRef } from 'react';
import { Link } from "react-router-dom" 

export default function Login() {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (glowRef.current) {
        glowRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
        glowRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-sans selection:bg-primary/30 relative overflow-hidden">
      
      {/* Dynamic interactive mouse follow glow */}
      <div 
        ref={glowRef}
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50vw) var(--mouse-y, 50vh), rgba(75, 226, 119, 0.05), transparent 80%)`
        }}
      />

      {/* Repeating fine tech grid lines and dots */}
      <div className="absolute inset-0 tech-grid pointer-events-none -z-20 opacity-70"></div>
      <div className="absolute inset-0 tech-dots pointer-events-none -z-20 opacity-80"></div>

      {/* Ambient glowing orbs */}
      <div className="absolute top-[10%] left-[-15%] w-[500px] h-[500px] bg-primary/4 blur-[120px] rounded-full pointer-events-none -z-10 animate-orb-float"></div>
      <div className="absolute bottom-[10%] right-[-15%] w-[500px] h-[500px] bg-primary/3 blur-[120px] rounded-full pointer-events-none -z-10 animate-orb-float" style={{ animationDelay: '-6s' }}></div>

      {/* Top Navbar */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5 w-full">
        <nav className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
          <a 
            href="#"
            className="text-xl font-bold text-primary font-display flex items-center gap-2 cursor-pointer focus:outline-none"
          >
            <span className="w-3.5 h-3.5 bg-primary rounded-full inline-block animate-pulse"></span>
            HabitForge
          </a>
          
          <Link
            className="flex items-center gap-2 text-xs font-mono tracking-widest text-on-surface-variant hover:text-primary uppercase transition-colors duration-300 cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Home
          </Link>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center px-6 py-12 z-10">
        <div className="w-full max-w-md animate-fade-in">
          
          {/* Glass Card Container */}
          <div className="glass-card rounded-3xl p-8 relative overflow-hidden glass-card-stroke tech-corners">
            {/* Tech Corner Brackets */}
            <div className="tech-corner-tl"></div>
            <div className="tech-corner-tr"></div>
            <div className="tech-corner-bl"></div>
            <div className="tech-corner-br"></div>

            {/* Header */}
            <div className="mb-8 text-center sm:text-left">
              <h2 className="text-3xl font-black text-on-surface font-display tracking-tight">
                Welcome Back
              </h2>
              <p className="text-sm text-on-surface-variant mt-2">
                Enter your credentials to access your HabitForge command center.
              </p>
            </div>

            {/* Social Authentication */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button
                type="button"
                className="flex items-center justify-center gap-3 bg-white/[0.02] border border-white/10 hover:border-white/20 text-on-surface text-sm font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:bg-white/[0.05] active:scale-98 cursor-pointer"
              >
                {/* Google SVG */}
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#EA4335"
                    d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.137 4.114-3.707 0-6.712-3.005-6.712-6.712s3.005-6.712 6.712-6.712c1.714 0 3.278.643 4.464 1.705l3.142-3.142C19.062 1.34 15.82 0 12.24 0 5.48 0 0 5.48 0 12.24s5.48 12.24 12.24 12.24c6.82 0 12.24-5.42 12.24-12.24 0-.783-.07-1.543-.2-2.285H12.24z"
                  />
                </svg>
                Google
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-3 bg-white/[0.02] border border-white/10 hover:border-white/20 text-on-surface text-sm font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:bg-white/[0.05] active:scale-98 cursor-pointer"
              >
                {/* GitHub SVG */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                GitHub
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-white/5"></div>
              <span className="mx-4 font-mono text-[9px] font-bold text-on-surface-variant/60 tracking-wider">
                OR CONTINUE WITH EMAIL
              </span>
              <div className="flex-grow border-t border-white/5"></div>
            </div>

            {/* Credentials Form */}
            <form className="space-y-5">
              {/* Email Input */}
              <div className="space-y-2">
                <label className="block font-mono text-[10px] font-bold text-on-surface-variant tracking-wider uppercase">
                  Email Address
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-base pointer-events-none select-none">
                    mail
                  </span>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="w-full bg-black/30 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-sm text-on-surface placeholder-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="font-mono text-[10px] font-bold text-on-surface-variant tracking-wider uppercase">
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-[10px] font-semibold text-primary/80 hover:text-primary transition-colors hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-base pointer-events-none select-none">
                    lock
                  </span>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full bg-black/30 border border-white/10 rounded-xl py-3.5 pl-11 pr-12 text-sm text-on-surface placeholder-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer select-none focus:outline-none"
                  >
                    <span className="material-symbols-outlined text-base">
                      visibility
                    </span>
                  </button>
                </div>
              </div>

              {/* Remember Me Option */}
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="w-4 h-4 bg-black/30 border border-white/10 rounded accent-primary text-primary focus:ring-0 focus:ring-offset-0 cursor-pointer"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2.5 text-xs text-on-surface-variant cursor-pointer select-none"
                >
                  Keep me logged in for 30 days
                </label>
              </div>

              {/* Submit Button */}
              <Link
              to="/dashboard"
                type="submit"
                className="w-full relative overflow-hidden bg-primary text-on-primary font-bold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-primary/10 hover:shadow-primary/20 active:scale-98 cursor-pointer text-sm font-sans"
              >
                Access Account
              </Link>
            </form>

            {/* Toggle Footer */}
            <div className="mt-8 text-center border-t border-white/5 pt-6">
              <p className="text-xs text-on-surface-variant">
                New to HabitForge?{' '}
                <Link
                to="/register"
                  className="font-bold text-primary hover:underline cursor-pointer focus:outline-none"
                >
                  Create free account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer copyright */}
      <footer className="py-6 border-t border-white/5 text-center text-[10px] font-mono text-on-surface-variant/40 tracking-widest uppercase">
        © {new Date().getFullYear()} HabitForge. ALL SYSTEM LOGS STANDBY.
      </footer>
    </div>
  );
}
