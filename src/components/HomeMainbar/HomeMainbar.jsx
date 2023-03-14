import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./HomeMainbar.css";
import QuestionList from "./QuestionList";
import Ullavar2 from '../../assets/ullavar2.png'

const HomeMainbar = () => {
  const location = useLocation();
  const user = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();

  const questionsList = useSelector((state) => state.questionsReducer);

  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  return (
    <div className="main-bar">
   
      <div className="main-bar-header">
      <img src={Ullavar2} alt="df"/>
      <div>
      
      <strong className="name">ULLAVAR FORUM</strong>
      <section><h1 className="name1">From farm to forum - join the harvest of ideas at <br/>Ullavar Discussion Forum</h1></section>
      </div>
       

       <br/>
      
       
      <button onClick={checkAuth} className="ask-btn button-87">
          Ask Question
        </button>
    
      </div>
      <div>
      {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        
        {questionsList.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionsList.data.length} questions</p>
            <QuestionList questionsList={questionsList.data} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;
