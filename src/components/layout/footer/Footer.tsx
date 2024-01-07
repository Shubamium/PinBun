import React from 'react'
import './footer.scss'
type Props = {}

export default function Footer({}: Props) {
	return (
		<footer id='container_footer'>
			<p>
				Website Design by <a href='https://twitter.com/Shubamium2' target='_blank'><b>Shubamium</b></a> -  PinBun VT &copy;2024
			</p>
		</footer>
	)
}