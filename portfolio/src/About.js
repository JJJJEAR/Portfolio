import React from 'react';
import Navbar from './navbar';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className="aboutPage">
        <div className="section">
          <h1>About Me</h1>
          <p>
            Hello! My name is Jullajak Saksri. <br/>
            I’m a 4 year student in the Bachelor of Engineering Program in Electronics Engineering Technology. <br/>
            I’m interested in interning for the position of a software engineer , programmer and developer.
          </p>
        </div>
        <div className="section">
          <h2>Education Timeline</h2>
          <div className="timeline">
            <div className="event">
              <div className="line"></div>
              <div className="date">----</div>
              <div className="description">
                <h3>TPN</h3>
                <p>SCHOOL</p>
              </div>
            </div>
            <div className="event">
              <div className="line"></div>
              <div className="date">---</div>
              <div className="description">
                <h3>KMUTNB</h3>
                <p>University</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <h2>My Skills</h2>
          <div className="skills">
            <SkillBar skill="HTML" points={9} />
            <SkillBar skill="CSS" points={8} />
            <SkillBar skill="JavaScript" points={7} />
            <SkillBar skill="React" points={8} />
            <SkillBar skill="Java" points={7} />
            <SkillBar skill="Python" points={6} />
            <SkillBar skill="Database" points={6} />
            <SkillBar skill="UI/UX Design" points={7} />
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillBar = ({ skill, points }) => (
  <div className="skillBar">
    <div className="skillName">{skill}</div>
    <div className="pointContainer">
      {[...Array(10)].map((_, index) => (
        <div key={index} className={index < points ? 'point filled' : 'point'}></div>
      ))}
    </div>
  </div>
);

export default AboutPage;