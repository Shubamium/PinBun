import React from 'react'
import './galleryGraphics.scss'
import { FaHeart } from 'react-icons/fa'
import { fetchData, urlFor } from '@/db/client'
import GalleryWrapper from '../GalleryWrapper'
import ImageWrapper from '@/components/wrapper/imageWrapper/ImageWrapper'
type Props = {}
type GraphicData = {
	_id: string
	name: string
	image: string
	credit: {
		name: string
		link: string
	}
}
export default async function page({}: Props) {

	const data:GraphicData[] =  await fetchData<any>(`
	*[_type == 'graphics']{
		_id,
		name,
		image,
		credit {
			name,
			link
		}
	}
`)
	return (
		<GalleryWrapper id='gallery_graphics'>
				<div className="graphic-list">
					{
						data && data.length > 0 && data.map((graphic)=>{
							return <figure className="graphic" key={graphic._id}>
								<div className="decors">
										<ImageWrapper darkSrc='/images/decorations/bunny_open.png' src="/images/decorations/bunny_closed.png" alt="" className='decor bunny' />
										<ImageWrapper darkSrc='/images/decorations/about_eyes.png' src="/images/decorations/pyon.png" alt="" className='decor pyon' />
										<ImageWrapper darkSrc="/images/decorations/about_eyes.png" src='' alt="" className='decor carrot' />
										<ImageWrapper darkSrc="/images/decorations/about_claw.png" src='' alt="" className='decor claw' />
								</div>
								<div className="info">
									<h2> <FaHeart/>{graphic.name}</h2>
									<a href={graphic.credit.link} target='_blank'  className='credit'><span>{graphic.credit.name}</span></a>
								</div>
								<div className="graphic-part">
									<img src={urlFor(graphic.image).url()} alt="" className='main_graphic' />
								</div>
						</figure>
						}) 
					}
			
				
				</div>
		</GalleryWrapper>
	)
}