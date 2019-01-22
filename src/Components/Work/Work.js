import React from 'react';
import CONST from '../../Common/CONST';
import './work.scss';

const Work = (...props) => {

	const workHistory = CONST.work.map((workItem, index) => {
		return (
			<div key={`work ${index}`} className="work-item">
				<img src={`./images/${workItem.image}`} alt={workItem.image} />
				<div className="overlay">
					<span className="company">{workItem.company}</span>
					<span className="link">{workItem.link}</span>
					<span className="desc">{workItem.desc}</span>
				</div>
			</div>
		);
	});

	return(

		<section id="work">
			<div className="work-container">
				<h1>My Work</h1>
				<p className="intro">
					I have had the honor of working on many high visibility websites over the course of my career.  Responsive, pixel perfect, well organized and scalability are what I strive for in all of my websites. Below are just a few of the amazing companies I have had the privilege to work with.  
				</p>
				<div className="work-section">
					{workHistory}
				</div>
			</div>
		</section>
	)

}

export default Work;
