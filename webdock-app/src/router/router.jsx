import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CreatePostBtn from '../components/CreatePostBtn/CreatePostBtn';
import Navigation from '../layout/navigation/Navigation';
import RoadmapView from '../views/RoadmapView';

const Router = () => {
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route exact path="/" element={<RoadmapView />} />
        <Route  path="/CreatePostBtn" element={<CreatePostBtn />} />
        {/* Add more routes here as needed */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
