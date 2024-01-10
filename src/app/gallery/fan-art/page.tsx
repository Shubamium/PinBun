import React from 'react'
import './galleryFanArt.scss'
import { FaPalette } from 'react-icons/fa'
import { fetchData, urlFor } from '@/db/client'
type Props = {}


type FanartData = {
	_id: string
	name: string
	image: string
	credit: {
		name: string
		link: string
	}
}
export default async function page({}: Props) {

	const data:FanartData[] =  await fetchData<any>(`
		*[_type == 'fanart']{
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
		<div id='gallery_fan-art'>
				<div className="art-list">
				{
					data && data.length > 0 && data.map((fanart)=>{
						return 	<figure className='art' key={fanart._id}>
						<div className="main-img">
									<img src={urlFor(fanart.image).url()} alt="" />
						</div>
						<div className="decoration">
							<img src="/images/decorations/bunny_m.png" alt="" />
							<img src="/images/decorations/bunny_m.png" alt="" />
							<img src="/images/decorations/bunny_m.png" alt="" />
						</div>
						<div className="info">
							<a href={fanart.credit.link} className='ppl'>
								<FaPalette/> {fanart.credit.name}
							</a>
						</div>
					</figure>
					})
				}
		

				</div>	
		</div>
	)
}