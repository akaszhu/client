import React from "react";

import {Routes, Route, Switch } from 'react-router-dom'

import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Questions from "./pages/Questions/Questions"
import AskQuestion from './pages/AskQuestion/AskQuestion'
import DisplayQuestions from "./pages/Questions/DisplayQuestions";
import Tags from './pages/Tags/Tags'
import Users from './pages/Users/Users'
import UserProfile from "./pages/userProfile/UserProfile";
import About from "./pages/about/About"
import SearchResults from "./pages/Search/SearchResults"
const AllRoutes= () =>{
    return(

    <Routes>
        <Route exact path="/" element={<Home />}/>  
        <Route  path='/Auth' element={<Auth/>}/>
        <Route  path='/Questions' element={<Questions />}/>
        <Route  path='/AskQuestion' element={<AskQuestion />}/>
        <Route  path='/Questions/:id' element={<DisplayQuestions />}/>
        <Route  path="/Tags" element={<Tags/>}/>
        <Route  path="/Users" element={<Users/>}/>
        <Route  path="/Users/:id" element={<UserProfile/>}/>
        <Route  path="/About" element={<About/>}/>
        
          <Route path="/search/:query"
          element={<SearchResults />}/>
    
    </Routes>
)
}
export default AllRoutes