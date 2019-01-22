import React from 'react';
import Quotes from '../Quotes/Quotes';
import './About.scss';

const About = () => {
  return (
    <section id="about">
      <img src="/images/vanessa.png" alt="Vanessa Henson"/>
      <p>
        I believe that if you truly love what you do, work is no longer work,
        it becomes something you look forward to doing every day.
      </p>
      <Quotes />
    </section>
  );
};

export default About;
