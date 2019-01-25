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
			{edu}
		</section>
	);
};

export default Education;
