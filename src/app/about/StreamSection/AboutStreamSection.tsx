import React from 'react'
type Props = {}
import './aboutStreamSection.scss'
import { FaArrowRight } from 'react-icons/fa'
import ImageWrapper from '@/components/wrapper/imageWrapper/ImageWrapper'

export default function AboutStreamSection({}: Props) {
	return (
		<section id='about_stream'>
			<div className="content">
				<figure>
					<ImageWrapper darkSrc='/images/graphics/hero_pfp_d.png' src="/images/graphics/about_stream.png" alt="" className='main_image' />
					<img src="/images/graphics/hero_pfp_d_g.png" alt="" className='decor_darkov' />
				</figure>
				<article>
					<div className="panel">
						<h2 className='title'>Come join my streams!</h2>
						<hr  className='line'/>
						<p className='description'>
								{`I'm`} a variety streamer, but you can expect some regular content to include: horror games, art streams, comfy streams, ASMR, vtuber collabs, lore interviews, and some other spicier content coming soon. <span className='h'>{`I'LL`}</span> be your new favorite in no time - my channel redeems {"can't"} be b<span className="h">EAT</span>. I stream at different times of the day, so <span className='h'>YOUR</span> chances of catching one during the week are high. <br/> <span className="h">S</span>o what are y<span className='h'>O</span>u waiting for? Check o<span className='h'>U</span>t my channe<span className="h">L</span> and VODs below~ ❤️
						</p>
						<div className="action">
							<a href="https://www.twitch.tv/pinbun/" target='_blank' className='btn watch'>Watch my streams <FaArrowRight/></a>

						</div>
						<img src="/images/decorations/black_heart.png" alt="" className='decor_heart r' />
						<img src="/images/decorations/red_heart.png" alt="" className='decor_heart l' />
					</div>
				</article>
			</div>
		</section>
	)
}