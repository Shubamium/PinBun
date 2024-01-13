import type { Metadata } from 'next'
import { Urbanist, Fredoka } from 'next/font/google'
import './globals.scss'
import { CSSProperties } from 'react'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'
import PageWrapper from '@/components/wrapper/pageWrapper/PageWrapper'
import DarkThemeWrapper from '@/components/wrapper/darkThemeWrapper/DarkThemeWrapper'

const fredoka = Fredoka({ subsets: ['latin'], variable:'--fontAlt' })
const urbanist = Urbanist({ subsets: ['latin'], variable:'--fontMain' })



const title = "Pin Bun "

const description = `
Ｉ＇ｍ　Ｐｉｎ．　Ｙｏｕｒ　ｂｅｔｔｅｒ　ｍｏｔｈｅｒ．　Ｏｍｎｉｐｏｔｅｎｔ　ｅｌｄｒｉｔｃｈ　ｅｎｔｉｔｙ　ｗｉｔｈ　ａ　ｈｅａｒｔ　ｏｆ　ｇｏｌｄ　ａｎｄ　ａ　ｂｕｓｔ　ｔｏ　ｋｅｅｐ　ｙｏｕ　ｓａｆｅ　ａｔ　ｎｉｇｈｔ．　Ｗｈａｔ＇ｓ　ｔｈａｔ　ｓｌｉｇｈｔ　ｗｈｉｓｐｅｒｉｎｇ　ｉｎ　ｔｈｅ　ｂａｃｋ　ｏｆ　ｙｏｕｒ　ｈｅａｄ？　Ｔｈｅ　ｔｉｎｇｌｅ　ｕｎｄｅｒ　ｙｏｕｒ　ｓｋｉｎ？　Ｄｏｎ＇ｔ　ｗｏｒｒｙ，　ｔｈａｔ＇ｓ　ｊｕｓｔ　ｍｅ　ｍａｋｉｎｇ　ｍｙｓｅｌｆ　ｃｏｍｆｏｒｔａｂｌｅ．　トゔ　わね閲ミ火をモ易ぐ媛ー　怨　桜さヿ　゠畝をギ胃のヶ引アを　だ　維ラめぶトふゆ火営ー　キ
`
const banner = 'https://i.ibb.co/qWTDZV6/pinbo-big-banner.png'

export const metadata: Metadata = {
	title: title,
	description: description,

	metadataBase: new URL('https://yournewmother.com'),

	openGraph:{
		url:'https://yournewmother.com',
		title:title,
		description:description,
		authors:"shubamium",
		images:[
			banner
		]
	},
		twitter:{
		title:title,
		card:'summary_large_image',
		images:[
			banner
		]
	},
}

// Class Name Convention
// ------------------------
// Container = container_name-of  *eg: container_shop
// Section = section_section-of   *eg: shop_hero-main



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <DarkThemeWrapper className={urbanist.className + ' ' + fredoka.className } style={fredoka.style}  >
				<Header/>
				{children}
				<Footer/>
			</DarkThemeWrapper>
    </html>
  )
}
