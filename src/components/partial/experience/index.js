import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Experience = () => {
  const [hardskills, sethardskills] = useState("");
  const [softskills, setsoftskills] = useState("");

  useEffect(() => {
    const db = getDatabase();
    const hardskillsRef = ref(db, "hardskills/");
    onValue(hardskillsRef, (snapshot) => {
      const data = snapshot.val();
      sethardskills(data);
    });
    const softskillsRef = ref(db, "softskills/");
    onValue(softskillsRef, (snapshot) => {
      const data = snapshot.val();
      setsoftskills(data);
    });
  }, []);

  return (
    <section id="experience">
    <p className="section__text__p1">Explore My</p>
    <h1 className="title">Skill Experience</h1>
    <div className="experience-details-container">
      <div className="about-containers">
        <div className="details-container">
          <h2 className="experience-sub-title">Hard Skills</h2>
          <div className="article-container">
            <article>
              <img src="./images/checkmark.png" alt="Experience icon" className="icon" />
              <div>
                <h3> {hardskills.h1} </h3>
                <p> Experienced </p>
              </div>
            </article>
            <article>
              <img src="./images/checkmark.png" alt="Experience icon" className="icon" />
              <div>
                <h3> {hardskills.h2} </h3>
                <p> Experienced </p>
              </div>
            </article>
            <article>
              <img src="./images/checkmark.png" alt="Experience icon" className="icon" />
              <div>
                <h3> {hardskills.h3} </h3>
                <p> Experienced </p>
              </div>
            </article>
            <article>
              <img src="./images/checkmark.png" alt="Experience icon" className="icon" />
              <div>
                <h3> {hardskills.h4} </h3>
                <p> Experienced </p>
              </div>
            </article>
            <article>
              <img src="./images/checkmark.png" alt="Experience icon" className="icon" />
              <div>
                <h3> {hardskills.h5} </h3>
                <p> Basic </p>
              </div>
            </article>
            <article>
              <img src="./images/checkmark.png" alt="Experience icon" className="icon" />
              <div>
                <h3> {hardskills.h6} </h3>
                <p> Experienced </p>
              </div>
            </article>
          </div>
        </div>
        <div className="details-container">
          <h2 className="experience-sub-title">Soft Skills</h2>
          <div className="article-container">
            <article>
              <img src="./images/checkmark.png" alt="Experience icon" className="icon" />
              <div>
                <h3> {softskills.s1} </h3>
                <p> Experienced </p>
              </div>
            </article>
            <article>
              <img src="./images/checkmark.png" alt="Experience icon" className="icon" />
              <div>
                <h3> {softskills.s2} </h3>
                <p> Experienced </p>
              </div>
            </article>
            <article>
              <img src="./images/checkmark.png" alt="Experience icon" className="icon" />
              <div>
                <h3> {softskills.s3} </h3>
                <p> Experienced </p>
              </div>
            </article>
            <article>
              <img src="./images/checkmark.png" alt="Experience icon" className="icon" />
              <div>
                <h3> {softskills.s4} </h3>
                <p> Experienced </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
    <img src="./images/arrow.png" alt="Arrow icon" className="icon arrow" onclick="location.href='./#projects'" />
  </section>
  )
}

export default Experience