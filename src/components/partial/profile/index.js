import React from 'react'

function Profile() {
  return (
    <section id="profile">
    <div className="section__pic-container">
      <img src="./images/AngelikaFin.jpg" alt="John Doe profile picture" />
    </div>
    <div className="section__text">
      <p className="section__text__p1">Hello, I'm</p>
      <h1 className="title">Angelika Farah Manoppo</h1>
      <p className="section__text__p2">Student at Klabat University</p>
      <div className="btn-container">
        <button className="btn btn-color-2" onclick="window.open('./images/resumeForFinal.pdf')">
          Download CV
        </button>
        <button className="btn btn-color-1" onclick="location.href='./#contact'">
          Contact Info
        </button>
      </div>
      <div id="socials-container">
        <img src="./images/linkedin.png" alt="My LinkedIn profile" className="icon" onclick="location.href='https://www.linkedin.com/in/angelika-manoppo-a553a6317/'" />
        <img src="./images/github.png" alt="My Github profile" className="icon" onclick="location.href='https://github.com/AngelikaManoppo'" />
      </div>
    </div>
  </section>
  )
}

export default Profile