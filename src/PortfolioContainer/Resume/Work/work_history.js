import React from 'react'
import './work_history.css'
export default function work_history() {
  return (
    <div className='work_history'>
       <ul>
        <li><div className='institute'>
            <div className='heading'>
              <h5>Final Year Project</h5>
              <p className='date'>2022-2023</p>
            </div>
            <div>
                <h5>Real Time Sign Language Recongnition with Deep Learning Approach</h5>
                <h5>Problem: </h5>
                <p>Communication barrier between normal people and muted people.</p>
                <h5>Solution: </h5>
                <ul className="fyp-bullits">
                <li>Target 100 most common words of Urdu and collect videos of those words for Pakistan sign language.</li>
                <li>Clean the dataset and extract features for the videos and saved those features in .numpy arrays.</li>
                <li>Trained Sequentional models Like LSTM, GRU and LRCN.</li>
                <li>Integrate best-fit model with streamlit interface for real time sign translation.</li>
                </ul>
            </div>
          </div></li>

        <li><div className='institute'>
            <div className='heading'>
              <h5>Freelance Projects</h5>
              <p className='date'>2022-ongoing</p>
            </div>
            <div>
                <ul>
                    <li>
                    <div className='heading'>
                    <h5>Automate Data Science Tasks</h5>
                    <p className='date'>2022</p>
                    </div>
                        <ul className="fyp-bullits">
                        <li>Develope web app which perform all preprocessing steps on data show ghraphs and train ml
                        models on .csv datasets and also show confussion matrix corrleation matrix etc. to users.</li>
                        <li>User will give voice commands and application will perform that operations on dataset.</li>
                        <li>Users can download trained models in .pikkle files from application</li>
                        </ul>
             
                    </li>
                    <li>
                    <div className='heading'>
                    <h5>Developed backend for social app in FastAPI</h5>
                    <p className='date'>2023</p>
                    </div>
                        <ul className="fyp-bullits">
                        <li>This project was 3 modules</li>
  

                        <li>Orgainzations:Orgainzations: organiztions posting jobs and will hiring people on basis of applications.</li>
                        <li>ProfessionalsProfessionalsProfessionalsProfessionals apply for job and internships and also can provide home services to visit forpatient.</li>
                        <li>PatientsPatients can search oragnizations and doctor contact the</li>

                        </ul>
             
                    </li>
                </ul>
                
            </div>
          </div></li>
          </ul>
    </div>
  )
}
