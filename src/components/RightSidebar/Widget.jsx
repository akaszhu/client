import React from 'react'
import './RightSidebar.css'
import pen from '../../assets/pen.png'
import message from '../../assets/message.png'
import black from '../../assets/black.png'

const Widget = () =>{
return (
<div >
    <div className="widget">
        <h4>Nilla Kilar Blog</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen" style={{width:"25px",height:"25px"}}/>
                <p>"The Farming Frontier": This blog explores the latest trends, techniques, and challenges in modern agriculture. From precision farming to regenerative agriculture, we cover a wide range of topics that are reshaping the way we grow food and manage our natural resources. Our expert writers share insights and analysis on the most pressing questions facing farmers and agribusinesses today, including sustainability, climate change, food security, and more. Whether you're a seasoned farmer or just curious about the future of agriculture, you'll find valuable information and inspiration on The Farming Frontier.</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen" style={{width:"25px",height:"25px"}}/>
                <p>"From Farm to Fork": This blog is dedicated to exploring the fascinating world of food production and consumption. We delve into the science, economics, and culture behind the food we eat, tracing the journey from the farm to the dinner table. Our articles cover a wide range of topics, from crop genetics to culinary traditions, from food safety to farm labor issues. We also highlight inspiring stories of farmers, chefs, and entrepreneurs who are working to create a more sustainable, equitable, and delicious food system. Join us on this journey of discovery and appreciation for the amazing bounty of our planet on From Farm to Fork.</p>
            </div>
        </div>
    </div>


    <div className="widget">
        <h4>Features of Forum</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={message} alt="message logo" style={{width:"20px",height:"20px"}}/>
                <p>The Purpose: A clear and concise description of the forum's purpose, which could be something like "Agriculture Forum: A place to discuss all aspects of farming, including crop management, animal husbandry, and sustainable agriculture practices." This can help potential users quickly understand what the forum is about and whether it aligns with their interests.</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={message} alt="message logo" style={{width:"20px",height:"20px"}}/>
                <p>Topics Covered: A list of the topics covered in the forum, such as crop science, animal nutrition, farm equipment, marketing, and policy. This can give users an idea of the range of topics they can expect to find on the forum and help them decide whether to join.</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={black} alt="black logo" style={{width:"25px",height:"25px"}}/>
                <p>Community Guidelines: A set of guidelines or rules that users are expected to follow when participating in the forum. These guidelines could include things like treating other users with respect, staying on topic, avoiding spamming or advertising, and avoiding offensive or inappropriate language. Clear guidelines can help create a positive and constructive environment for discussion and prevent conflicts or misunderstandings.</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={black} alt="black logo" style={{width:"25px",height:"25px"}}/>
                <p>Expert Contributors: A description of any experts or professionals who are contributing to the forum, such as agricultural scientists, extension agents, or experienced farmers. This can help establish the forum's credibility and provide users with access to valuable insights and advice. It can also help users know who to direct questions to if they are looking for specific expertise or guidance.</p>
            </div>
            
            
        </div>
    </div>

<div className="widget">
        <h4>Trending Talk</h4>
        <div className='right-sidebar-div-1'>
        <div className='right-sidebar-div-2'>
        <img src={pen} alt="pen" style={{width:"25px",height:"25px"}}/>
        <p>Regenerative Agriculture: Regenerative agriculture is an approach to farming that seeks to restore and improve soil health, biodiversity, and ecosystem services. This talk may cover topics such as the benefits of regenerative agriculture, its potential to mitigate climate change, and the challenges of implementing it at scale.</p>
        </div>
        <div className='right-sidebar-div-2'>
        <img src={pen} alt="pen" style={{width:"25px",height:"25px"}}/>
        <p>Precision Agriculture: Precision agriculture is a farming approach that uses technology and data analytics to optimize crop yields and reduce waste. This talk may cover topics such as precision irrigation, precision planting, and precision nutrient management.</p>
        </div>
        <div className='right-sidebar-div-2'>
        <img src={pen} alt="pen" style={{width:"25px",height:"25px"}}/>
        <p>Urban Agriculture: Urban agriculture is the practice of growing crops in urban areas, often using vertical farming, aquaponics, or hydroponics. This talk may cover topics such as the benefits of urban agriculture, the challenges of urban farming, and its potential to provide fresh produce to undeserved communities.</p>
        </div>
        <div className='right-sidebar-div-2'>
        <img src={pen} alt="pen" style={{width:"25px",height:"25px"}}/>
        <p>Alternative Protein Sources: As concerns about the environmental impact of traditional livestock farming grow, alternative protein sources such as plant-based meats, lab-grown meat, and insect-based protein are becoming more popular. This talk may cover topics such as the benefits and challenges of these alternative protein sources, their potential to meet the growing demand for protein, and their impact on the environment.</p>
        </div>
             </div>
    </div>
</div>
)

}
export default Widget