import React from 'react'
import './galleryVessels.scss'
type Props = {}

export default function page({}: Props) {
	return (
		<div id='gallery_vessels'>
				<div className="vessels-list">
						<div className="vessel">
							<div className="data">
								<div className="top">
									<h2 className='vessel-name'>1.0 Vtuber Model</h2>
								</div>
								<div className="bottom">
									<a href="#" className='credit' >@ppl_name</a>
									<a href="#" className='credit' >@ppl_name</a>
								</div>
							</div>
							<div className="decor_checker"></div>
							<div className="main-img">
								<img src="/images/placeholders/half-body.png" alt="" className='half-img' />
								<img src="/images/placeholders/full-body.png" alt="" className='full-img' />
							</div>
						</div>
						<div className="vessel">
							<div className="data">
								<div className="top">
									<h2 className='vessel-name'>1.0 Vtuber Model</h2>
								</div>
								<div className="bottom">
									<a href="#" className='credit' >@ppl_name</a>
									<a href="#" className='credit' >@ppl_name</a>
								</div>
							</div>
							<div className="decor_checker"></div>
							<div className="main-img">
								<img src="/images/placeholders/half-body.png" alt="" className='half-img' />
								<img src="/images/placeholders/full-body.png" alt="" className='full-img' />
							</div>
						</div>
						<div className="vessel">
							<div className="data">
								<div className="top">
									<h2 className='vessel-name'>1.0 Vtuber Model</h2>
								</div>
								<div className="bottom">
									<a href="#" className='credit' >@ppl_name</a>
									<a href="#" className='credit' >@ppl_name</a>
								</div>
							</div>
							<div className="decor_checker"></div>
							<div className="main-img">
								<img src="/images/placeholders/half-body.png" alt="" className='half-img' />
								<img src="/images/placeholders/full-body.png" alt="" className='full-img' />
							</div>
						</div>
				
				</div>
		</div>
	)
}