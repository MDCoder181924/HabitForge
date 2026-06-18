import React from 'react';
import { Link } from 'react-router-dom';

export default function MyHabitsHeader({ filter, setFilter }) {
  const categories = ['All', 'Active', 'Archived'];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-on-surface font-display mb-2">My Habits</h2>
          <p className="text-base text-on-surface-variant">Consistency is the bridge between goals and accomplishment.</p>
        </div>
        <Link 
          to="/create-habit"
          className="bg-primary text-on-primary font-bold px-8 py-3 rounded-xl flex items-center gap-2 active:scale-95 transition-all rim-light shadow-lg shadow-primary/10 hover:shadow-primary/20 cursor-pointer"
        >
          <span className="material-symbols-outlined font-icon" data-icon="add_circle">add_circle</span>
          <span>Add Habit</span>
        </Link>
      </header>

      {/* Search & Filter Controls */}
      <section className="flex flex-col md:flex-row gap-4 items-center">
        <div className="relative w-full md:w-96">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50" data-icon="search">search</span>
          <input 
            className="w-full bg-surface-container border border-outline-variant rounded-xl py-3 pl-12 pr-4 text-sm text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" 
            placeholder="Search your discipline..." 
            type="text"
          />
        </div>
        <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                filter === tab
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
