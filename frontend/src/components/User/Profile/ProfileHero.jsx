import React from 'react';

export default function ProfileHero({ user, userLoading, habits, habitLoading }) {
  const totalGoalDays = (habits || []).reduce((sum, habit) => {
    const today = new Date();
    const startDate = new Date(habit.createdAt);
    const endDate = new Date(habit.habitEndDate);
    return sum + (today > endDate ? (habit.habitGoalDuration || 21) : Math.floor( (today - startDate) / (1000 * 60 * 60 * 24)) + 1); 
  }, 0);
  const totalCompletedDays =(habits || []).reduce( (sum, habit) => sum + (habit.completedDays?.length || 0),0);
  const consistencyPr = totalGoalDays > 0 ? Math.round((totalCompletedDays / totalGoalDays) * 100) : 0;
  const FullName = userLoading ? "Loading..." : (user?.userName);
  const profilePic = userLoading ? "https://img.magnific.com/vecteurs-premium/icone-vectorielle-plate-profil-utilisateur-isole-avatar-silhouette-homme-femme-silhouette-noire-fond-blanc-parfait-pour-histoires-messagers-medias-sociaux-votre-adx9xa_719432-803.jpg?semt=ais_hybrid&w=740&q=80" : (user?.userProfilePic || "https://img.magnific.com/vecteurs-premium/icone-vectorielle-plate-profil-utilisateur-isole-avatar-silhouette-homme-femme-silhouette-noire-fond-blanc-parfait-pour-histoires-messagers-medias-sociaux-votre-adx9xa_719432-803.jpg?semt=ais_hybrid&w=740&q=80");

  return (
    <div className="glass-panel inner-glow rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center mb-12">
      <div className="w-32 h-32 rounded-xl bg-surface-container-highest/10 border border-outline-variant/30 p-2 shrink-0">
        <img
          alt="Elena Rostova Avatar"
          className="w-full h-full rounded-lg object-cover"
          src={profilePic}
        />
      </div>
      <div className="flex-grow text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-center gap-3 justify-center md:justify-start mb-2">
          <h2 className="text-3xl font-bold tracking-tight text-on-surface font-display">{FullName}</h2>
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold uppercase tracking-wider">
            Elite Tier
          </span>
        </div>
        <p className="text-sm text-on-surface-variant mb-4">Member since January 2024</p>
        <p className="text-xs text-on-surface-variant/75 max-w-xl leading-relaxed">
          Optimizing biological runtime through systematic iterative improvement. Focus: Low-latency cognition and high-availability discipline.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 shrink-0 w-full md:w-auto">
        <div className="bg-surface-container-highest/20 border border-outline-variant/30 p-4 rounded-xl text-center md:text-left min-w-[120px]">
          <p className="text-[9px] text-on-surface-variant/50 uppercase tracking-wider font-bold mb-1">Consistency</p>
          <p className="text-xl font-bold text-primary font-mono">{habitLoading ? "Loading..." : consistencyPr + "%"}</p>
        </div>
        <div className="bg-surface-container-highest/20 border border-outline-variant/30 p-4 rounded-xl text-center md:text-left min-w-[120px]">
          <p className="text-[9px] text-on-surface-variant/50 uppercase tracking-wider font-bold mb-1">Active Streak</p>
          <p className="text-xl font-bold text-primary font-mono">{userLoading ? 0 : (user.activeStreak || 0)} Days</p>
        </div>
      </div>
    </div>
  );
}
