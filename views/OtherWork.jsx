import React, {Component} from 'react'
import s from './App.css'
import CenterItem from './CenterItem.jsx'


class OtherWork extends Component {

  constructor(props) {
    super(props);
    this.state = {excerptIsOpen: false};
  }

  toggleExcerpt(){
  	this.setState({
      excerptIsOpen: !this.state.excerptIsOpen
    });
  }

	render() {
		let {title, citation, excerpt, hasLinks, source} = this.props

		return (
			<CenterItem>
			<div className={s.otherWorkContainer}>
				<p className={s.otherWorkTitle}>
					&ldquo;{title}&rdquo;
				</p> 
				{citation}
				<br/>
			{hasLinks ?
				<div className={s.otherWorkButtonsContainer}>
					<a className={s.source} href={source} target="_blank">view source</a>
					<div className={s.excerptContainer}>
						<button className={s.viewExcerpt} onClick={() => this.toggleExcerpt()}>{ this.state.excerptIsOpen? 'Close' : 'Read Excerpt'}</button>
					</div>
				</div>
				: null}
				{this.state.excerptIsOpen ? <p className={s.excerpt}>&ldquo;{excerpt}&rdquo;</p> : null}
			
			
			</div>
			</CenterItem>
		)
	}
}

export default OtherWork