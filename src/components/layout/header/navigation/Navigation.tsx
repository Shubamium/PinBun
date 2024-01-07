import React from 'react'
import './navigation.scss'
import Link from 'next/link'
type Props = {}

export default function Navigation({}: Props) {
	return (
		<nav id='container_nav'>
			<Link href="/" className='nav-link active'>
				<img src="/images/icons/bunny.svg" alt="" className='icon'/>
				<span>home</span>
			</Link>
			<Link href="/about" className='nav-link'>
				<img src="/images/icons/bunny.svg" alt="" className='icon'/>
				<span>about</span>
			</Link>
			<Link href="/gallery" className='nav-link'>
				<img src="/images/icons/bunny.svg" alt="" className='icon'/>
				<span>gallery</span>
			</Link>
			<Link href="/shop" className='nav-link'>
				<img src="/images/icons/bunny.svg" alt="" className='icon'/>
				<span>shop</span>
			</Link>
			<Link href="/contact" className='nav-link'>
				<img src="/images/icons/bunny.svg" alt="" className='icon'/>
				<span>contact</span>
			</Link>
		</nav>
	)
}