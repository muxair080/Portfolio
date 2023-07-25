import React from 'react'
import './Projects.css'
export default function Projects() {
  return (
    <div className='projects'>
        <h1>Projects</h1>
        <p>Throughout my career, I have had the opportunity to work on a diverse range of projects covering different areas such as classical   machine learning, deep learning, computer vision, NLP, backend development, and frontend development. I have successfully completed over 60 projects, which are all uploaded on my GitHub account. If you are interested in exploring my work, please click on the button below to visit my GitHub account. There you will find a detailed description of each project along with the codebase and any relevant documentation. I'm constantly updating my GitHub account with new projects and ideas.</p>
        <h5>Some Projects is mentioned here:</h5>
        <ul className='some-projects'>
                    <li>
                    <div className='heading'>
                    <h5>Human action recognition</h5>
                    </div>
                        <ul className="fyp-bullits">
                        <li>Used kaggle dataset and trained LRCN model on random 5 classes to reconize humman actions.
.</li>
                        <li>Achived 83% test accuracy on 5 classes..</li>
                        </ul>
             
                    </li>

                    <li>
                    <div className='heading'>
                    <h5>Plants disease detection</h5>
                    </div>
                        <ul className="fyp-bullits">
                        <li>Trained models for tomato, photato, and pepper plants dataset for multiple disease detection in
given plants.</li>
                        <li>Integrate those models in streamlit web interface and deploy application..</li>
                       <li>app link: <a href="https://plantdiseasedetectionappapp-7pvuh48449k.streamlit.app/">open app</a> </li> 

                        </ul>
             
                    </li>

                    <li>
                    <div className='heading'>
                    <h5>Human diseases detection</h5>
                    </div>
                        <ul className="fyp-bullits">
                        <li>Trained CNN models for pneumonia, malaria, and bone fractures on images usinng kaggle
dataset.</li>
                        <li>Integrate those models in streamlit web interface and deploy application..</li>
                       <li>app link: <a href="https://humandiseasedetectionapp-w97gv5cgyc.streamlit.app/">open app</a> </li> 

                        </ul>
             
                    </li>

                    <li>
                    <div className='heading'>
                    <h5>Customer Churn Prediction</h5>
                    </div>
                        <ul className="fyp-bullits">
                        <li>Trained ANN model on Telcom_customer dataset and achived 92% accuracy to predict customer
churn prediction.</li></ul>
             
                    </li>

                    <li>
                    <div className='heading'>
                    <h5>AI Painter</h5>
                    </div>
                        <ul className="fyp-bullits">
                        <li>Using opencv and mediapipe libraries build AI painter to paint on screen using multiple colors.</li></ul>
             
                    </li>

                    <li>
                    <div className='heading'>
                    <h5>AI Trainer</h5>
                    </div>
                        <ul className="fyp-bullits">
                        <li>Using opencv and mediapipe libraries build this project which is counting up down of dumbles.
</li></ul>
                    </li>
       
                  </ul>
    <a className='github btn primary-btn' target='_blank' href='https://github.com/muxair080?tab=repositories'>More projects</a>
 
    </div>
  )
}
