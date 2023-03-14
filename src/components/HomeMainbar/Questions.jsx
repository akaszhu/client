import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import farmQ from '../../assets/farmQ.png'
import Avatar from '../Avatar/Avatar'
import { useParams } from "react-router";
import { useSelector } from "react-redux";
const Questions = ({ question }) => {
  const { id } = useParams();
  const users = useSelector((state) => state.usersReducer);
  const currentProfile = users.filter((user) => user._id === id)[0];
  const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}
const questionsList = useSelector((state) => state.questionsReducer);
var User = useSelector((state) => state.currentUserReducer);
console.log(questionsList.data)
  return (
    <div className="display-question-container" >
     <div className="display-votes-ans" style={{width:"50px"}}>
 
     <Avatar className="bgc"
                backgroundColor={randColor()}
                color="white"
                height="50px"
                width="10px"
                fontSize="20px"
                px="1px"
                py="10px"
              >
                {question.userPosted.charAt(0).toUpperCase()}
              </Avatar>
      </div>
      <div className="display-votes-ans">
        <p>{question.upVote.length - question.downVote.length}</p>
        <p>votes</p>
      </div>
      <div className="display-votes-ans">
        <p>{question.noOfAnswers}</p>
        <p>answers</p>
      </div>
      <img src={farmQ} style={{height:"50px",width:"50px"}}/>
      <div className="display-question-details">
     
        <Link to={`/Questions/${question._id}`} className="question-title-link">
          {question.questionTitle.length > (window.innerWidth <= 400 ? 70 : 90)
            ? question.questionTitle.substring(
                0,
                window.innerWidth <= 400 ? 70 : 90
              ) + "..."
            : question.questionTitle}
        </Link>
        <div className="display-tags-time">
          <div className="display-tags">
            {question.questionTags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </div>
          <p className="display-time">
            asked {moment(question.askedOn).fromNow()} {question.userPosted}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Questions;
