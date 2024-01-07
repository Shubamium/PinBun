import React from 'react'
import './header.scss'
import Navigation from './navigation/Navigation'
type Props = {}

export default function Header({}: Props) {
	return (
		<header id='container_header'>
			<h1 style={{display:'none'}}>Pinbun</h1>
			<Navigation/>
		</header>
	)
}