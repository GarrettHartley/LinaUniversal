import React, {Component} from 'react'
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor'
import ImgAndInfo from './ImgAndInfo.jsx'
import CenterItem from './CenterItem.jsx'
import OtherWork from './OtherWork.jsx'

import s from './App.css'

class App extends Component {
	// sites lina referenced
	// https://english.osu.edu/grad/mfa/faculty
	// http://baltimorereview.org/index.php/summer_2015/contributor/lina-ferreira

	componentWillMount(){
		configureAnchors({offset: -75, keepLastAnchorHash: false})
	}

	render() {

		return (
				<div className={s.pageColor}>
					<nav className={s.nav}>
						<ul>
							<li><a href="#about">About</a></li>
							<li><a href="#books">Books</a></li>
							<li><a href="#otherWorks">Other Works</a></li>
							<li><a href="#contact">Contact</a></li>
						</ul>
					</nav>
					<div className={s.flexContainer}>
							<div className={s.subPage}>
						<ScrollableAnchor id={'about'}>
								<CenterItem>
									<h1>Lina Ferreira</h1>
								</CenterItem>
						</ScrollableAnchor>

								<ImgAndInfo
								imgUrl={'../linaFerreira.jpg'}
								title=""
								info="Lina was born and raised (mostly) in Bogota, Colombia and has since then been tumbleweeding aimlessly through the world. She is the author of Drown Sever Sing, and her ode to cannibalism can be found in the collection titled, After Montaigne: Contemporary Essayists Cover the Essays. She is a graduate of The University of Iowa’s Creative Nonfiction and Literary Translation programs, and her work has been featured in Arts and Letters, The Chicago Review, and Fourth Genre, among others.  Her new book, Don't Come Back,  is published by Mad River Books, an imprint of The Ohio State University Press (January 2017). Ferreira is a recipient of the 2016 Rona Jaffe Foundation Writer's Award."
								imgFirstFlag={false}
								/>

								<hr/>

							</div>


							<div className={s.subPage}>
						<ScrollableAnchor id={'books'}>

								<CenterItem>
									<h1>Books</h1>
								</CenterItem>
						</ScrollableAnchor>

								<ImgAndInfo
										imgUrl={'../dontComeBack.jpg'}
										title="Don't Come Back"
										info="Don’t Come Back intermixes translations of Spanish adages and adaptations of major Colombian myths with personal essays about growing up amidst violence, magic, and an unyielding Andean sun. Home is place and time and people and language and history, and none of these are ever set in stone. Attempting to reconcile the irreconcilable and translate the untranslatable—to move smoothly and cohesively between culture, language, and place—Ferreira Cabeza-Vanegas is torn between spaces, between the aunt who begs her to return to Colombia and

										the mother who tells her, “There’s nothing here for you, Lina. Don’t come back.” Don’t Come Back is an exploration of home and identity that constantly asks, “If you really could go back, would you?"
										links={<a>this is a link</a>}
										imgFirstFlag={true}
								/>
								<ImgAndInfo
										imgUrl={'../DrownSeverSing.jpg'}
										title="DROWN/SEVER/SING"
										info="DROWN/SEVER/SIGN is a collection of short stories based on popular Colombian legend and folk tales, retold, recast and reimagined. The book opens with a brief creative nonfiction essay that explains the conceit of the project, to re-appropriate the monsters of folklore and legend, and take William Blake to heart when he wrote, &#34;Invent your own mythology or be a slave to another man's.&#34; What follows is a parade of humanized monsters and monstrous humans. Men with axes and devils with chafed inner thighs. Weeping women dreaming of drowning gods and an eleven year old Cain flirting with girls and inventing murder.&#34;
										the mother who tells her, &#34;There’s nothing here for you, Lina. Don’t come back.&#34; Don’t Come Back is an exploration of home and identity that constantly asks, &#34;If you really could go back, would you?&#34;"
										links={<a href="http://www.spdbooks.org/Products/9781939781277/drownseversing.aspx" target="_blank">Buy Book</a>}
										imgFirstFlag={false}
								/>
						<hr/>

							</div>


							<div className={s.subPage}>
						<ScrollableAnchor id={'otherWorks'}>

								<CenterItem>
								<h1>Other Works</h1>
								</CenterItem>
						</ScrollableAnchor>

								<OtherWork
									title="In Absentia: On Things Remembered and Forgotten."
									citation="Essay. The Iron Horse Review. 2009. "
									excerpt="The book opens with a brief creative nonfiction essay that explains the conceit of the project, to re-appropriate the monsters of folklore and legend, and take William Blake to heart when he wrote, &#34;Invent your own mythology or be a slave to another man's.&#34; What follows is a parade of humanized monsters and monstrous humans. Men with axes and devils with chafed inner thighs. Weeping women dreaming of drowning gods and an eleven year old Cain flirting with girls and inventing murder.&#34;
										the mother who tells her, &#34;There’s nothing here for you, Lina. Don’t come back.&#34; Don’t Come Back is an exploration of home and identity that constantly asks, &#34;If you really could go back, would you?&#34;"
								/>
								<OtherWork
									title="After The Colonel."
									citation="Essay. Wag’s Revue, Fall 2009. "
									excerpt="The book opens with a brief creative nonfiction essay that explains the conceit of the project, to re-appropriate the monsters of folklore and legend, and take William Blake to heart when he wrote, &#34;Invent your own mythology or be a slave to another man's.&#34; What follows is a parade of humanized monsters and monstrous humans. Men with axes and devils with chafed inner thighs. Weeping women dreaming of drowning gods and an eleven year old Cain flirting with girls and inventing murder.&#34;
										the mother who tells her, &#34;There’s nothing here for you, Lina. Don’t come back.&#34; Don’t Come Back is an exploration of home and identity that constantly asks, &#34;If you really could go back, would you?&#34;"
								
								/>
								<OtherWork
									title="What I Know About Love."
									citation="Essay. Inscape. Fall 2007. "
									excerpt="The book opens with a brief creative nonfiction essay that explains the conceit of the project, to re-appropriate the monsters of folklore and legend, and take William Blake to heart when he wrote, &#34;Invent your own mythology or be a slave to another man's.&#34; What follows is a parade of humanized monsters and monstrous humans. Men with axes and devils with chafed inner thighs. Weeping women dreaming of drowning gods and an eleven year old Cain flirting with girls and inventing murder.&#34;
										the mother who tells her, &#34;There’s nothing here for you, Lina. Don’t come back.&#34; Don’t Come Back is an exploration of home and identity that constantly asks, &#34;If you really could go back, would you?&#34;"
								
								/>
								<OtherWork
									title="Margarita Didn’t Mind."
									citation="Essay. Inscape. Fall 2006. "
									excerpt="The book opens with a brief creative nonfiction essay that explains the conceit of the project, to re-appropriate the monsters of folklore and legend, and take William Blake to heart when he wrote, &#34;Invent your own mythology or be a slave to another man's.&#34; What follows is a parade of humanized monsters and monstrous humans. Men with axes and devils with chafed inner thighs. Weeping women dreaming of drowning gods and an eleven year old Cain flirting with girls and inventing murder.&#34;
										the mother who tells her, &#34;There’s nothing here for you, Lina. Don’t come back.&#34; Don’t Come Back is an exploration of home and identity that constantly asks, &#34;If you really could go back, would you?&#34;"
								
								/>
						<hr/>

							</div>


							<div className={s.subPage}>
						<ScrollableAnchor id={'contact'}>

								<CenterItem>
								<h1>Contact</h1>
								</CenterItem>

						</ScrollableAnchor>
								<CenterItem>

								<div>email: IHateYou@us.uck.com</div>
								</CenterItem>

								<hr/>
							</div>
						


					</div>
				</div>
		)
	}

}

export default App
