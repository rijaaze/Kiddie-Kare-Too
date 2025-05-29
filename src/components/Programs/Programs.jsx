import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.png'  
import program_2 from '../../assets/program-2.png'   


const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt="Program_1" />
        <h3>0-5 Year Olds</h3>
        <p>Full time 1</p>
      </div>
      <div className="program">
        <img src={program_2} alt="Program_2" />
        <h3>5-12 Year Olds</h3>
        <p>Before/After School Program 2</p>
      </div>
    </div>
  )
}

export default Programs