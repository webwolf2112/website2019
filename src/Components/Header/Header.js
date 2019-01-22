import React from 'react';
import CONST from '../../Common/CONST';
import './Header.scss';


class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			hamburgerHelper: false,
		}
	};

	socialLinks = () => {
		return CONST.social.map((link, index) => {
			return <a key={`social-${index}`}href={link.link} target="blank" alt={link.name}>{link.name}</a>
		});
	};

	render() {
		return (
			<header className="header">
				<nav>
					<ul>
						<a href='#about' alt="about">about</a>
						<a href='#work' alt="work">work</a>
						<a href='#education' alt="education">education</a>
						<a href='#skills' alt="skills">skills</a>
					</ul>
				</nav>
				<section className="social">
					{this.socialLinks}
				</section>
				<h1>Vanessa Henson</h1>
				<h2>Front End Developer</h2>
			</header>
			)
	 }
};

export default Header;
