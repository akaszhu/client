import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'

import "../../App.css";



const About = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2">
      <h1>About</h1>
           <p>
           Welcome to our discussion forum, a virtual space for people to share their thoughts and ideas on a wide range of topics.

Our forum is a community-driven platform where you can engage in meaningful conversations with other members. Whether you want to discuss current events, share your opinions on a particular topic, or simply connect with like-minded individuals, you'll find a welcoming and supportive environment here.

We believe that diversity of thought is essential to productive conversations, and we encourage members to express their viewpoints respectfully and openly. Whether you're an expert on a particular subject or just starting to explore a new area of interest, you'll find a place here to learn, grow, and connect with others who share your passions.

Our discussion forum is designed to be user-friendly and easy to navigate. You can search for topics that interest you, browse through threads, and start your own discussions with just a few clicks. Our moderation team works tirelessly to ensure that the forum remains a safe and inclusive space for everyone, and we welcome feedback and suggestions from our members to help us continually improve the platform.

Thank you for joining our community, and we look forward to hearing your voice in our discussion.



           </p>
      
      </div>
    </div>
  );
};



export default About
