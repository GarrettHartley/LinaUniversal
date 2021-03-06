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
		console.log("hello?")
	}
	componentDidMount(){
		console.log("hello?")
	}

	render() {

		return (
				<div className={s.pageColor}>
				<script>
				console.log("hello?")
				</script>
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
									<h1>About</h1>
								</CenterItem>
						</ScrollableAnchor>

								<CenterItem>
									<p className={s.about}>
										Lina was born and raised (mostly) in Bogota, Colombia and has since then been tumbleweeding aimlessly through the world. She is the author of Drown Sever Sing, and her ode to cannibalism can be found in the collection titled, After Montaigne: Contemporary Essayists Cover the Essays. She is a graduate of The University of Iowa’s Creative Nonfiction and Literary Translation programs, and her work has been featured in Arts and Letters, The Chicago Review, and Fourth Genre, among others.  Her new book, Don't Come Back,  is published by Mad River Books, an imprint of The Ohio State University Press (January 2017). Ferreira is a recipient of the 2016 Rona Jaffe Foundation Writer's Award.

									</p>
								</CenterItem>
								{/*<ImgAndInfo
								imgUrl={'../linaFerreira.jpg'}
								title=""
								info="Lina was born and raised (mostly) in Bogota, Colombia and has since then been tumbleweeding aimlessly through the world. She is the author of Drown Sever Sing, and her ode to cannibalism can be found in the collection titled, After Montaigne: Contemporary Essayists Cover the Essays. She is a graduate of The University of Iowa’s Creative Nonfiction and Literary Translation programs, and her work has been featured in Arts and Letters, The Chicago Review, and Fourth Genre, among others.  Her new book, Don't Come Back,  is published by Mad River Books, an imprint of The Ohio State University Press (January 2017). Ferreira is a recipient of the 2016 Rona Jaffe Foundation Writer's Award."
								imgFirstFlag={false}
								/>

								 {/*<hr/>*/}

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
										links={<a href="https://www.amazon.com/Don-t-Come-Back-Century-Essays/dp/0814253954/ref=sr_1_1?ie=UTF8&qid=1499942963&sr=8-1&keywords=don%27t+come+back+lina+ferreira" target="_black" >Buy Book</a>}
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
						{/*<hr/>*/}

							</div>


							<div className={s.subPage}>
						<ScrollableAnchor id={'otherWorks'}>


						<CenterItem>
						<h2>Works in progress</h2>
						</CenterItem>
						</ScrollableAnchor>
						<CenterItem>
						The Devil Takes Seven Souls. Novel.
						</CenterItem>
 						
 						<CenterItem>
						The Former New Kingdom of Granada. Nonfiction.   
						</CenterItem>  

						<CenterItem>
						<h2>In Periodicals, Anthologies & Podcasts</h2>
						</CenterItem>
								<OtherWork
									title="One Night Less in Baghdad."
									citation="Translation. “Una Noche Menos en Baghdad” by Pedro M. Villalora, for podcast Play for Voices. 2018. "
									excerpt="The book opens with a brief creative nonfiction essay that explains the conceit of the project, to re-appropriate the monsters of folklore and legend, and take William Blake to heart when he wrote, &#34;Invent your own mythology or be a slave to another man's.&#34; What follows is a parade of humanized monsters and monstrous humans. Men with axes and devils with chafed inner thighs. Weeping women dreaming of drowning gods and an eleven year old Cain flirting with girls and inventing murder.&#34;
										the mother who tells her, &#34;There’s nothing here for you, Lina. Don’t come back.&#34; Don’t Come Back is an exploration of home and identity that constantly asks, &#34;If you really could go back, would you?&#34;"
								
								/>
								<OtherWork
									title="Coming Back."
									citation="Feature. Poets & Writers. Forthcoming 2017."
									excerpt="The book opens with a brief creative nonfiction essay that explains the conceit of the project, to re-appropriate the monsters of folklore and legend, and take William Blake to heart when he wrote, &#34;Invent your own mythology or be a slave to another man's.&#34; What follows is a parade of humanized monsters and monstrous humans. Men with axes and devils with chafed inner thighs. Weeping women dreaming of drowning gods and an eleven year old Cain flirting with girls and inventing murder.&#34;
										the mother who tells her, &#34;There’s nothing here for you, Lina. Don’t come back.&#34; Don’t Come Back is an exploration of home and identity that constantly asks, &#34;If you really could go back, would you?&#34;"
								
								/>
								<OtherWork
									title="The Man Walks In and Removes His Hat."
									citation="Essay. The LA Review of Books. Forthcoming 2017."
									excerpt="The book opens with a brief creative nonfiction essay that explains the conceit of the project, to re-appropriate the monsters of folklore and legend, and take William Blake to heart when he wrote, &#34;Invent your own mythology or be a slave to another man's.&#34; What follows is a parade of humanized monsters and monstrous humans. Men with axes and devils with chafed inner thighs. Weeping women dreaming of drowning gods and an eleven year old Cain flirting with girls and inventing murder.&#34;
										the mother who tells her, &#34;There’s nothing here for you, Lina. Don’t come back.&#34; Don’t Come Back is an exploration of home and identity that constantly asks, &#34;If you really could go back, would you?&#34;"
								
								/>
								<OtherWork
									title="Aurelia."
									citation="Essay. Eleven Eleven. January 2017."
									excerpt="The book opens with a brief creative nonfiction essay that explains the conceit of the project, to re-appropriate the monsters of folklore and legend, and take William Blake to heart when he wrote, &#34;Invent your own mythology or be a slave to another man's.&#34; What follows is a parade of humanized monsters and monstrous humans. Men with axes and devils with chafed inner thighs. Weeping women dreaming of drowning gods and an eleven year old Cain flirting with girls and inventing murder.&#34;
										the mother who tells her, &#34;There’s nothing here for you, Lina. Don’t come back.&#34; Don’t Come Back is an exploration of home and identity that constantly asks, &#34;If you really could go back, would you?&#34;"
								
								/>
								<OtherWork
									title="Allá En La Fuente."
									citation="Essay in the anthology This is the Place. Seal Press, Perseus Books, LLC, a subsidiary of Hachette Book Group, Inc. September 2017."
									excerpt="The book opens with a brief creative nonfiction essay that explains the conceit of the project, to re-appropriate the monsters of folklore and legend, and take William Blake to heart when he wrote, &#34;Invent your own mythology or be a slave to another man's.&#34; What follows is a parade of humanized monsters and monstrous humans. Men with axes and devils with chafed inner thighs. Weeping women dreaming of drowning gods and an eleven year old Cain flirting with girls and inventing murder.&#34;
										the mother who tells her, &#34;There’s nothing here for you, Lina. Don’t come back.&#34; Don’t Come Back is an exploration of home and identity that constantly asks, &#34;If you really could go back, would you?&#34;"
								
								/>
								<OtherWork
									title="María, María, María, María."
									citation="(Excerpt from Translations in Diagram in Translation). Translation. Stonecutter Journal. Spring 2016."
									excerpt="The book opens with a brief creative nonfiction essay that explains the conceit of the project, to re-appropriate the monsters of folklore and legend, and take William Blake to heart when he wrote, &#34;Invent your own mythology or be a slave to another man's.&#34; What follows is a parade of humanized monsters and monstrous humans. Men with axes and devils with chafed inner thighs. Weeping women dreaming of drowning gods and an eleven year old Cain flirting with girls and inventing murder.&#34;
										the mother who tells her, &#34;There’s nothing here for you, Lina. Don’t come back.&#34; Don’t Come Back is an exploration of home and identity that constantly asks, &#34;If you really could go back, would you?&#34;"
								
								/>
								<OtherWork
									title="Tinfoil Astronaut."
									citation="Essay. The Sunday Rumpus. Forthcoming November 2016."
									excerpt="The book opens with a brief creative nonfiction essay that explains the conceit of the project, to re-appropriate the monsters of folklore and legend, and take William Blake to heart when he wrote, &#34;Invent your own mythology or be a slave to another man's.&#34; What follows is a parade of humanized monsters and monstrous humans. Men with axes and devils with chafed inner thighs. Weeping women dreaming of drowning gods and an eleven year old Cain flirting with girls and inventing murder.&#34;
										the mother who tells her, &#34;There’s nothing here for you, Lina. Don’t come back.&#34; Don’t Come Back is an exploration of home and identity that constantly asks, &#34;If you really could go back, would you?&#34;"
								
								/>
								<OtherWork
									title="Drowning Lessons."
									citation="Essay. Hotel Amerika. September 2016."
									excerpt="The book opens with a brief creative nonfiction essay that explains the conceit of the project, to re-appropriate the monsters of folklore and legend, and take William Blake to heart when he wrote, &#34;Invent your own mythology or be a slave to another man's.&#34; What follows is a parade of humanized monsters and monstrous humans. Men with axes and devils with chafed inner thighs. Weeping women dreaming of drowning gods and an eleven year old Cain flirting with girls and inventing murder.&#34;
										the mother who tells her, &#34;There’s nothing here for you, Lina. Don’t come back.&#34; Don’t Come Back is an exploration of home and identity that constantly asks, &#34;If you really could go back, would you?&#34;"
								
								/>
								<OtherWork
									title="Rio Que Sale” & “Del Dicho Al Hecho"
									citation="(Excerpt from Translations in Diagram in Translation). Translation. Stonecutter Journal. Spring 2016."
									excerpt="The book opens with a brief creative nonfiction essay that explains the conceit of the project, to re-appropriate the monsters of folklore and legend, and take William Blake to heart when he wrote, &#34;Invent your own mythology or be a slave to another man's.&#34; What follows is a parade of humanized monsters and monstrous humans. Men with axes and devils with chafed inner thighs. Weeping women dreaming of drowning gods and an eleven year old Cain flirting with girls and inventing murder.&#34;
										the mother who tells her, &#34;There’s nothing here for you, Lina. Don’t come back.&#34; Don’t Come Back is an exploration of home and identity that constantly asks, &#34;If you really could go back, would you?&#34;"
								
								/>
								<OtherWork
									title="Of Cannibal."
									citation="Essay in the anthology After Montaigne. University of Georgia Press. March 2015."
									excerpt="The book opens with a brief creative nonfiction essay that explains the conceit of the project, to re-appropriate the monsters of folklore and legend, and take William Blake to heart when he wrote, &#34;Invent your own mythology or be a slave to another man's.&#34; What follows is a parade of humanized monsters and monstrous humans. Men with axes and devils with chafed inner thighs. Weeping women dreaming of drowning gods and an eleven year old Cain flirting with girls and inventing murder.&#34;
										the mother who tells her, &#34;There’s nothing here for you, Lina. Don’t come back.&#34; Don’t Come Back is an exploration of home and identity that constantly asks, &#34;If you really could go back, would you?&#34;"
								
								/>
								<OtherWork
									title="Pain Pays the Income of Each Precious Thing."
									citation="Essay. Brevity. September 2015."
									excerpt="The book opens with a brief creative nonfiction essay that explains the conceit of the project, to re-appropriate the monsters of folklore and legend, and take William Blake to heart when he wrote, &#34;Invent your own mythology or be a slave to another man's.&#34; What follows is a parade of humanized monsters and monstrous humans. Men with axes and devils with chafed inner thighs. Weeping women dreaming of drowning gods and an eleven year old Cain flirting with girls and inventing murder.&#34;
										the mother who tells her, &#34;There’s nothing here for you, Lina. Don’t come back.&#34; Don’t Come Back is an exploration of home and identity that constantly asks, &#34;If you really could go back, would you?&#34;"
								
								/>
								<OtherWork
									title="The Peach Orchard."
									citation="Essay. Fourth Genre. Fall 2015"
									excerpt="The book opens with a brief creative nonfiction essay that explains the conceit of the project, to re-appropriate the monsters of folklore and legend, and take William Blake to heart when he wrote, &#34;Invent your own mythology or be a slave to another man's.&#34; What follows is a parade of humanized monsters and monstrous humans. Men with axes and devils with chafed inner thighs. Weeping women dreaming of drowning gods and an eleven year old Cain flirting with girls and inventing murder.&#34;
										the mother who tells her, &#34;There’s nothing here for you, Lina. Don’t come back.&#34; Don’t Come Back is an exploration of home and identity that constantly asks, &#34;If you really could go back, would you?&#34;"
								
								/>
								<OtherWork
									title="Cain."
									citation="Short story. The Baltimore Review. July 2015."
									excerpt="The book opens with a brief creative nonfiction essay that explains the conceit of the project, to re-appropriate the monsters of folklore and legend, and take William Blake to heart when he wrote, &#34;Invent your own mythology or be a slave to another man's.&#34; What follows is a parade of humanized monsters and monstrous humans. Men with axes and devils with chafed inner thighs. Weeping women dreaming of drowning gods and an eleven year old Cain flirting with girls and inventing murder.&#34;
										the mother who tells her, &#34;There’s nothing here for you, Lina. Don’t come back.&#34; Don’t Come Back is an exploration of home and identity that constantly asks, &#34;If you really could go back, would you?&#34;"
								
								/>

								<OtherWork
									title="The Wee She-Dog."
									citation="Translation/poem. M-Dash. June 2015."
									excerpt="The book opens with a brief creative nonfiction essay that explains the conceit of the project, to re-appropriate the monsters of folklore and legend, and take William Blake to heart when he wrote, &#34;Invent your own mythology or be a slave to another man's.&#34; What follows is a parade of humanized monsters and monstrous humans. Men with axes and devils with chafed inner thighs. Weeping women dreaming of drowning gods and an eleven year old Cain flirting with girls and inventing murder.&#34;
										the mother who tells her, &#34;There’s nothing here for you, Lina. Don’t come back.&#34; Don’t Come Back is an exploration of home and identity that constantly asks, &#34;If you really could go back, would you?&#34;"
								
								/>
								<OtherWork
									title="BOG – MIA – CID."
									citation="Essay. Arts & Letters. Spring 2015."
									excerpt="The book opens with a brief creative nonfiction essay that explains the conceit of the project, to re-appropriate the monsters of folklore and legend, and take William Blake to heart when he wrote, &#34;Invent your own mythology or be a slave to another man's.&#34; What follows is a parade of humanized monsters and monstrous humans. Men with axes and devils with chafed inner thighs. Weeping women dreaming of drowning gods and an eleven year old Cain flirting with girls and inventing murder.&#34;
										the mother who tells her, &#34;There’s nothing here for you, Lina. Don’t come back.&#34; Don’t Come Back is an exploration of home and identity that constantly asks, &#34;If you really could go back, would you?&#34;"
								
								/>
								<OtherWork
									title="Muybridge."
									citation="Poem. Rattle. June 2015."
									excerpt="The book opens with a brief creative nonfiction essay that explains the conceit of the project, to re-appropriate the monsters of folklore and legend, and take William Blake to heart when he wrote, &#34;Invent your own mythology or be a slave to another man's.&#34; What follows is a parade of humanized monsters and monstrous humans. Men with axes and devils with chafed inner thighs. Weeping women dreaming of drowning gods and an eleven year old Cain flirting with girls and inventing murder.&#34;
										the mother who tells her, &#34;There’s nothing here for you, Lina. Don’t come back.&#34; Don’t Come Back is an exploration of home and identity that constantly asks, &#34;If you really could go back, would you?&#34;"
								
								/>


								<OtherWork
									title="Empire of Toes."
									citation="Essay. The Chicago Review. October 2014."
									excerpt="The book opens with a brief creative nonfiction essay that explains the conceit of the project, to re-appropriate the monsters of folklore and legend, and take William Blake to heart when he wrote, &#34;Invent your own mythology or be a slave to another man's.&#34; What follows is a parade of humanized monsters and monstrous humans. Men with axes and devils with chafed inner thighs. Weeping women dreaming of drowning gods and an eleven year old Cain flirting with girls and inventing murder.&#34;
										the mother who tells her, &#34;There’s nothing here for you, Lina. Don’t come back.&#34; Don’t Come Back is an exploration of home and identity that constantly asks, &#34;If you really could go back, would you?&#34;"
								/>
								<OtherWork
									title="Practice."
									citation="Essay. Guernica/PEN America. June 2014"
									excerpt="The book opens with a brief creative nonfiction essay that explains the conceit of the project, to re-appropriate the monsters of folklore and legend, and take William Blake to heart when he wrote, &#34;Invent your own mythology or be a slave to another man's.&#34; What follows is a parade of humanized monsters and monstrous humans. Men with axes and devils with chafed inner thighs. Weeping women dreaming of drowning gods and an eleven year old Cain flirting with girls and inventing murder.&#34;
										the mother who tells her, &#34;There’s nothing here for you, Lina. Don’t come back.&#34; Don’t Come Back is an exploration of home and identity that constantly asks, &#34;If you really could go back, would you?&#34;"
								
								/>
								<OtherWork
									title="El Hombre Caimán."
									citation="Short story. The Rio Grande Review. 2014."
									excerpt="The book opens with a brief creative nonfiction essay that explains the conceit of the project, to re-appropriate the monsters of folklore and legend, and take William Blake to heart when he wrote, &#34;Invent your own mythology or be a slave to another man's.&#34; What follows is a parade of humanized monsters and monstrous humans. Men with axes and devils with chafed inner thighs. Weeping women dreaming of drowning gods and an eleven year old Cain flirting with girls and inventing murder.&#34;
										the mother who tells her, &#34;There’s nothing here for you, Lina. Don’t come back.&#34; Don’t Come Back is an exploration of home and identity that constantly asks, &#34;If you really could go back, would you?&#34;"
								
								/>
								<OtherWork
									title="Catching Moths."
									citation="Essay. Drunken Boat. 2014."
									excerpt="The book opens with a brief creative nonfiction essay that explains the conceit of the project, to re-appropriate the monsters of folklore and legend, and take William Blake to heart when he wrote, &#34;Invent your own mythology or be a slave to another man's.&#34; What follows is a parade of humanized monsters and monstrous humans. Men with axes and devils with chafed inner thighs. Weeping women dreaming of drowning gods and an eleven year old Cain flirting with girls and inventing murder.&#34;
										the mother who tells her, &#34;There’s nothing here for you, Lina. Don’t come back.&#34; Don’t Come Back is an exploration of home and identity that constantly asks, &#34;If you really could go back, would you?&#34;"
								/>
								<OtherWork
									title="Rare Misprinted Scott Russell Sanders Postcard: Next best thing to 'Inverted Jenny'; essayist must have."
									citation="Collaboration, Franklin, Joey, Madden, Patrick, et al.) The Normal School. Fall 2013."
									excerpt="The book opens with a brief creative nonfiction essay that explains the conceit of the project, to re-appropriate the monsters of folklore and legend, and take William Blake to heart when he wrote, &#34;Invent your own mythology or be a slave to another man's.&#34; What follows is a parade of humanized monsters and monstrous humans. Men with axes and devils with chafed inner thighs. Weeping women dreaming of drowning gods and an eleven year old Cain flirting with girls and inventing murder.&#34;
										the mother who tells her, &#34;There’s nothing here for you, Lina. Don’t come back.&#34; Don’t Come Back is an exploration of home and identity that constantly asks, &#34;If you really could go back, would you?&#34;"
								
								/>
								<OtherWork
									title="Amor con Amor."
									citation="Essay. Anomalous Press. 2013."
									excerpt="The book opens with a brief creative nonfiction essay that explains the conceit of the project, to re-appropriate the monsters of folklore and legend, and take William Blake to heart when he wrote, &#34;Invent your own mythology or be a slave to another man's.&#34; What follows is a parade of humanized monsters and monstrous humans. Men with axes and devils with chafed inner thighs. Weeping women dreaming of drowning gods and an eleven year old Cain flirting with girls and inventing murder.&#34;
										the mother who tells her, &#34;There’s nothing here for you, Lina. Don’t come back.&#34; Don’t Come Back is an exploration of home and identity that constantly asks, &#34;If you really could go back, would you?&#34;"
								
								/>
								<OtherWork
									title="Del Agua Mansa Me Libre Dios."
									citation="Translation/Fiction. Anomalous Press. 2013."
									excerpt="The book opens with a brief creative nonfiction essay that explains the conceit of the project, to re-appropriate the monsters of folklore and legend, and take William Blake to heart when he wrote, &#34;Invent your own mythology or be a slave to another man's.&#34; What follows is a parade of humanized monsters and monstrous humans. Men with axes and devils with chafed inner thighs. Weeping women dreaming of drowning gods and an eleven year old Cain flirting with girls and inventing murder.&#34;
										the mother who tells her, &#34;There’s nothing here for you, Lina. Don’t come back.&#34; Don’t Come Back is an exploration of home and identity that constantly asks, &#34;If you really could go back, would you?&#34;"
								
								/>
								<OtherWork
									title="Lo Que Quiere."
									citation="Essay. Chapbook collaboration with Kendra Greene. Greene Ink Press. 2011. "
									excerpt="The book opens with a brief creative nonfiction essay that explains the conceit of the project, to re-appropriate the monsters of folklore and legend, and take William Blake to heart when he wrote, &#34;Invent your own mythology or be a slave to another man's.&#34; What follows is a parade of humanized monsters and monstrous humans. Men with axes and devils with chafed inner thighs. Weeping women dreaming of drowning gods and an eleven year old Cain flirting with girls and inventing murder.&#34;
										the mother who tells her, &#34;There’s nothing here for you, Lina. Don’t come back.&#34; Don’t Come Back is an exploration of home and identity that constantly asks, &#34;If you really could go back, would you?&#34;"
								/>
								<OtherWork
									title="Deal Amor Al Odio."
									citation="Essay. Anomalous Press. 2011."
									excerpt="The book opens with a brief creative nonfiction essay that explains the conceit of the project, to re-appropriate the monsters of folklore and legend, and take William Blake to heart when he wrote, &#34;Invent your own mythology or be a slave to another man's.&#34; What follows is a parade of humanized monsters and monstrous humans. Men with axes and devils with chafed inner thighs. Weeping women dreaming of drowning gods and an eleven year old Cain flirting with girls and inventing murder.&#34;
										the mother who tells her, &#34;There’s nothing here for you, Lina. Don’t come back.&#34; Don’t Come Back is an exploration of home and identity that constantly asks, &#34;If you really could go back, would you?&#34;"
								
								/>
								<OtherWork
									title="Sonambula."
									citation="Essay. H.O.W. Journal. 2011."
									excerpt="The book opens with a brief creative nonfiction essay that explains the conceit of the project, to re-appropriate the monsters of folklore and legend, and take William Blake to heart when he wrote, &#34;Invent your own mythology or be a slave to another man's.&#34; What follows is a parade of humanized monsters and monstrous humans. Men with axes and devils with chafed inner thighs. Weeping women dreaming of drowning gods and an eleven year old Cain flirting with girls and inventing murder.&#34;
										the mother who tells her, &#34;There’s nothing here for you, Lina. Don’t come back.&#34; Don’t Come Back is an exploration of home and identity that constantly asks, &#34;If you really could go back, would you?&#34;"
								
								/>
								<OtherWork
									title="Catalogue of Dead Birds."
									citation="Essay. Bellingham Review. 2010. "
									excerpt="The book opens with a brief creative nonfiction essay that explains the conceit of the project, to re-appropriate the monsters of folklore and legend, and take William Blake to heart when he wrote, &#34;Invent your own mythology or be a slave to another man's.&#34; What follows is a parade of humanized monsters and monstrous humans. Men with axes and devils with chafed inner thighs. Weeping women dreaming of drowning gods and an eleven year old Cain flirting with girls and inventing murder.&#34;
										the mother who tells her, &#34;There’s nothing here for you, Lina. Don’t come back.&#34; Don’t Come Back is an exploration of home and identity that constantly asks, &#34;If you really could go back, would you?&#34;"
								
								/>

								<OtherWork
									title="In Absentia: On Things Remembered and Forgotten."
									citation="Essay. The Iron Horse Review. 2009. "
									excerpt="The book opens with a brief creative nonfiction essay that explains the conceit of the project, to re-appropriate the monsters of folklore and legend, and take William Blake to heart when he wrote, &#34;Invent your own mythology or be a slave to another man's.&#34; What follows is a parade of humanized monsters and monstrous humans. Men with axes and devils with chafed inner thighs. Weeping women dreaming of drowning gods and an eleven year old Cain flirting with girls and inventing murder.&#34;
										the mother who tells her, &#34;There’s nothing here for you, Lina. Don’t come back.&#34; Don’t Come Back is an exploration of home and identity that constantly asks, &#34;If you really could go back, would you?&#34;"
								/>
								<OtherWork
									hasLinks={true}
									source="http://wagsrevue.com/Issue_4/#/83"
									title="After The Colonel."
									citation="Essay. Wag’s Revue, Fall 2009. "
									excerpt="The cats were poisoned seven days before my grandfather fell from the sky strapped to a faulty parachute. One, Niky, made it to my grandmother’s feet, washing them with blood before collapsing. Yuri never came back."
								
								/>
								<OtherWork
									hasLinks={true}
									source="http://inscape.byu.edu/2011/11/16/what-i-know-about-love/"
									title="What I Know About Love."
									citation="Essay. Inscape. Fall 2007. "
									excerpt="Her husband is long like a lecture and thin like Bible pages. He tried to tell me—but his toothless accent was too thick so I had to hear it from someone else—that he was an Argentinean soccer player once. He stood around as I dove headfirst into knees and shins belonging to boys with worn-out tennis shoes trying to score against my team. My arms wrapped around the ball like desperate lovers, and worn-out tennis shoes raced back into midfield."
								
								/>
								<OtherWork
									hasLinks={true}
									source="http://inscape.byu.edu/2011/11/16/margarita-didnt-mind/"
									title="Margarita Didn’t Mind."
									citation="Essay. Inscape. Fall 2006. "
									excerpt="She wore a white lace dress; a normal dress, I guess, for the occasion. I wonder who picked it. As I stood over the wooden box, it seemed to me that the dress had grown an unnatural extension, and it ate up her neck in sloppy stitches. The stale white dress was more alive than she was—hands stiffly bent over stomach and eyelids pulled over like the final bed sheets of the corpse. She doesn’t look peaceful at all, sleeping there, I thought while I watched her encased in white silk, just very still and quiet, like the silence in hospitals or of angry parents."
								
								/>
								
						{/*<hr/>*/}

							</div>


							<div className={s.subPage}>
						<ScrollableAnchor id={'contact'}>

								<CenterItem>
								<h1>Contact</h1>
								</CenterItem>

						</ScrollableAnchor>
								<CenterItem>
								<div className={s.email}>lina.ferreira@gmail.com </div>
								<div className={s.email}>Agent: eharris@foliolit.com</div>
								</CenterItem>

								{/*<hr/>*/}
							</div>
						


					</div>
				</div>
		)
	}

}

export default App
