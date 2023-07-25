import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import './skills.css'
export default function skills() {
  return (
    <div className='skills'>
        <ul>
            <li>
                <h5>Python</h5>
                <ProgressBar variant="danger" now={80} />
                </li>
         
            <li>
                <h5>scikit learn</h5>
                <ProgressBar variant="danger" now={80} />
                </li>

            <li>
                <h5>TensorFlow, keras</h5>
                <ProgressBar variant="danger" now={80} />
                </li>
            <li>
                <h5>OpenCV</h5>
                <ProgressBar variant="danger" now={80} />
                </li>
                
            <li>
                <h5>NLTK</h5>
                <ProgressBar variant="danger" now={80} />
                </li>
            <li>
                <h5>HTML, CSS</h5>
                <ProgressBar variant="danger" now={80} />
                </li>
           
            <li>
                <h5>Java Script</h5>
                <ProgressBar variant="danger" now={70} />
                </li>
            <li>
                <h5>React.js</h5>
                <ProgressBar variant="danger" now={80} />
                </li>
         
            <li>
                <h5>FastAPI</h5>
                <ProgressBar variant="danger" now={70} />
                </li>
            <li>
                <h5>Flask</h5>
                <ProgressBar variant="danger" now={50} />
                </li>
            <li>
                <h5>MYSQL, PostgreSQL</h5>
                <ProgressBar variant="danger" now={70} />
                </li>
        </ul>
    </div>
  )
}
