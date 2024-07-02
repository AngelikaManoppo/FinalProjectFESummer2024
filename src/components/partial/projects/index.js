import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Projects = () => {
  const [project1, setproject1] = useState("");
  const [project2, setproject2] = useState("");
  const [project3, setproject3] = useState("");

  useEffect(() => {
    const db = getDatabase();
    const project1Ref = ref(db, "project1/");
    onValue(project1Ref, (snapshot) => {
      const data = snapshot.val();
      setproject1(data);
    });
    const project2Ref = ref(db, "project2/");
    onValue(project2Ref, (snapshot) => {
      const data = snapshot.val();
      setproject2(data);
    });

    const project3Ref = ref(db, "project3/");
    onValue(project3Ref, (snapshot) => {
      const data = snapshot.val();
      setproject3(data);
    });
  }, []);

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
          <h2 className="experience-sub-title project-title"> {project1} </h2>
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
          <h2 className="experience-sub-title project-title"> {project2} </h2>
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
          <h2 className="experience-sub-title project-title"> {project3} </h2>
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