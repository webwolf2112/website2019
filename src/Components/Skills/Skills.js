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


	return (

		<section id="skills">
			<div>
				<h1>What I'm great at.</h1>
				<h3>Current Position</h3>
				<div className="list">
					{current}
				</div>

				<h3>Past Positions</h3>
				<div className="list">
					{past}
				</div>
			</div>	
		</section>
	);

};

export default Skills;
