import React from 'react'
import './aboutTingleSection.scss'
type Props = {}

export default function AboutTingleSection({}: Props) {
	return (
		<section id='about_tingle'>
			<div className="content">
				<article>
					<p className='question'>{"What's"} that slight whispering in the back of your head?
The tingle under your skin?</p>
					<br />
					<p className='answer'>{`Don't worry that's just me making myself comfortable.`}</p>
				</article>
				<figure>
					<img src="/images/graphics/about_tingle.png" alt="" className='main-img' />
				</figure>
			</div>
		</section>
	)
}