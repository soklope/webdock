import { BrowserRouter, Routes, Route } from 'react-router-dom';
import userStore from '../stores/loginStore';

import Navigation from '../layout/navigation/Navigation';
import RoadmapView from '../views/RoadmapView';
import ListView from '../views/ListView';
import SinglePostView from '../views/SinglePostView';

import SortFunctionAndFilterContainer from '../components/SortFunctionAndFilterContainer/SortFunctionFilterContainer';
import CreatePostModal from '../components/Modal/CreatePostModal/CreatePostModal';
import SelectCategory from '../components/Modal/SelectCategory/SelectCategory';
import LoginScreen from '../components/Modal/LoginScreen/LoginScreen';
import { useEffect } from 'react';

const Router = () => {


  
  return (
    <BrowserRouter>
      <Navigation />
      <CreatePostModal />

        <Routes>
          <Route exact path="/" element={<RoadmapView />} />
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