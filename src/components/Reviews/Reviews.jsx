import React, { use } from 'react'
import './Reviews.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import { useRef } from 'react';

const Reviews = () => {

  const slider = useRef();
  let tx = 0;
const slideForward = () => {
  if (tx > -50) {
    tx -= 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = () => {
  if (tx < 0) {
    tx += 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`;
}




  return (
    <div className="Reviews">
      <img src={next_icon} alt="Next" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="Back" className="back-btn" onClick={slideBackward} />

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Jane Doe</h3>
                  <span>Parent of a 3-year-old</span>
                </div>
              </div>
              <p>"Kiddie Kare Too has been a blessing for our family. The staff is
                caring and attentive, and our child loves going there every day!"</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>John Smith</h3>
                  <span>Parent of a 5-year-old</span>
                </div>
              </div>
              <p>"The programs offered at Kiddie Kare Too are fantastic. Our child
                has learned so much and made great friends!"</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Emily Johnson</h3>
                  <span>Parent of a 4-year-old</span>
                </div>
              </div>
              <p>"The environment is safe and nurturing. Our child has made so many
                friends and looks forward to attending every day!"</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Michael Brown</h3>
                  <span>Parent of a 6-year-old</span>
                </div>
              </div>
              <p>"Kiddie Kare Too has exceeded our expectations. The staff is professional, and the activities are well-planned and fun."</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Reviews