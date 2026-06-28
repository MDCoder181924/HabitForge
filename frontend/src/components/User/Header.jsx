import React from 'react';
import {useUser} from '../../context/UserContext'

export default function Header({ onMenuClick }) {
  const {user,loading} = useUser();
  const FullName = loading ? "Loading..." : (user?.userName );
  const profilePic = loading ? "https://img.magnific.com/vecteurs-premium/icone-vectorielle-plate-profil-utilisateur-isole-avatar-silhouette-homme-femme-silhouette-noire-fond-blanc-parfait-pour-histoires-messagers-medias-sociaux-votre-adx9xa_719432-803.jpg?semt=ais_hybrid&w=740&q=80" : (user?.userProfilePic || "https://img.magnific.com/vecteurs-premium/icone-vectorielle-plate-profil-utilisateur-isole-avatar-silhouette-homme-femme-silhouette-noire-fond-blanc-parfait-pour-histoires-messagers-medias-sociaux-votre-adx9xa_719432-803.jpg?semt=ais_hybrid&w=740&q=80");
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-outline-variant shrink-0">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          {/* Mobile hamburger & title */}
          <button 
            onClick={onMenuClick}
            className="md:hidden text-on-surface-variant hover:text-primary p-1 rounded transition-colors"
          >
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </button>
          <span className="text-headline-md font-headline-md font-bold text-primary md:hidden">HabitForge</span>
          
          <nav className="hidden lg:flex gap-6">
            <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="#">Features</a>
            <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="#">About</a>
            <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="#">Pricing</a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 ml-4 border-l border-outline-variant pl-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-on-surface">{FullName}</p>
              <p className="text-xs text-primary">Member</p>
            </div>
            <img 
              alt="User Profile" 
              className="w-10 h-10 rounded-full border-2 border-primary/20 p-0.5" 
              src={profilePic}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
