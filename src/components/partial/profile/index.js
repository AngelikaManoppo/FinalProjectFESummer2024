import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Profile = () => {
  const [profile1, setprofile1] = useState("");
  const [profile2, setprofile2] = useState("");
  const [profile3, setprofile3] = useState("");
  const [profilebtn1, setprofilebtn1] = useState("");
  const [profilebtn2, setprofilebtn2] = useState("");

  useEffect(() => {
    const db = getDatabase();
    const profile1Ref = ref(db, "profile1/");
    onValue(profile1Ref, (snapshot) => {
      const data = snapshot.val();
      setprofile1(data);
    });
    const profile2Ref = ref(db, "profile2/");
    onValue(profile2Ref, (snapshot) => {
      const data = snapshot.val();
      setprofile2(data);
    });

    const profile3Ref = ref(db, "profile3/");
    onValue(profile3Ref, (snapshot) => {
      const data = snapshot.val();
      setprofile3(data);
    });

    const profilebtn1Ref = ref(db, "profilebtn1/");
    onValue(profilebtn1Ref, (snapshot) => {
      const data = snapshot.val();
      setprofilebtn1(data);
    });

    const profilebtn2Ref = ref(db, "profilebtn2/");
    onValue(profilebtn2Ref, (snapshot) => {
      const data = snapshot.val();
      setprofilebtn2(data);
    });
  }, []);

  return (
    <section id="profile">
    <div className="section__pic-container">
      <img src="./images/AngelikaFin.jpg" alt="John Doe profile picture" />
    </div>
    <div className="section__text">
      <p className="section__text__p1"> {profile1} </p>
      <h1 className="title"> {profile2} </h1>
      <p className="section__text__p2"> {profile3} </p>
      <div className="btn-container">
        <button className="btn btn-color-2" onclick="window.open('./images/resumeForFinal.pdf')">
          {profilebtn1}
        </button>
        <button className="btn btn-color-1" onclick="location.href='./#contact'">
          {profilebtn2}
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

export default Profile;