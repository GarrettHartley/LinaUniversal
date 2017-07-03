import React, {Component} from 'react'
import s from './App.css'
import CenterItem from './CenterItem.jsx'


class OtherWork extends Component {

  constructor(props) {
    super(props);
    this.state = {excerptIsOpen: false};
  }

  toggleExcerpt(){
  	console.log("in toggle")
  	console.log(this.state)
  	this.setState({
      excerptIsOpen: !this.state.excerptIsOpen
    });
  }

	render() {
		let {title, citation, excerpt} = this.props

		return (
			<CenterItem>
				<p className={s.otherWorkTitle}>
					&ldquo;{title}&rdquo;
				</p> 
				{citation}
				<button className={s.viewExcerpt} onClick={() => this.toggleExcerpt()}>{ this.state.excerptIsOpen? 'Close' : 'Read Excerpt'}</button>
				{this.state.excerptIsOpen ? <p className={s.excerpt}>&ldquo;{excerpt}&rdquo;</p> : null}
			</CenterItem>
		)
	}
}

export default OtherWork