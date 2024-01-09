'use client'
import Link from 'next/link'
import React from 'react'
import './galleryNavigation.scss'
import { usePathname } from 'next/navigation'
type Props = {}

export default function GalleryNavigation({}: Props) {

	const currentPath = usePathname();
	const isActive = (target:string) => currentPath === target ? 'active' : ''; 
	const has = (target:string) => currentPath.includes(target) ? 'active' : ''; 
	
	return (
		<nav className='gallery-nav'>
			<div className="heart-decor">
				<img src="/images/decorations/heart_small.png" alt="" className='decor_heart s' />
				<img src="/images/decorations/heart_small.png" alt="" className='decor_heart m' />
				<img src="/images/decorations/heart_small.png" alt="" className='decor_heart l' />
			</div>
			<div className="navigation">
				<Link href={'/gallery/vessels'} className={`g-nav btn ${has('vessels')}`}>Vessels</Link>
				<Link href={'/gallery/graphics'} className={`g-nav btn ${has('graphics')}`}>Graphics</Link>
				<Link href={'/gallery/fan-art'} className={`g-nav btn ${has('fan-art')}`}>Fan Art</Link>
			</div>
			<div className="heart-decor r">
				<img src="/images/decorations/heart_small.png" alt="" className='decor_heart s' />
				<img src="/images/decorations/heart_small.png" alt="" className='decor_heart m' />
				<img src="/images/decorations/heart_small.png" alt="" className='decor_heart l' />
			</div>
		</nav>
	)
}