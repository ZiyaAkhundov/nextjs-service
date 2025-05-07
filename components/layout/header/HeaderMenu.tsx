import { useTranslations } from 'next-intl'
import React from 'react'

import { Button } from '@/components/ui/button'

import LanguageMenu from './LanguageMenu'
import { navLinks, socialLinks } from '@/constants/constants'
import { Link } from '@/i18n/navigation'

const HeaderMenu = () => {
	const t = useTranslations('header.nav')
	return (
		<div className='desktop:flex w-menu bg-light-gray hidden items-center justify-between rounded-2xl px-7 py-3.5 backdrop-blur-[7px]'>
			<nav className='flex items-center gap-[15px] xl:gap-[30px]'>
				{navLinks
					.filter(link => link.label !== 'contactUs')
					.map(link => (
						<Link key={link.href} href={link.href}>
							<p className='text-[15px] font-normal text-nowrap xl:text-base'>
								{t(link.label)}
							</p>
						</Link>
					))}
			</nav>
			<div className='flex items-center gap-10'>
				<div className='hidden items-center gap-[26px] xl:flex'>
					{socialLinks.map((link, index) => (
						<React.Fragment key={link.href}>
							<a
								href={link.href}
								className='relative flex items-center justify-center'
								aria-label={link.label}
							>
								<link.icon />
							</a>
							{index < socialLinks.length - 1 && (
								<div className='h-5 min-w-[1px] bg-[#727272]'></div>
							)}
						</React.Fragment>
					))}
				</div>
				<div className='flex items-center gap-3'>
					<Link href='/contact'>
						<Button variant='default'>
							<p className='text-base font-medium text-black'>
								{t('contactUs')}
							</p>
						</Button>
					</Link>
					<LanguageMenu />
				</div>
			</div>
		</div>
	)
}

export default HeaderMenu
