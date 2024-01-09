import React from 'react'
import './AboutMeSection.scss'
type Props = {}

export default function AboutMeSection({}: Props) {
	return (
		<section id="about_about-me">
			<figure className='gfx'>

				<div className="gfx-panel">
						<div className="data">
							<p>Age: <span className='corrupt'>X̶̛̩̳̺͇̥̓̓̾̄́̿̈́ẋ̶̡̛̗͖͓̳͖̪̟̘͎́̀̓̄̎̅͐͒̕̚͘͜͝ͅX̷͍͓͆͂̃̇̃͋͊̃̃͂̉̍͑͠Ẍ̷̨̜̲̜̜̱̤̗̌x̴̝̬̜͎͂̅̌͠͝ẋ̴͎̦͈͚͓̟͙̠̓̔͒̕</span></p>
							<p>Pronouns: <b>She/Her</b></p>
							<p>Favorite Snack: <b>You</b></p>
						</div>
				</div>
			</figure>
			<article className="bio">
				<div className="panel">
					<h1>About Me</h1>
					<div className="border"></div>
					<p className='bio'>
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
									<div className="tag-title">Art</div>
									<div className="tag-name">#artTag</div>
								</div>
								<div className="tag">
									<div className="tag-title">Art</div>
									<div className="tag-name">#artTag</div>
								</div>
								<div className="tag">
									<div className="tag-title">Art</div>
									<div className="tag-name">#artTag</div>
								</div>
								<div className="tag">
									<div className="tag-title">Art</div>
									<div className="tag-name">#artTag</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</article>
		</section>
	)
}