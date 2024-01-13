import React from 'react'
import GalleryNavigation from './navigation/GalleryNavigation'
import PageWrapper from '@/components/wrapper/pageWrapper/PageWrapper'

type Props = {}

export default function layout({children}:any) {
	return (
		<main id='gallery_layout'>
			<GalleryNavigation/>
				{children}
		</main>
	)
}