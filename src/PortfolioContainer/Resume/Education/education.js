import React from 'react'
import './education.css'

export default function education() {
  return (
    <div className='education'>
      <ul>
        <li><div className='institute'>
            <div className='heading'>
              <h5>University of Engineering and Technology Mardan</h5>
              <p className='date'>2019-2023</p>
            </div>
            <p>BS Computer Software Engineering</p>
          </div></li>
        <li><div className='institute'>
            <div className='heading'>
              <h5>The Peace Group of Schools and Colleges Charsadda Campus</h5>
              <p className='date'>2017-2019</p>
            </div>
            <p>FSc Pre-Engineering</p>
          </div></li>
        <li><div className='institute'>
            <div className='heading'>
              <h5>Al-Huda Public High School Nisatta Charsadda</h5>
              <p className='date'> 2015-2017</p>
            </div>
            <p>SSC</p>
          </div></li>
      </ul>
      
    </div>
  )
}
