import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HubPage from './components/HubPage';
import CommitteeTemplate from './components/CommitteeTemplate';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/student-committees" replace />} />
        
        <Route element={<Layout />}>
          <Route path="/student-committees" element={<HubPage />} />
          <Route path="/student-committees/:id" element={<CommitteeTemplate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
