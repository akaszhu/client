import React from "react";
import './LeftSidebar.css'
import  {NavLink} from 'react-router-dom'
import Globe from '../../assets/Globe.svg'
import Tag from '../../assets/tag.png'
import home from '../../assets/home.png'
import user from '../../assets/user.png'

const LeftSidebar=()=>{
    return (
        <div className="left-sidebar" style={{marginTop:"0px"}}>
            <nav className="side-nav">
                <div><NavLink to='/' className='side-nav-links' activeClass='active'>
                <img src={home} alt="Globe.svg" style={{height:"25px" , width:"25px"}}/>
                    <p style={{paddingLeft:"10px"}}>Home</p>
                </NavLink></div>
                <div className="side-nav-div">
                    <div><p>PUBLIC</p></div>
                    <NavLink to="/Questions" className='side-nav-links'style={{paddingLeft:"0px"}}>
                        <img src={Globe} alt="Globe.svg" style={{height:"25px" , width:"25px", paddingLeft:"10px"}}/>
                        <p style={{paddingLeft:"10px"}}>Questions</p>
                    </NavLink>
                    <NavLink to='/Tags' className='side-nav-links' activeClass='active'>
                    <img src={Tag} alt="Globe.svg" style={{height:"25px" , width:"25px"}}/>
                    <p style={{paddingLeft:"10px"}}>Tags</p>
                </NavLink>
                <NavLink to='/Users' className='side-nav-links' activeClass='active'>
                <img src={user} alt="Globe.svg" style={{height:"25px" , width:"25px"}}/>
                    <p style={{paddingLeft:"10px"}}>Users</p>
                </NavLink>

                </div> 
            </nav>
        </div>

    )
}
export default LeftSidebar