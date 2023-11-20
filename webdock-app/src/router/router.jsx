import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navigation from '../layout/navigation/Navigation';
import RoadmapView from '../views/RoadmapView';
import ListView from '../views/ListView';
import SinglePostView from '../views/SinglePostView';
import SortFunctionAndFilterContainer from '../components/SortFunctionAndFilterContainer/SortFunctionFilterContainer';
import CreatePostModal from '../components/Modal/CreatePostModal/CreatePostModal';
import SelectCategory from '../components/Modal/SelectCategory/SelectCategory';
import LoginScreen from '../components/Modal/LoginScreen/LoginScreen';

const Router = () => {

  const loggedIn = localStorage.getItem('user')

  return (
    <BrowserRouter>
      <Navigation />
      <CreatePostModal />

        <Routes>
          <Route exact path="/" element={loggedIn === null ? <Navigate replace to={"/login"}/> : <RoadmapView />} />
          <Route path="/listview" element={<ListView />} />
          <Route path="/posts/:id" element={<SinglePostView />} /> 
          <Route path="/sort" element={<SortFunctionAndFilterContainer />} /> 
          <Route path="/selectcategory" element={<SelectCategory />} />  
          <Route path="/login" element={<LoginScreen />} />  
        </Routes>
    </BrowserRouter>
  );
};

export default Router;

// to do after review 
// - Export default moved to line 8