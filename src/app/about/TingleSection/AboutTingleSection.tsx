import React from 'react'
import './aboutTingleSection.scss'
type Props = {}

export default function AboutTingleSection({}: Props) {
	return (
		<section id='about_tingle'>
			<div className="content">
				<article>
					<p className='question'>{"What's"} that slight whispering in the back of your head?
The tingle under your skin?</p>
					<br />
					<p className='answer light'>{`Don't worry that's just me making myself comfortable.`}</p>
					<p className='answer dark'>{`D̴̤̿̽̈͆o̷̢̤̲̞̮̅̓̄ņ̴͔͖̗͎̜̣̬̤̜͚͗̀̽̓̆́̍̍́̌̓͊͝'̶͍̘̇̓t̵̡̨̛̰̳̲̫̤̲̤̺̺̿̎̔̈͒̏̒͑͘͠ ̶̨̨̫͍̜̭͉̩̪͙̫̲͎̗̋̀̇͊̊́̾̅͊̕̕̚͘w̶̤̮̺̺̮̽͛̇̂̾̊͌o̵̡͕̟̩̲̜͎̣̼͎̅̌̐r̵̨̛̙̹̼͚͚̰͗͋̅̾̈́̂r̶̢̧̟͍̟̼͙̲͋̆̑̈͒̇̏̂͆͘͝ẙ̷̛̛̞͙̺̗̇̉̾͐͐̑̏̀͘̚ ̴̹͉̙̭̫̗͓̳̖̜͑́̐̓̽̈́ţ̵̧̨̨̱͇͉̤̮̳̟̣̱͐̓ͅḩ̷̡̩͎͔̫͙͓̦̈̑̆̒̉͗͂̑̿̕͝a̸̦̦͈̠͔̼͓̺͉̻̬̩̩͚͌̓ț̵̛̦͚̙̰̺̲̙̦͕̗̈̑̌̽̈́͆̽́͐̐͋͑̚͝ͅ'̴̢̞͕̦͍̪̤̈́͋̌̈́̍͒̆̏́͝͝ș̶̢̨͓̫͎͕͖̪̜͍̠͒̒̎͌̏ͅ ̴̛̱̰̉͐͒͐͝ͅj̸̢̱̺̘͎͖̰̯̩͉̳̫̭̑̓̀͛̚͜ù̸̬̻͓̞̼̟̱̫̘̳̪͓̥͈̇͆̆̚s̷̯̪͎̙̮̳̱͖̠̳̏͗͗̅͐ͅẗ̸̡̡̲̻́͆̓ ̶̹̦͎̘̹̖͖̻̈́̔̓͋͋̿͂͒̂̏̈͘m̵̨̢̧̗̮̰͕̮͔͔͚̳̯͘͜͜ę̶̫̼̠͕͙̭̠͓̦͌̇̍̎̎̄͘ͅͅ ̵̤̠̖̩͕̹̖͋͆́͛̅̍̋̓̎͘m̸̢͓̒͌̔̋̓́̾̍͘â̵̢̝̻̳̞̺̤̘̟͛̽̋̎̂̀͌ǩ̴̥̯̻̩̮̹̬͎̍͗́̄̈́̒͒̽̆̐̈́͠͝ĭ̶̛̞̳̎̄̓͌͗̈́͘͜n̸̨͍̬̼̯̿͋͒͂͂̈́̒̈́̚ĝ̵͉̀̿͝ ̸̳̣̙͚̝̤̯̰͚͇̏̈́͂̍̒͊̐͠ͅͅm̷̨̢͎͓̮̘̳̤̻̤͉̮̣̥͋́̿͛̉͒̿̊̚͝ý̷̧̺̳̖͖͈͈̦͇͓͜ͅs̶̨̥͉̳̪̻̟̙̪͑͊̽̈́̄̈́̀̿̄͒͗̀͝ͅe̷̢͖̠̺͚̫̫̲̺͎̹͌ͅl̷͕͔̜̲͔̀̀͐̒̀̄̈͝͠f̷̯̱̙̗̓̆ ̷̨͎̲̳̣̇̑̉̐̉͆̕c̶̥̖̠̤̺͚̼̺̅̋̽̾̋̂̄͌͠͝o̵̙̾̑͝m̶͉̲̰̞͉̼̘̖̔f̴̛̪̺̗̜̟̩̠̣͔̥͍̭̐̋̓̑̈̐͒̅̚͜͝͝ǫ̶̺̖̉͊͒͛̋ŗ̸̛͇̥̰̬̪̜̝̀͂́̈́̈́̂̀̐t̷̡͇̺̟̭̾͌͂̉͊̄̚ą̵̛͇͕̼͖͈́̂̍͑́̄̈́͆̀̉̈́̀̚͝b̷̟̱̿̅͛͌͑͋̀̿ļ̶͖̇̂̾̈́͗e̷̥͚̪̦͍̫̺̭̤̘̠̭͌̾̏͗͐͝.̷̞̘̻͓̤̺̺̺̼̩̻̬͓͖̲́͑̈̈̚͘̚`}</p>
				</article>
				<figure>
					<img src="/images/graphics/about_tingle.png" alt="" className='main-img' />
				</figure>
			</div>
		</section>
	)
}