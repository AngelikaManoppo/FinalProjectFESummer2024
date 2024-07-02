import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const About = () => {
  const [personalInfo, setpersonalInfo] = useState({});
  const [education, seteducation] = useState("");
  const [introduction, setintroduction] = useState("");

  useEffect(() => {
    const db = getDatabase();
    const personalInfoRef = ref(db, "personalInfo/");
    onValue(personalInfoRef, (snapshot) => {
      const data = snapshot.val();
      setpersonalInfo(data);
    });
    const educationRef = ref(db, "education/");
    onValue(educationRef, (snapshot) => {
      const data = snapshot.val();
      seteducation(data);
    });

    const introductionRef = ref(db, "introduction/");
    onValue(introductionRef, (snapshot) => {
      const data = snapshot.val();
      setintroduction(data);
    });
  }, []);

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
            <p> Date of Birth : {personalInfo.DateOfBirth} <br /> Place of Birth : {personalInfo.PlaceOfBirth} <br /> Gender : {personalInfo.Gender} <br /> Address : {personalInfo.Address} </p>
          </div>
          <div className="details-container">
            <img src="./images/experience.png" alt="Experience icon" className="icon" />
            <h3>Education</h3>
            <p> {education} </p>
          </div>
        </div>
        <div className="text-container">
          <p>
            {introduction}
          </p>
        </div>
      </div>
    </div>
    <img src="./images/arrow.png" alt="Arrow icon" className="icon arrow" onclick="location.href='./#experience'" />
  </section>
  )
}

export default About;