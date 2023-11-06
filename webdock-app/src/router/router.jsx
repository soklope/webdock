import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from '../layout/navigation/Navigation';
import RoadmapView from '../views/RoadmapView';
import ListView from '../views/ListView';
import SinglePostView from '../views/SinglePostView';
import SortFunctionAndFilterContainer from '../components/SortFunctionAndFilterContainer/SortFunctionFilterContainer';
import CreatePostModal from '../components/Modal/CreatePostModal/CreatePostModal';

const Router = () => {
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route exact path="/" element={<RoadmapView />} />
        <Route path="/listview" element={<ListView />} />
        <Route path="/post" element={<SinglePostView />} /> 
        <Route path="/sort" element={<SortFunctionAndFilterContainer />} /> 
        <Route path="/modal" element={<CreatePostModal />} /> 
        {/* Add more routes here as needed */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

// to do after review 
// - Export default moved to line 8