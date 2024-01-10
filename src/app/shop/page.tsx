import React from 'react'
import './shop.scss'
import { FaPlus, FaShoppingBag, FaShoppingCart } from 'react-icons/fa'
import { fetchData, urlFor } from '@/db/client'
type Props = {}

type ProductData = {
	_id: string
	name: string
	description: string
	image: string
	price: string
	store_url: string
}
export default async function page({}: Props) {

	const data:ProductData[] =  await fetchData<any>(`
			*[_type == 'product']{
			_id,
			name,
			description,
			image,
			price,
			store_url
		}
`)
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
				{data && data.length > 0 && data.map((product)=>{
					return 	<div className="product" key={product._id}>
					<div className="img-part">
						<img src={urlFor(product.image).url()} alt="" className='img' />
						
						<div className="decor_bunnies">
							<img src="/images/decorations/bunny_m.png" alt="" />
							<img src="/images/decorations/bunny_m.png" alt="" />
							<img src="/images/decorations/bunny_m.png" alt="" />
						</div>
						<img src="/images/decorations/x_group_2.png" alt="" className='decor_exes' />
					</div>
					<div className="info-part">
					 <h2 className='prod-name'>{product.name}</h2>
					 <hr  className='line'/>
					 <p className='prod-desc'>{product.description}</p>
					</div>
					
					<img src="/images/decorations/slash.png" alt="" className='decor_slash' />
					<div className="pricing">
						<div className="price">{product.price}</div>
						<a href={product.store_url} className='btn add'> <FaPlus/> Add to cart </a>
					</div>
				</div>
				
				})}
			</div>
		</main>
	)
}