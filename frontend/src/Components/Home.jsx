import React from 'react';
import LearnHome from './LearnHome/LearnHome';
import Welcome from './Welcome/Welcome.jsx';

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(117,184,178,0.12),_transparent_45%)]">
      <Welcome />
      <LearnHome />
    </div>
  );
}
