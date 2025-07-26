import React, { useEffect, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';

const selectLastHalfYear = (contributions) => {
  const currentDate = new Date();
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(currentDate.getMonth() - 6);

  return contributions.filter((activity) => {
    const date = new Date(activity.date);
    return date >= sixMonthsAgo && date <= currentDate;
  });
};

export function GithubCalendar() {
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    // Remove timeout completely or reduce it to 10ms if needed
    const timer = setTimeout(() => {
      setShowCalendar(true);
    }, 10); // minimal delay to ensure smoother mount

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-white p-2">
      <h3 className="text-white font-semibold text-lg mb-1">GitHub Contributions</h3>
      
      <div className="inline-block scale-[0.85] md:scale-[1] origin-top-left">
        {showCalendar ? (
          <GitHubCalendar
            username="my-lord1"
            transformData={selectLastHalfYear}
            hideColorLegend
            labels={{
              totalCount: '{{count}} contributions in the last half year',
            }}
            className="w-[300px] h-[200px]"
          />
        ) : (
          // Skeleton loader placeholder
          <div className="w-[300px] h-[200px] animate-pulse bg-zinc-800 rounded-md" />
        )}
      </div>
    </div>
  );
}

/*
bg-gradient-to-br from-white/50 to-white/20 p-4 rounded-2xl shadow-md backdrop-blur-sm */