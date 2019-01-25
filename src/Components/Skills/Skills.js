import React from 'react';
import CONST from '../../Common/CONST';
import './Skills.scss';


const Skills = () => {
	const current = CONST.skills.current.map((skill, index) => {
		return <span key={`current-${index}`}>{skill}, </span>;
	});

	const past = CONST.skills.past.map((skill, index) => {
		return <span key={`past-${index}`}>{skill}, </span>;
	});

	const learning = CONST.skills.learning.map((skill, index) => {
		return <span key={`past-${index}`}>{skill}, </span>;
	});


	return (

		<section id="skills">
			<div>
				<h1>Skills</h1>
				<div className="list">
					<div>{current}</div>
					<h3>Current Position</h3>
				</div>

				<div className="list">
					<div>{past}</div>
					<h3>Past Positions</h3>
				</div>

				<div className="list">
					<div>{learning}</div>
					<h3>What's Next</h3>
				</div>
			</div>	
		</section>
	);

};

export default Skills;
