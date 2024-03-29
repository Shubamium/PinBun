import React from 'react'
import './contact.scss'
import { CiHeart } from 'react-icons/ci'
import ContactList from '../(home)/ContactList/ContactList'
import PageWrapper from '@/components/wrapper/pageWrapper/PageWrapper'
import ImageWrapper from '@/components/wrapper/imageWrapper/ImageWrapper'
type Props = {}

export default function page({}: Props) {
	return (
		<PageWrapper id='container_contact'>
				<div className="decor_ears">
					<img src="/images/decorations/ear_limp.png" alt="" className='ear l ' />
					<img src="/images/decorations/ear_limp.png" alt="" className='ear r' />
				</div>
			<div className="contact-panel">
				<form action="https://formspree.io/f/mqkrakdv" method='POST' className='contact-form'>
					<div className="form-header">
						<div className="head">
							<h1>Contact</h1> 
							<img src='/images/decorations/bunny_l.png'></img>
						</div>
						<div className="desc">
							<p>Have any questions for me? Feel free to reach out using the form below!</p>
						</div>
					</div>
					<div className="group">
						<div className="form-group">
							<label htmlFor="name">Name</label>
							<input type="text" name="name" placeholder='Your name' id="name" />
						</div>
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input type="email" name="email" placeholder='your.email@here.com' id="email" />
						</div>
					</div>
					<div className="form-group message-form">
						<label htmlFor="message">Message</label>
						<textarea name="message" placeholder='Write your message here!' id="message"></textarea>
					</div>
				
					<div className="action">
						<div className="contact-container">
							<ContactList/>
						</div>
						<button type='submit' className='btn submit'> <span className='heart'> <CiHeart/></span>Send</button>
					</div>
				</form>
				<figure className='art-part'>
					<div className="art">
						<div className="decor_polar"></div>
						<ImageWrapper darkSrc='' src="/images/decorations/x_group_3.png" alt="" className='decor xgroup' />
						<ImageWrapper darkSrc='' src="/images/decorations/bheart_group.png" alt="" className='decor black' />
						<ImageWrapper darkSrc='/images/graphics/contact_main_d.png' src="/images/graphics/contact_main.png" alt="" className='art-img' />
						<ImageWrapper darkSrc='/images/graphics/contact_main_d_g.png' src="" alt="" className='art-img glow' />
					</div>
				</figure>
				<ImageWrapper darkSrc='/images/decorations/about_eyes.png' src="/images/decorations/carrot.png" alt="" className='decor_c carrot t' />
				<ImageWrapper darkSrc='/images/decorations/about_eyes.png' src="/images/decorations/carrot.png" alt="" className='decor_c carrot m' />
				<ImageWrapper darkSrc='/images/decorations/about_eyes.png' src="/images/decorations/carrot.png" alt="" className='decor_c carrot b' />
			</div>
		</PageWrapper>	
	)
}