import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from '../layout/navigation/Navigation';
import RoadmapView from '../views/RoadmapView';
import ListView from '../views/ListView';
import SinglePostView from '../views/SinglePostView';

const Router = () => {
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route exact path="/" element={<RoadmapView />} />
        <Route path="/listview" element={<ListView />} />
        <Route path="/post" element={<SinglePostView />} /> 
        {/* Add more routes here as needed */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

// to do after review 
// - Export default moved to line 8