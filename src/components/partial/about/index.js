import React from 'react'

function About() {
  return (
    <section id="about">
    <p className="section__text__p1">Get To Know More</p>
    <h1 className="title">About Me</h1>
    <div className="section-container">
      {/* <div class="section__pic-container">
  <img src="./images/about-pic.png" alt="Profile picture" class="about-pic" />
</div> */}
      <div className="about-details-container">
        <div className="about-containers">
          <div className="details-container">
            <img src="./images/education.png" alt="Experience icon" className="icon" />
            <h3>Personal Info</h3>
            <p> Date of Birth : August 02, 2004 <br /> Place of Birth : Bitung  <br /> Gender : Female <br /> Address : Girian Weru Dua </p>
          </div>
          <div className="details-container">
            <img src="./images/experience.png" alt="Experience icon" className="icon" />
            <h3>Education</h3>
            <p>Since 2022 - Now <br /> Student at Klabat University</p>
          </div>
        </div>
        <div className="text-container">
          <p>
            Hi there! I'm a passionate second year student at Klabat University with a strong will in learning new things. 
            My main interest lies in engaging with modern technologies such as computers.
          </p>
        </div>
      </div>
    </div>
    <img src="./images/arrow.png" alt="Arrow icon" className="icon arrow" onclick="location.href='./#experience'" />
  </section>
  )
}

export default About