'use client'
import React from 'react'
import {AnimatePresence, motion} from 'framer-motion' 
type Props = {
	children:React.ReactNode
	className?:string,
	id?:string,
}

export default function PageWrapper({children,className = "",id = ""}: Props) {
	return (
		<AnimatePresence >
			<motion.main 
				key={id+className}
				id={id}
				className={className}
				initial={{
					opacity:0,
					y:200,
				}}
				animate={{
					opacity:1,
					y:0
				}}
				exit={{
					opacity:0,
					y:200
				}}
				transition={{
					ease:'backInOut',
					duration:.7,
				}}
				
			>
				{children}
			</motion.main>
		</AnimatePresence>
	)
}