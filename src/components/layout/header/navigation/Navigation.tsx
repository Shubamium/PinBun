'use client'
import './navigation.scss'
import React from 'react'
import './navigation.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
type Props = {}

export default function Navigation({}: Props) {

	const currentPath = usePathname();
	const isActive = (target:string) => currentPath === target ? 'active' : ''; 
	const has = (target:string) => currentPath.includes(target) ? 'active' : ''; 
	
	return (
		<nav id='container_nav'>
			<Link href="/" className={`nav-link ${isActive('/')}`}>
				<img src="/images/icons/bunny.svg" alt="" className='icon'/>
				<span>home</span>
			</Link>
			<Link href="/about" className={`nav-link ${has('about')}`}>
				<img src="/images/icons/bunny.svg" alt="" className='icon'/>
				<span>about</span>
			</Link>
			<Link href="/gallery" className={`nav-link ${has('gallery')}`}>
				<img src="/images/icons/bunny.svg" alt="" className='icon'/>
				<span>gallery</span>
			</Link>
			<Link href="/shop" className={`nav-link ${has('shop')}`}>
				<img src="/images/icons/bunny.svg" alt="" className='icon'/>
				<span>shop</span>
			</Link>
			<Link href="/contact" className={`nav-link ${has('contact')}`}>
				<img src="/images/icons/bunny.svg" alt="" className='icon'/>
				<span>contact</span>
			</Link>
		</nav>
	)
}