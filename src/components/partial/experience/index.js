import React from 'react'

function Experience() {
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
                <h3>HTML</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img src="./images/checkmark.png" alt="Experience icon" className="icon" />
              <div>
                <h3>JavaScript</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img src="./images/checkmark.png" alt="Experience icon" className="icon" />
              <div>
                <h3>CSS</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img src="./images/checkmark.png" alt="Experience icon" className="icon" />
              <div>
                <h3>Python</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img src="./images/checkmark.png" alt="Experience icon" className="icon" />
              <div>
                <h3>C#(Sharp)</h3>
                <p>Basic</p>
              </div>
            </article>
            <article>
              <img src="./images/checkmark.png" alt="Experience icon" className="icon" />
              <div>
                <h3>Other Tools <br /> (Canva, Figma etc.)</h3>
                <p>Basic</p>
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
                <h3>Working On Team</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img src="./images/checkmark.png" alt="Experience icon" className="icon" />
              <div>
                <h3>Presentaion</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img src="./images/checkmark.png" alt="Experience icon" className="icon" />
              <div>
                <h3>Communi- <br /> cation</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img src="./images/checkmark.png" alt="Experience icon" className="icon" />
              <div>
                <h3>Problem Solving</h3>
                <p>Experienced</p>
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