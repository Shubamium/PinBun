import React from 'react'
import GalleryNavigation from './navigation/GalleryNavigation'

type Props = {}

export default function layout({children}:any) {
	return (
		<main id='gallery_layout'>
			<GalleryNavigation/>
			<div className="content">
				{children}
			</div>
		</main>
	)
}