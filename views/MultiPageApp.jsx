import React, {Component} from 'react'
import s from './App.css'
import {Link} from 'react-router';

class MultiPageApp extends Component {

	render(){
		console.log("check props")
		return (
				<div>
					<nav className={s.nav}>
						<ul>
							<li><Link to="/MultiPageApp/about">About</Link></li>
							<li><Link to="/MultiPageApp/writings">Writings</Link></li>
							<li><Link to="/MultiPageApp/something-else">Something Else</Link></li>
							<li><Link to="/MultiPageApp/contact">Contact</Link></li>
						</ul>
					</nav>
					{this.props.children}


				</div>
		)
	}

}

export default MultiPageApp