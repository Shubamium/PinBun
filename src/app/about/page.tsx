import React from 'react'
import AboutMeSection from './AboutMeSection/AboutMeSection'
import AboutStreamSection from './StreamSection/AboutStreamSection'
import AboutTingleSection from './TingleSection/AboutTingleSection'

type Props = {}

export default function page({}: Props) {
	return (
		<main id='container_about'>
			<AboutMeSection/>
			<AboutStreamSection/>
			<AboutTingleSection/>
		</main>
	)
}