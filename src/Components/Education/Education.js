import React from 'react';
import CONST from '../../Common/CONST';
import './Education.scss';

const Education = () => {

	const eduItems = (items) => {
		return items.map((item, index) => {
			return <div className="edu-item" key={`eduItem-${index}`}>{item}</div>
		});
	};

	const edu = CONST.education.map((edu, index) => {
		return (
			<div key={`Education-${index}`} className="education-single">
			<div className="year">{edu.year}</div>
				{eduItems(edu.items)}
			</div>
		);
	});

	return (
		<section id="education">
			<h1>Education</h1>
			<p className="intro-paragraph">
				I believe that education is a never ending process. I love to learn and I constantly work improve my skills and learn new technologies. I always have
				a course or a tutorial that I am in the process of learning. I am passionate about all things tech from front end to back end and hopefully one day over to Robotics. 
			</p>
			{edu}
		</section>
	);
};

export default Education;
