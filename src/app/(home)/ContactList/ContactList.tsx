import React from 'react'
import {IoIosLock, IoIosUnlock, IoLogoTwitch, IoLogoTwitter, IoLogoYoutube, IoMdHeartEmpty} from 'react-icons/io'
import {FaCrown, FaDiscord, FaLock, FaShoppingCart, FaTiktok} from 'react-icons/fa'
import {CiHeart} from 'react-icons/ci'
import './contactList.scss'
type Props = {}

export default function ContactList({}: Props) {
	return (
		<div id="contacts">
		<a href="https://www.twitch.tv/pinbun" target='_blank' className='contact-heart'>
			<span className='bg-icon'> <CiHeart/></span>
			<span className='main-icon'> <IoLogoTwitch/></span>
		</a>
		<a href="https://www.youtube.com/channel/UC3viDK809osHvKK8wfq4iRw" target='_blank' className='contact-heart'>
			<span className='bg-icon'> <CiHeart/></span>
			<span className='main-icon'> <IoLogoYoutube/></span>
		</a>
		<a href="https://twitter.com/PinBunVT" target='_blank' className='contact-heart'>
			<span className='bg-icon'> <CiHeart/></span>
			<span className='main-icon'> <IoLogoTwitter/></span>
		</a>
		<a href="https://www.tiktok.com/@pinbunvtuber" target='_blank' className='contact-heart'>
			<span className='bg-icon'> <CiHeart/></span>
			<span className='main-icon'> <FaTiktok/></span>
		</a>
		{/* Invalid invite link */}
		<a href="https://discord.gg/pinpals" target='_blank' className='contact-heart'>
			<span className='bg-icon'> <CiHeart/></span>
			<span className='main-icon'> <FaDiscord/></span>
		</a>
		<a href="https://fansly.com/PinBunVT" target='_blank' className='contact-heart'>
			<span className='bg-icon'> <CiHeart/></span>
			<span className='main-icon'> <IoIosUnlock/></span>
		</a>
		<a href="https://throne.com/pinbun" target='_blank' className='contact-heart'>
			<span className='bg-icon'> <CiHeart/></span>
			<span className='main-icon'> <FaCrown/></span>
		</a>
		<a href="https://pinbunshop.bigcartel.com/" target='_blank' className='contact-heart'>
			<span className='bg-icon'> <CiHeart/></span>
			<span className='main-icon'> <FaShoppingCart/></span>
		</a>
	</div>
	)
}