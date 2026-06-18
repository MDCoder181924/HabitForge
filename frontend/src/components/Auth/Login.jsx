import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const glowPrimary = document.querySelector('.glow-primary');
      const glowSecondary = document.querySelector('.glow-secondary');
      if (!glowPrimary || !glowSecondary) return;
      
      const x = e.clientX;
      const y = e.clientY;
      
      const moveX_p = (x - window.innerWidth / 2) / 25;
      const moveY_p = (y - window.innerHeight / 2) / 25;
      
      const moveX_s = (x - window.innerWidth / 2) / -35;
      const moveY_s = (y - window.innerHeight / 2) / -35;
      
      glowPrimary.style.transform = `translate(${moveX_p}px, ${moveY_p}px)`;
      glowSecondary.style.transform = `translate(${moveX_s}px, ${moveY_s}px)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 font-body-lg text-on-background bg-background relative overflow-hidden w-full">
      <div className="glow-spot glow-primary"></div>
      <div className="glow-spot glow-secondary"></div>
      
      <div className="w-full max-w-md glass-card rounded-xl p-8 md:p-12 relative overflow-hidden rim-light">
        <div className="mb-10 text-center">
          <Link to="/" className="font-headline-lg text-headline-lg text-primary mb-2 block hover:opacity-90">
            HabitForge
          </Link>
          <p className="font-body-sm text-body-sm text-on-surface-variant">Stay disciplined, track your progress.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider block" htmlFor="email">
              Email Address
            </label>
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">
                mail
              </span>
              <input 
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-3 pl-10 pr-4 text-on-surface placeholder:text-on-surface-variant/40 transition-all input-focus-ring" 
                id="email" 
                name="email" 
                placeholder="name@example.com" 
                required 
                type="email"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider block" htmlFor="password">
                Password
              </label>
              <a className="font-body-sm text-body-sm text-secondary hover:text-primary transition-colors" href="#">
                Forgot password?
              </a>
            </div>
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">
                lock
              </span>
              <input 
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-3 pl-10 pr-4 text-on-surface placeholder:text-on-surface-variant/40 transition-all input-focus-ring" 
                id="password" 
                name="password" 
                placeholder="••••••••" 
                required 
                type="password"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="relative flex items-center">
              <input 
                className="w-4 h-4 rounded border-outline-variant bg-surface-container-lowest text-primary focus:ring-primary/20 focus:ring-offset-0 transition-all cursor-pointer" 
                id="remember" 
                name="remember" 
                type="checkbox"
              />
            </div>
            <label className="font-body-sm text-body-sm text-on-surface-variant select-none cursor-pointer" htmlFor="remember">
              Remember me for 30 days
            </label>
          </div>
          
          <div className="space-y-4 pt-4">
            <button 
              className="w-full bg-primary text-on-primary font-headline-md text-headline-md py-3 rounded-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer" 
              type="submit"
            >
              Login
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
            
            <div className="relative flex items-center py-2">
              <div className="flex-grow border-t border-outline-variant/30"></div>
              <span className="flex-shrink mx-4 font-label-caps text-label-caps text-on-surface-variant/40 uppercase">
                Or continue with
              </span>
              <div className="flex-grow border-t border-outline-variant/30"></div>
            </div>
            
            <button 
              className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface font-body-lg text-body-lg py-3 rounded-lg hover:bg-surface-container-low active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer" 
              type="button"
              onClick={() => navigate('/dashboard')}
            >
              <img 
                alt="Google Logo" 
                className="w-5 h-5 grayscale opacity-80" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_D1WONqvq3P3laPdYfT2jp9NBGIXJcOGp83YsQ4SxwvYDGBS_YkEGANf3PrDLT4RoWe8pCbCR2thKqwZGefo9XtBJpwv9LyBfQFh5z-M0QW25sX2nkykaGo6wiqf5BcBR2k1od3_EeZkFEsDdpx7pCmvCNrsTCoIHv1bfWTkS7nHO84QtrB7UlynSLvrYMmjqjOWzVZgq4VAssnOm37Z980uxlN6Mxj9uuudWfIbn7QCaHc_7u4904958j2bWcLft6YBj0vH-GdE"
              />
              Sign in with Google
            </button>
          </div>
        </form>
        
        <div className="mt-8 pt-8 border-t border-outline-variant/30 text-center">
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Don't have an account?{' '}
            <Link className="text-primary font-bold hover:underline transition-all" to="/register">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      
      <footer className="absolute bottom-8 left-0 w-full flex flex-col items-center gap-4 px-6 md:flex-row md:justify-between md:px-12 pointer-events-none">
        <p className="font-label-caps text-label-caps text-on-surface-variant/30 uppercase tracking-[0.2em]">
          © 2024 HabitForge. Built for peak performance.
        </p>
        <div className="flex gap-6 pointer-events-auto">
          <a className="font-label-caps text-label-caps text-on-surface-variant/40 hover:text-primary transition-colors" href="#">Privacy</a>
          <a className="font-label-caps text-label-caps text-on-surface-variant/40 hover:text-primary transition-colors" href="#">Terms</a>
        </div>
      </footer>
    </div>
  );
}
