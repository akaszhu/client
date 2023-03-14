import React from "react";
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from "../../components/RightSidebar/RightSidebar"
import HomeMainbar from "../../components/HomeMainbar/HomeMainbar"
import '../../App.css'
import ScrollButton from '../../components/scroll/scrollup'

const Home=()=>{
    return( 
    <div className="home-container-1" >
    <LeftSidebar/>
    <div className="home-container-2">
    <HomeMainbar />
    <RightSidebar />
    
 

    </div>
    <ScrollButton />
    </div>
    
    )
} 

export default Home 