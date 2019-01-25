import React from 'react';
import Quotes from '../Quotes/Quotes';
import './About.scss';

const About = () => {
  return (
    <section id="about">
      <div className="content">
        <h1>Hi, I'm Vanessa.</h1>
        <img src="/images/vanessa.png" alt="Vanessa Henson"/>
     
        <p>I'm a developer, a mentor, and a team player. I believe in going the extra mile in all that I do. I know that the best ideas come when you work together with great people who have a common goal in mind.  Big egos don't belong in code, truly helping each other grow and achive is where the most success comes from.</p>
        <p>I believe that if you truly love what you do, work is no longer work,
				it becomes something you look forward to doing every day.</p>
   
        <br/><br/>
        <Quotes />
      </div>
    </section>
  );
};

export default About;
