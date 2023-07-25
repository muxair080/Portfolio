import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './About.css'
import Border from '../../assets/Home/border.png'
export default function About() {

  return (
    <div className='About-container' id='About'>
        <div className='Aboutme'>
            <div className='about-head'>
                <div class='content'>
                <h1 className='aboutme-head'>AboutMe</h1>
                <p className='reason'>Why Choose me?</p>
                    <img className='border-img' src={Border}/> 
                </div>


            </div>
    <Card className='shadow-lg p-3 mb-5 bg-body rounded'>
      <Card.Body>
        <Card.Text>
        As a Skilled and passionate machine learning expert with a strong background in computer software engineering. Recent graduate experienced in data preprocessing, data visualization, classical machine learning, deep learning, computer vision, NLP, and model deployment. Has a deep understanding of theoretical concepts and a keen eye for performance optimization and code efficiency, providing innovative and effective solutions for complex challenges.

            </Card.Text>
            <Card.Title>Here are a Few Highlights:</Card.Title>
            <Card.Text>
                <ul class='skills'>
                    <li>Programming Languages (Python,Java Script, C, C++)</li>
                    <li>Machine Learning Algoriths (Linear Regression, Logistic Regression, Naive Bayes, SVM, Decission Tree, Random Forest and all Ensimble techniques etc.)</li>
                    <li>statistics and Probability (Probability theory, hypothesis testing, inference)</li>
                    <li>Data Preprocessing (Cleaning, Feature Scalling, normalization etc.)</li>
                    <li>Model Evaluation and Selection (Cross-validation, performance metrices, model selection)</li>
                    <li>Feature Engineering (Feature selection, extraction and transformation)</li>
                    <li>Data visualization (Maplotlib, Seaborn, Plotly)</li>
                    <li>Deep Learning (ANN, CNN, RNN)</li>
                    <li>Model Deployment using Flask, and FastAPI</li>
                    <li>Full Stack Web Development (HTML, CSS, JS, Reactjs, Flask, FastAPI, Microservices concept, docker)</li>
                    <li>Version Control: Git/Github</li>
                    <li>Web Scrapping (BeatuifulSoup4)</li>
                    <li>Database Design, MYSQL, PostgreSQL</li>
                    <li>OOP Concepts</li>
                    <li>Data Structure and Algorithms</li>
                    <li>Problem Solving (Analytical, Data-driven approaches )</li>
                    <li>Collaborative Skills(Teamwork, Communication, Presentation)</li>
                </ul>
            </Card.Text>
            <div className='profile-options'>
                    <a className='btn primary-btn' href='#Contact'>
                        {""} Hire Me {" "}
                    </a>
                    <a href='muxair.pdf' download="Muhammad_Uzair.pdf">
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>

                </div>      </Card.Body>
    </Card>
    </div>
    </div>
  );
}
