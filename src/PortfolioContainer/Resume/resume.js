import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Border from '../../assets/Home/border.png'
import './resume.css'

import Education from './Education/education';
import Work_history from './Work/work_history';
import Skills from './Programming_skills/skills'
import Interest from './Interests/interest';
import Projects from './Projects/Projects';

export default function Resume() {
    const [show, setshow] = useState("education");


    return (
        <div className='resume' id='Resume'>
            <div className='about-head'>
                    <div class='content'>
                    <h1 className='aboutme-head'>Resume</h1>
                    <p className='reason'>My formal Bio Details</p>
                        <img className='border-img' src={Border}/> 
                    </div>

            </div>
            <div className='resume-content shadow-lg bg-body rounded'>
                <div className='menubar'>
                    <ul>
                        <li onClick={()=> setshow("education")}>Education</li>
                        <li onClick={()=> setshow("work")}>Work History</li>
                        <li onClick={()=> setshow("skills")}>Programming Skills</li>
                        <li onClick={()=> setshow("projects")}>Projects</li>
                        <li onClick={()=> setshow("interest")}>Interest</li>
                    </ul>
                </div>
                <div className='content'>
            
                    {show == 'education'?<Education/>: show == 'work'?<Work_history/>: show == 'skills'?<Skills/>: show=='interest'? <Interest/>: show == 'projects'?<Projects/>:''}
                </div>
            </div>
            </div>

    );
}
