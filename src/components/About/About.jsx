import React from 'react'
import "./About.css"
import about_img from '../../assets/about.png'


const About = () => {
  return (
    <div className="About">
        <div className="About-left">
            <img src={about_img} alt="about_img" />
        </div>
        <div className="About-right">
            <h1>About Us - Kiddie Kare Too</h1>
            <p>At Kiddie Kare Too, we believe every child deserves a safe, nurturing, and inspiring environment to grow, explore, and thrive. Since our founding, our mission has been simple: to provide high-quality childcare that supports the social, emotional, and educational development of every child in our care.</p>
            <p>We understand that choosing a daycare is one of the most important decisions a parent can make. That's why we focus on creating a space where children feel loved, respected, and free to be themselves. Our dedicated team of educators is passionate about early childhood development and uses age-appropriate activities to encourage curiosity, kindness, and confidence.</p>
            <p>From music and art to story time and outdoor play, Kiddie Kare Too offers a fun and enriching experience that goes beyond just babysitting. We help children build friendships, discover new skills, and prepare for their future — one smile at a time. Come visit us and see why Kiddie Kare Too is the perfect place for your child to learn, laugh, and grow.</p>
        </div>
    </div>
  )
}

export default About