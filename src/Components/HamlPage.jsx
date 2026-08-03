import React from 'react';
import FirstPartHaml from './Haml/FirstPartHaml';

export default function HamlPage() {
  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-3 text-center text-2xl font-black text-[#444444] sm:text-3xl">مراحل الحمل</h1>
    
        <FirstPartHaml />
      </div>
    </div>
  );
}