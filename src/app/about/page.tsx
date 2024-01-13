import React from 'react'
import AboutMeSection from './AboutMeSection/AboutMeSection'
import AboutStreamSection from './StreamSection/AboutStreamSection'
import AboutTingleSection from './TingleSection/AboutTingleSection'
import PageWrapper from '@/components/wrapper/pageWrapper/PageWrapper'

type Props = {}

export default function page({}: Props) {
	return (
		<PageWrapper id='container_about'>
			<AboutMeSection/>
			<AboutStreamSection/>
			<AboutTingleSection/>
		</PageWrapper>
	)
}