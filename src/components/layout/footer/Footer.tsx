import React from 'react'
import './footer.scss'
import { FaExclamationTriangle } from 'react-icons/fa'
type Props = {}

export default function Footer({}: Props) {
	return (
		<footer id='container_footer'>
			<p>
				Website Design by <a href='https://twitter.com/Shubamium2' target='_blank'><b className='light'>Shubamium</b> <b className="dark">Š̷̛̼̻̼̰̭͖͓̀͆́͑̔̍̌̈́̌͊̔̈͐͂͌̓̚̚͝͝h̵̢̲̬̥̩̖͐͊̈̆̊̑̃͆̿̇̌͊͐̓͋̔͒̄́̕̚͘u̴̡̧͙͚͍̟̹̣͉̘̰͕̝͔̪͍͐̂͑̓̓͋͐́̑̓̅̈͐͊̈̏̈̔̔̈́͝b̸̛̻͉̗͕̳͉̦̗̩̈́̑̋̓̓̈́̓͋͌̒̍͜͝͝ͅä̷̧͇͔̼͕̦͔̗́͂̔̄̑̇̈́̈́̇̑͜͝m̶̢̢͙͍͙̭̭̻͚̳̙̖͊̀̇̀̓̉͜͜ĩ̶̧̧̢̛̠̰̠̩̺̗̼̟̦̺̃̓̒ͅu̵̧͇̙̮̻̗̙̦͐̊̉̍̈́̅̂̌̓̽̀̊͐̐͝ͅͅm̴̢̡͕͙̖̱͉̣͙͉̥̗̞͚͔̰̱̫̄͛͌̏̏̀̀̏̅̆̊͛̇͊̓</b></a> -  PinBun VT &copy;2024
			</p>
			<p>
				<FaExclamationTriangle/> Intense Lighting Change Warning
			</p>
		</footer>
	)
}