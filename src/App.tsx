import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage, Test } from '@/pages';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="test" element={<Test />} />
    </Routes>
  );
};
