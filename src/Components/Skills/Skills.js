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
					<h3>Current Role</h3>
					<div>{current}</div>
				</div>

				<div className="list">
					<h3>Past Roles</h3>
					<div>{past}</div>
				</div>

				<div className="list">
					<h3>Working On</h3>
					<div>{learning}</div>
				</div>
			</div>	
		</section>
	);

};

export default Skills;
