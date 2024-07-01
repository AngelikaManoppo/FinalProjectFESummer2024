import React from 'react'

function Projects() {
  return (
    <section id="projects">
    <p className="section__text__p1">View My Recent</p>
    <h1 className="title">Projects</h1>
    <div className="experience-details-container">
      <div className="about-containers">
        <div className="details-container color-container">
          <div className="article-container">
            <img src="./images/vispro.jpg" alt="Project 1" className="project-img" />
          </div>
          <h2 className="experience-sub-title project-title">Visual Programming Class</h2>
          <div className="btn-container">
            <button className="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'">
              Github
            </button>
            <button className="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'">
              Live Demo
            </button>
          </div>
        </div>
        <div className="details-container color-container">
          <div className="article-container">
            <img src="./images/webdes.jpg" alt="Project 2" className="project-img" />
          </div>
          <h2 className="experience-sub-title project-title">Web Design Class</h2>
          <div className="btn-container">
            <button className="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'">
              Github
            </button>
            <button className="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'">
              Live Demo
            </button>
          </div>
        </div>
        <div className="details-container color-container">
          <div className="article-container">
            <img src="./images/hci.jpg" alt="Project 3" className="project-img" />
          </div>
          <h2 className="experience-sub-title project-title">Human & Computers Interaction Class</h2>
          <div className="btn-container">
            <button className="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'">
              Github
            </button>
            <button className="btn btn-color-2 project-btn" onclick="location.href='https://github.com/'">
              Live Demo
            </button>
          </div>
        </div>
      </div>
    </div>
    <img src="./images/arrow.png" alt="Arrow icon" className="icon arrow" onclick="location.href='./#contact'" />
  </section>
  )
}

export default Projects