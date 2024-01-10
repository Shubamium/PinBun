import React from 'react'
import {IoIosLock, IoIosUnlock, IoLogoTwitch, IoLogoTwitter, IoLogoYoutube, IoMdHeartEmpty} from 'react-icons/io'
import {FaCrown, FaDiscord, FaLock, FaShoppingCart, FaTiktok} from 'react-icons/fa'
import {CiHeart} from 'react-icons/ci'
import './contactList.scss'
type Props = {}

export default function ContactList({}: Props) {
	return (
		<div id="contacts">
		<a href="#" target='_blank' className='contact-heart'>
			<span className='bg-icon'> <CiHeart/></span>
			<span className='main-icon'> <IoLogoTwitch/></span>
		</a>
		<a href="#" target='_blank' className='contact-heart'>
			<span className='bg-icon'> <CiHeart/></span>
			<span className='main-icon'> <IoLogoYoutube/></span>
		</a>
		<a href="#" target='_blank' className='contact-heart'>
			<span className='bg-icon'> <CiHeart/></span>
			<span className='main-icon'> <IoLogoTwitter/></span>
		</a>
		<a href="#" target='_blank' className='contact-heart'>
			<span className='bg-icon'> <CiHeart/></span>
			<span className='main-icon'> <FaTiktok/></span>
		</a>
		<a href="#" target='_blank' className='contact-heart'>
			<span className='bg-icon'> <CiHeart/></span>
			<span className='main-icon'> <FaDiscord/></span>
		</a>
		<a href="#" target='_blank' className='contact-heart'>
			<span className='bg-icon'> <CiHeart/></span>
			<span className='main-icon'> <IoIosUnlock/></span>
		</a>
		<a href="#" target='_blank' className='contact-heart'>
			<span className='bg-icon'> <CiHeart/></span>
			<span className='main-icon'> <FaCrown/></span>
		</a>
		<a href="#" target='_blank' className='contact-heart'>
			<span className='bg-icon'> <CiHeart/></span>
			<span className='main-icon'> <FaShoppingCart/></span>
		</a>
	</div>
	)
}