import React from 'react'
import './homeHeroSection.scss'
import { Overlock_SC } from 'next/font/google'
import Link from 'next/link'
import ContactList from '../ContactList/ContactList'

const overlock = Overlock_SC({ subsets: ['latin'], weight: '400' })
type Props = {

}

export default function HomeHeroSection({}: Props) {
	return (
		<section className='home_hero'>
			<article className='text'>
				<img src="/images/graphics/hero_logo.png" alt="" className='hero_logo' />
				<p className='tagline'>♡ Your favorite eldritch horror mother ♡</p>
				<p className='bio'>
					{`I'm Pin. Your better mother.`} <span className='highlight' style={overlock.style}>Omnipotent Eldritch Entity</span> <br />
with a heart of gold and a bust to keep you safe at night.
				</p>
				<p className='ott'>トゔ わね閲ミ火をモ易ぐ媛ー 怨 桜さヿ ゠畝をギ胃のヶ引アを だ 維ラめぶトふゆ火営ー キ</p>
				<div className="action">
					<a className='btn hi' href='https://www.twitch.tv/pinbun' target='_blank' >
						Say Hi!
					</a>
					<Link className='btn outline' href='/about'>
						More Info
					</Link>
				</div>
			</article>
			<figure className='image'>
					<div className='pfp'>
						<svg height="100%" width="100%" className='bordered'>
							<circle cx="150" cy="150" r="120" stroke="black" stroke-width="3" fill="transparent" />
						</svg> 
						<img src="/images/graphics/hero_pfp.png" alt="" className='main-pfp' />
						<img src="/images/decorations/big_ear.png" alt="" className='ear l' />
						<img src="/images/decorations/big_ear.png" alt="" className='ear r' />
					</div>
			</figure>
			<ContactList/>
		</section>
	)
}