import React from 'react'
import './shop.scss'
import { FaPlus, FaShoppingBag, FaShoppingCart } from 'react-icons/fa'
type Props = {}

export default function page({}: Props) {
	return (
		<main id='container_shop'>
			<header>
				<div className="bunny-decor r">
					<img src="/images/decorations/bunny_m.png" alt="" />
					<img src="/images/decorations/bunny_m.png" alt="" />
					<img src="/images/decorations/bunny_m.png" alt="" />
				</div>
				<div className="text">
					<h2><FaShoppingBag/> Shop</h2> 
				</div>
				<div className="bunny-decor r">
					<img src="/images/decorations/bunny_m.png" alt="" />
					<img src="/images/decorations/bunny_m.png" alt="" />
					<img src="/images/decorations/bunny_m.png" alt="" />
				</div>
			</header>

			<div className="product-list">
				<div className="product">
					<div className="img-part">
						<img src="/images/placeholders/product.png" alt="" className='img' />
						
						<div className="decor_bunnies">
							<img src="/images/decorations/bunny_m.png" alt="" />
							<img src="/images/decorations/bunny_m.png" alt="" />
							<img src="/images/decorations/bunny_m.png" alt="" />
						</div>
						<img src="/images/decorations/x_group_2.png" alt="" className='decor_exes' />
					</div>
					<div className="info-part">
					 <h2 className='prod-name'>Pibba Keychain Pack</h2>
					 <hr  className='line'/>
					 <p className='prod-desc'>{`
						Ever wanted a cute lil eldritch mom to carry around with you? Now's your chance!
					 `}</p>
					</div>
					
					<img src="/images/decorations/slash.png" alt="" className='decor_slash' />
					<div className="pricing">
						<div className="price">$15.00 - $45.00</div>
						<a href="#prod-link" className='btn add'> <FaPlus/> Add to cart </a>
					</div>
				</div>
				<div className="product">
					<div className="img-part">
						<img src="/images/placeholders/product.png" alt="" className='img' />
						
						<div className="decor_bunnies">
							<img src="/images/decorations/bunny_m.png" alt="" />
							<img src="/images/decorations/bunny_m.png" alt="" />
							<img src="/images/decorations/bunny_m.png" alt="" />
						</div>
						<img src="/images/decorations/x_group_2.png" alt="" className='decor_exes' />
					</div>
					<div className="info-part">
					 <h2 className='prod-name'>Pibba Keychain Pack</h2>
					 <hr  className='line'/>
					 <p className='prod-desc'>{`
						Ever wanted a cute lil eldritch mom to carry around with you? Now's your chance!
					 `}</p>
					</div>
					
					<img src="/images/decorations/slash.png" alt="" className='decor_slash' />
					<div className="pricing">
						<div className="price">$15.00 - $45.00</div>
						<a href="#prod-link" className='btn add'> <FaPlus/> Add to cart </a>
					</div>
				</div>

				<div className="product">
					<div className="img-part">
						<img src="/images/placeholders/product.png" alt="" className='img' />
						
						<div className="decor_bunnies">
							<img src="/images/decorations/bunny_m.png" alt="" />
							<img src="/images/decorations/bunny_m.png" alt="" />
							<img src="/images/decorations/bunny_m.png" alt="" />
						</div>
						<img src="/images/decorations/x_group_2.png" alt="" className='decor_exes' />
					</div>
					<div className="info-part">
					 <h2 className='prod-name'>Pibba Keychain Pack</h2>
					 <hr  className='line'/>
					 <p className='prod-desc'>{`
						Ever wanted a cute lil eldritch mom to carry around with you? Now's your chance!
					 `}</p>
					</div>
					
					<img src="/images/decorations/slash.png" alt="" className='decor_slash' />
					<div className="pricing">
						<div className="price">$15.00 - $45.00</div>
						<a href="#prod-link" className='btn add'> <FaPlus/> Add to cart </a>
					</div>
				</div>

				<div className="product">
					<div className="img-part">
						<img src="/images/placeholders/product.png" alt="" className='img' />
						
						<div className="decor_bunnies">
							<img src="/images/decorations/bunny_m.png" alt="" />
							<img src="/images/decorations/bunny_m.png" alt="" />
							<img src="/images/decorations/bunny_m.png" alt="" />
						</div>
						<img src="/images/decorations/x_group_2.png" alt="" className='decor_exes' />
					</div>
					<div className="info-part">
					 <h2 className='prod-name'>Pibba Keychain Pack</h2>
					 <hr  className='line'/>
					 <p className='prod-desc'>{`
						Ever wanted a cute lil eldritch mom to carry around with you? Now's your chance!
					 `}</p>
					</div>
					
					<img src="/images/decorations/slash.png" alt="" className='decor_slash' />
					<div className="pricing">
						<div className="price">$15.00 - $45.00</div>
						<a href="#prod-link" className='btn add'> <FaPlus/> Add to cart </a>
					</div>
				</div>

				<div className="product">
					<div className="img-part">
						<img src="/images/placeholders/product.png" alt="" className='img' />
						
						<div className="decor_bunnies">
							<img src="/images/decorations/bunny_m.png" alt="" />
							<img src="/images/decorations/bunny_m.png" alt="" />
							<img src="/images/decorations/bunny_m.png" alt="" />
						</div>
						<img src="/images/decorations/x_group_2.png" alt="" className='decor_exes' />
					</div>
					<div className="info-part">
					 <h2 className='prod-name'>Pibba Keychain Pack</h2>
					 <hr  className='line'/>
					 <p className='prod-desc'>{`
						Ever wanted a cute lil eldritch mom to carry around with you? Now's your chance!
					 `}</p>
					</div>
					
					<img src="/images/decorations/slash.png" alt="" className='decor_slash' />
					<div className="pricing">
						<div className="price">$15.00 - $45.00</div>
						<a href="#prod-link" className='btn add'> <FaPlus/> Add to cart </a>
					</div>
				</div>
			</div>
		</main>
	)
}