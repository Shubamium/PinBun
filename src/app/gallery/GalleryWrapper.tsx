'use client'
import React from 'react'
import {AnimatePresence, motion} from 'framer-motion' 
type Props = {
	children:React.ReactNode
	className?:string,
	id?:string,
}

export default function GalleryWrapper({children,className = "",id = ""}: Props) {
	return (
		<AnimatePresence >
			<motion.div 
				key={id+className}
				id={id}
				className={className}
				initial={{
					opacity:0,
					x:100,
				}}
				animate={{
					opacity:1,
					x:0
				}}
				exit={{
					opacity:0,
					x:100
				}}
				transition={{
					ease:'backInOut',
					duration:.7,
				}}
				
			>
				{children}
			</motion.div>
		</AnimatePresence>
	)
}