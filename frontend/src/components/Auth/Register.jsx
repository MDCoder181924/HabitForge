import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../api/axios'
import { useUser } from '../../context/UserContext.jsx';
import { useGoogleLogin } from '@react-oauth/google';

export default function Register() {
  const navigate = useNavigate();
  const { refreshUser } = useUser();

  const [userName , setUserName] = useState("");
  const [userEmail , setUserEmail] = useState("");
  const [userPassword , setUserPassword] = useState("");
  const [userConfirmPassord , setUserConfirmPassword] = useState("");

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      const glow1 = document.getElementById('glow-1');
      const glow2 = document.getElementById('glow-2');
      if (glow1 && glow2) {
        glow1.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
        glow2.style.transform = `translate(${-x * 40}px, ${-y * 40}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleRegister =async (e) => {
    e.preventDefault();
    try{
      const res = await api.post('/auth/register' , {
        userName , 
        userEmail , 
        userPassword
      })
      if(res.data.success){
        await refreshUser();
        toast.success("Ragister successfully")
        navigate('/dashboard');
      }
      else{
        toast.error(res.data.message);
      }
    }
    catch(error){
      toast.error("Failed to Ragister");
      console.log(error);
    }
  };

  const HandlePassword = (e) =>{
    if(userPassword ==  userConfirmPassord){
      handleRegister(e);
    }else{
      toast("Enter Same Password");
    }
  }


    const handleGoogleLogin = useGoogleLogin({
      onSuccess: async (tokenResponse) => {
        try {
          const res = await api.post('/auth/google-login', {
            token: tokenResponse.credential || tokenResponse.access_token,
          });
          if (res.data.success) {
            await refreshUser();
            toast.success("Google Login successfully");
            navigate('/dashboard');
          } else {
            toast(res.data.message);
          }
        } catch (error) {
          console.error("Google login error:", error);
          toast.error("Google login failed");
        }
      },
      onError: () => {
        toast.error("Google Sign-In failed");
      }
    })

  return (
    <div className="bg-background min-h-screen flex flex-col w-full relative overflow-hidden selection:bg-primary/30 selection:text-primary">
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div id="glow-1" className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"></div>
        <div id="glow-2" className="absolute -bottom-[10%] -right-[10%] w-[30%] h-[30%] bg-secondary/10 rounded-full blur-[100px]"></div>
      </div>

      <main className="flex-grow flex items-center justify-center px-4 py-12 md:py-20 z-10">
        <div className="w-full max-w-md">
          {/* Glassmorphic Registration Card */}
          <div className="glass-card inner-glow rounded-xl p-8 md:p-10 flex flex-col gap-8">
            {/* Brand Anchor Header */}
            <div className="text-center">
              <Link to="/" className="font-headline-lg text-headline-lg text-primary tracking-tighter mb-2 block hover:opacity-90">
                HabitForge
              </Link>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Forge your path to peak performance.</p>
            </div>

            {/* Registration Form */}
            <form className="flex flex-col gap-5" onSubmit={HandlePassword}>
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider block" htmlFor="fullname">
                  Full Name
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] transition-colors">
                    person
                  </span>
                  <input 
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-3 pl-11 pr-4 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all font-body-sm text-body-sm input-focus-ring" 
                    id="fullname" 
                    name="fullname" 
                    placeholder="John Doe" 
                    required 
                    type="text"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider block" htmlFor="email">
                  Email Address
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] transition-colors">
                    mail
                  </span>
                  <input 
                  value={userEmail}
                  onChange={(e)=> setUserEmail(e.target.value)}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-3 pl-11 pr-4 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all font-body-sm text-body-sm input-focus-ring" 
                    id="email" 
                    name="email" 
                    placeholder="john@example.com" 
                    required 
                    type="email"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider block" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] transition-colors">
                    lock
                  </span>
                  <input 
                  value={userPassword}
                  onChange={(e)=> setUserPassword(e.target.value)}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-3 pl-11 pr-4 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all font-body-sm text-body-sm input-focus-ring" 
                    id="password" 
                    name="password" 
                    placeholder="••••••••" 
                    required 
                    type="password"
                  />
                </div>
              </div>

              {/* Confirm Password */}
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider block" htmlFor="confirm-password">
                  Confirm Password
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] transition-colors">
                    shield
                  </span>
                  <input 
                  value={userConfirmPassord}
                  onChange={(e)=> setUserConfirmPassword(e.target.value)}
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-3 pl-11 pr-4 text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all font-body-sm text-body-sm input-focus-ring" 
                    id="confirm-password" 
                    name="confirm-password" 
                    placeholder="••••••••" 
                    required 
                    type="password"
                  />
                </div>
              </div>

              {/* Create Account Button */}
              <button 
                className="w-full bg-primary hover:bg-primary-container text-on-primary font-headline-md text-headline-md h-14 rounded-xl transition-all duration-200 active:scale-95 mt-4 cursor-pointer" 
                type="submit"
              >
                Create Account
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 py-2">
              <div className="h-[1px] flex-grow bg-outline-variant/30"></div>
              <span className="font-label-caps text-label-caps text-on-surface-variant/50">OR</span>
              <div className="h-[1px] flex-grow bg-outline-variant/30"></div>
            </div>

            {/* Google Signup Button */}
            <button 
            onClick={()=>handleGoogleLogin()}
              className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface font-body-lg text-body-lg py-3 rounded-lg hover:bg-surface-container-low active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer" 
              type="button"
            >
              <img 
                alt="Google Logo" 
                className="w-5 h-5 grayscale opacity-80" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_D1WONqvq3P3laPdYfT2jp9NBGIXJcOGp83YsQ4SxwvYDGBS_YkEGANf3PrDLT4RoWe8pCbCR2thKqwZGefo9XtBJpwv9LyBfQFh5z-M0QW25sX2nkykaGo6wiqf5BcBR2k1od3_EeZkFEsDdpx7pCmvCNrsTCoIHv1bfWTkS7nHO84QtrB7UlynSLvrYMmjqjOWzVZgq4VAssnOm37Z980uxlN6Mxj9uuudWfIbn7QCaHc_7u4904958j2bWcLft6YBj0vH-GdE"
              />
              Sign up with Google
            </button>

            {/* Secondary Actions */}
            <div className="flex flex-col gap-4 text-center">
              <Link to="/login" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center gap-2">
                Already Have Account? <span className="text-primary font-bold">Login</span>
              </Link>
            </div>
          </div>

          {/* Supporting Footer Text */}
          <p className="mt-8 text-center font-label-caps text-label-caps text-on-surface-variant/40">
            By creating an account, you agree to our <a className="underline hover:text-on-surface transition-colors" href="#">Terms</a> and <a className="underline hover:text-on-surface transition-colors" href="#">Privacy Policy</a>.
          </p>
        </div>
      </main>
    </div>
  );
}
