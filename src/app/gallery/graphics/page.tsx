import React from 'react'
import './galleryGraphics.scss'
import { FaHeart } from 'react-icons/fa'
import { fetchData, urlFor } from '@/db/client'
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
		<div id='gallery_graphics'>
				<div className="graphic-list">
					{
						data && data.length > 0 && data.map((graphic)=>{
							return <figure className="graphic" key={graphic._id}>
								<div className="decors">
										<img src="/images/decorations/bunny_closed.png" alt="" className='decor bunny' />
										<img src="/images/decorations/pyon.png" alt="" className='decor pyon' />
										<img src="/images/decorations/carrot.png" alt="" className='decor carrot' />
								</div>
								<div className="info">
									<h2> <FaHeart/>{graphic.name}</h2>
									<a href={graphic.credit.link} className='credit'><span>{graphic.credit.name}</span></a>
								</div>
								<div className="graphic-part">
									<img src={urlFor(graphic.image).url()} alt="" className='main_graphic' />
								</div>
						</figure>
						}) 
					}
			
				
				</div>
		</div>
	)
}