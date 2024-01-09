import React from 'react'
import './aboutMeSection.scss'
type Props = {}

export default function AboutMeSection({}: Props) {
	return (
		<section id="about_about-me">
			<figure className='gfx'>
				<div className="art-part">
						{/* Decoration */}
						<img src="/images/decorations/x_group.png" alt="" className='decor decor_exes el' />
						<img src="/images/decorations/carrot.png" alt="" className='decor decor_carrot l el' />
						<img src="/images/decorations/carrot.png" alt="" className='decor decor_carrot r er' />
						<img src="/images/decorations/red_heart.png" alt="" className='decor decor_heart red el' />
						<img src="/images/decorations/black_heart.png" alt="" className='decor decor_heart black er' />


						<img src="/images/graphics/about_main.png" alt="" className='main_art' />
				</div>
				<div className="gfx-panel">
						<div className="data">
							<p>Age: <span className='corrupt'>X̶̛̩̳̺͇̥̓̓̾̄́̿̈́ẋ̶̡̛̗͖͓̳͖̪̟̘͎́̀̓̄̎̅͐͒̕̚͘͜͝ͅX̷͍͓͆͂̃̇̃͋͊̃̃͂̉̍͑͠Ẍ̷̨̜̲̜̜̱̤̗̌x̴̝̬̜͎͂̅̌͠͝ẋ̴͎̦͈͚͓̟͙̠̓̔͒̕</span></p>
							<p>Pronouns: <b>She/Her</b></p>
							<p>Favorite Snack: <b>You</b></p>
						</div>
						<div className="logo">
							<img src="/images/graphics/logo_alt.png" alt="" className='img_logo' />
						</div>
				</div>
			</figure>
			<article className="bio">
				<img src="/images/decorations/about_ears.png" alt="" className='decor_ear' />
				<div className="panel">
					<h1>About Me</h1>
					<hr className='line'/>
					<p className='bio-text'>
						{`
							Hi! I'm Pin, your new - better - mom. Eldritch horror, mother, bunny girl, vtuber... What more could you ask for? I've spent the last 2 years building a fun and judgement-free space online for myself and my community. We play games, run events, and spend a lot of time just hanging out. Check out my socials and come see for yourself. 
							`}

						<br />
						{`
							Don't worry - I won't bite. I'm your mom now . ❤️
						`}
					</p>

					<div className="tags">
						<div className="tag-list">
							<div className="header">
								<h2>Tags</h2>
								<p className='icon'>#</p>
							</div>
							<div className="all-tags">
								<div className="tag">
									<div className="tag-title">Fan</div>
									<div className="tag-name">#PinPals</div>
								</div>
								<div className="tag">
									<div className="tag-title">Art</div>
									<div className="tag-name">#BunUps</div>
								</div>
								<div className="tag">
									<div className="tag-title">Live</div>
									<div className="tag-name">#PerceivePin</div>
								</div>
								<div className="tag">
									<div className="tag-title">Clip</div>
									<div className="tag-name">#ClipBun</div>
								</div>
							</div>

							<img src="/images/graphics/about_artside.png" alt="" className='decor_tagcheebs' />
						</div>
					</div>
				</div>
			</article>
		</section>
	)
}