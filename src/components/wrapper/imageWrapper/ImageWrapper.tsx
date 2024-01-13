import React from 'react'
import './imageWrapper.scss'
type Props = {
	alt?:string;
	src:string;
	darkSrc?:string;
	className?:string;
	id?:string;
}

export default function ImageWrapper({alt,src,darkSrc,className,id}: Props) {
	return (
		<>
			<img alt={alt} src={src} className={className + `  image-wrapper light`} id={id}/>
			<img alt={alt} src={darkSrc} className={className + ` image-wrapper  dark`} id={id}/>
		</>
	)
}