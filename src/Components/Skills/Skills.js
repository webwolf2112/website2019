import React from 'react';
import CONST from '../../Common/CONST';
import './Skills.scss';


const Skills = () => {
	const current = CONST.skills.current.map((skill, index) => {
		return <div key={`current-${index}`}>{skill}</div>;
	});

	const past = CONST.skills.past.map((skill, index) => {
		return <div key={`past-${index}`}>{skill}</div>;
	});


	return (

		<section id="skills">
			<h1>My Skills</h1>
			<h2>Current Position</h2>
			{current}

			<h2>Past Positions</h2>
			{past}
		</section>
	);

};

export default Skills;
