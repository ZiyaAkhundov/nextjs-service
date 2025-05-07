import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { Space_Grotesk } from 'next/font/google'

import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'

import '@/styles/globals.css'

const spaceGrotesk = Space_Grotesk({
	variable: '--font-space-grotesk',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'BIRainy | Analitika, tətbiqlərin hazırlanması xidməti',
	description:
		'BIRainy | sektordan asılı olmayaraq data üzərindən biznes həllər, sosial media marketinqi və proqram təminatının yazılımı üzrə xidmət göstərir.'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${spaceGrotesk.variable} antialiased`}
				suppressHydrationWarning
			>
				<NextIntlClientProvider>
					<Header />
					{children}
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
