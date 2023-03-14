import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import QuestionList from './QuestionList';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
const SearchResults = () => {
  const {query}=useParams()
  console.log(query)

  const questionsList = useSelector((state) => state.questionsReducer);

  return (
    <div className="home-container-1">
    <LeftSidebar/>
    <div  className="home-container-2">
      <h1>Your search results for "{query}"</h1>
      <div> <QuestionList questionsList={questionsList.data} />
      </div>
     
      <RightSidebar/>
      {/* Display your search results here */}</div>
      
    </div>
  );
};

export default SearchResults;