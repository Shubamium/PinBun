import React from 'react'
import './galleryVessels.scss'
import { fetchData, urlFor } from '@/db/client'
type Props = {}


type VesselData = {
	_id: string
	name: string
	half_body: string
	full_body: string
	credits: {
		name: string
		link: string
	}[]
}
export default async function page({}: Props) {
	const data:VesselData[] =  await fetchData<any>(`
		*[_type == 'vessels'] | order(order asc){
			_id,
			name,
			half_body,
			full_body,
			credits[] {
				name,
				link
			}
		}
	
	`)
	return (
		<div id='gallery_vessels'>
				<div className="vessels-list">
						{data && data.length > 0 && data.map((vessel)=>{
							return 	<div className="vessel" key={vessel._id}>
								<div className="data">
									<div className="top">
										<h2 className='vessel-name'>{vessel.name}</h2>
									</div>
									<div className="bottom">
										{vessel.credits.map((ppl,index)=>{
											return <a href={ppl.link} target='_blank' className='credit' key={vessel._id+'-credit-'+ index}>{ppl.name}</a>
										})}
									</div>
								</div>
								<div className="decor_checker"></div>
								<div className="main-img">
									<img src={urlFor(vessel.half_body).url()} alt="body-half" className='half-img' />
									<img src={urlFor(vessel.full_body).url()} alt="model-fullbody" className='full-img' />
								</div>
							</div>
						})}
		
				
				</div>
		</div>
	)
}