import React, { useState } from 'react';
import AnalyticsHeader from '../../components/User/Analytics/AnalyticsHeader';
import AnalyticsBento from '../../components/User/Analytics/AnalyticsBento';
import CompletionTrends from '../../components/User/Analytics/CompletionTrends';
import StreakBreakdown from '../../components/User/Analytics/StreakBreakdown';
import ActivityHeatmap from '../../components/User/Analytics/ActivityHeatmap';
import SynergyInsights from '../../components/User/Analytics/SynergyInsights';

export default function AnalyticsPage() {
  const [timeframe, setTimeframe] = useState('7 Days');

  const [intensities] = useState(() => 
    Array.from({ length: 364 }, () => Math.floor(Math.random() * 5))
  );

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      {/* Header Section */}
      <AnalyticsHeader timeframe={timeframe} setTimeframe={setTimeframe} />

      {/* Bento Grid Metrics */}
      <AnalyticsBento />

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CompletionTrends />
        </div>
        <div>
          <StreakBreakdown />
        </div>
      </div>

      {/* Activity Heatmap */}
      <ActivityHeatmap intensities={intensities} />

      {/* Insights & Analysis */}
      <SynergyInsights />
    </div>
  );
}
