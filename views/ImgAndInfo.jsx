import React, {Component} from 'react'
import s from './ImgAndInfo.css'
import appStyle from './App.css'

class ImgAndInfo extends Component {

	componentWillMount() {
	}

	renderInfoContainer(infoFirstFlag) {
		let {title, info, links} = this.props
		// let infoStyle = infoFirstFlag ? {paddingLeft: '5px'} : {paddingRight: '5px'}
		let infoClassName = infoFirstFlag ?  s.rightContentContainer : s.leftContentContainer 
		return (
				<div className={s.infoContainer}>
					<div className={infoClassName}>
						<div className={s.title}>{title}</div>
						<div className={s.info}>{info}</div>
						<div className={s.links}>{links}</div>
					</div>
				</div>
		)
	}

	render() {
		let {imgUrl, imgFirstFlag, title, info, links} = this.props
		let infoClassName = imgFirstFlag ?  s.rightContentContainer : s.leftContentContainer 
		let orderClass = imgFirstFlag ? ' ' : s.rightImg 

		return (
				<div className={appStyle.imgAndInfoContainer}>
					<div className={s.imgAndInfoContent}>
						
						<div className={s.infoContainer + ' ' + orderClass} >
							<div className={infoClassName}>
								<div className={s.title}>{title}</div>
								<div className={s.info}>{info}</div>
								<div className={s.links}>{links}</div>
							</div>
						</div>

						<div className={s.imgContainer}>
							<img style={{marginRight: imgFirstFlag ? 'auto' : null, marginLeft: imgFirstFlag ? null : 'auto' }} src={imgUrl}/>
						</div>
					</div>
				</div>
		)
	}
}

export default ImgAndInfo