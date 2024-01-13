'use client'
import React from 'react'
import {IoIosLock, IoIosUnlock, IoLogoTwitch, IoLogoTwitter, IoLogoYoutube, IoMdHeartEmpty} from 'react-icons/io'
import {FaCrown, FaDiscord, FaLock, FaShoppingCart, FaTiktok} from 'react-icons/fa'
import {CiHeart} from 'react-icons/ci'
import './contactList.scss'
type Props = {}
import {motion} from 'framer-motion'


const contactHeartVariants = {
	initial:{
		x:-100,
		opacity:0,
		scale:2,
	},
	animate:{
		x:0,
		opacity:1,
		scale:1,
	},

}
export default function ContactList({}: Props) {
	let delay = 0;
	const getDelay = () =>{
		const newDelay = delay + 0.11
		delay = newDelay
		return newDelay	
	}

	const getTransition = () =>{
		return {
			duration:0.5,
			delay:getDelay(),
			ease:'easeOut',
			bounce:1
		}
	}
	return (
		<motion.div id="contacts">
			<motion.a key={'twitch'} variants={contactHeartVariants} transition={getTransition()} initial="initial"  animate="animate" href="https://www.twitch.tv/pinbun" target='_blank' className='contact-heart'>
				<span className='bg-icon'> <CiHeart/></span>
				<span className='main-icon'> <IoLogoTwitch/></span>
			</motion.a>
			<motion.a  key={'youtube'} variants={contactHeartVariants} transition={getTransition()} initial="initial"  animate="animate"  href="https://www.youtube.com/channel/UC3viDK809osHvKK8wfq4iRw" target='_blank' className='contact-heart'>
				<span className='bg-icon'> <CiHeart/></span>
				<span className='main-icon'> <IoLogoYoutube/></span>
			</motion.a>
			<motion.a  variants={contactHeartVariants} transition={getTransition()} initial="initial"  animate="animate"  href="https://twitter.com/PinBunVT" target='_blank' className='contact-heart'>
				<span className='bg-icon'> <CiHeart/></span>
				<span className='main-icon'> <IoLogoTwitter/></span>
			</motion.a>
			<motion.a  variants={contactHeartVariants} transition={getTransition()} initial="initial"  animate="animate"  href="https://www.tiktok.com/@pinbunvtuber" target='_blank' className='contact-heart'>
				<span className='bg-icon'> <CiHeart/></span>
				<span className='main-icon'> <FaTiktok/></span>
			</motion.a>
			{/* Invalid invite link */}
			<motion.a  variants={contactHeartVariants} transition={getTransition()} initial="initial"  animate="animate"  href="https://discord.gg/pinpals" target='_blank' className='contact-heart'>
				<span className='bg-icon'> <CiHeart/></span>
				<span className='main-icon'> <FaDiscord/></span>
			</motion.a>
			<motion.a  variants={contactHeartVariants} transition={getTransition()} initial="initial"  animate="animate"  href="https://fansly.com/PinBunVT" target='_blank' className='contact-heart'>
				<span className='bg-icon'> <CiHeart/></span>
				<span className='main-icon'> <IoIosUnlock/></span>
			</motion.a>
			<motion.a  variants={contactHeartVariants} transition={getTransition()} initial="initial"  animate="animate"  href="https://throne.com/pinbun" target='_blank' className='contact-heart'>
				<span className='bg-icon'> <CiHeart/></span>
				<span className='main-icon'> <FaCrown/></span>
			</motion.a>
			<motion.a  variants={contactHeartVariants} transition={getTransition()} initial="initial"  animate="animate"  href="https://pinbunshop.bigcartel.com/" target='_blank' className='contact-heart'>
				<span className='bg-icon'> <CiHeart/></span>
				<span className='main-icon'> <FaShoppingCart/></span>
			</motion.a>
	</motion.div>
	)
}