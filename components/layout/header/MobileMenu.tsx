'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import LanguageMenu from './LanguageMenu'
import { navLinks, socialLinks } from '@/constants/constants'
import { Link } from '@/i18n/navigation'
import CloseIcon from '@/icons/Close.icon'
import HamburgerIcon from '@/icons/Hamburger.icon'

const MobileMenu = () => {
	const t = useTranslations('header.nav')
	const [open, setOpen] = useState(false)

	return (
		<div className='desktop:hidden flex items-center gap-2'>
			<LanguageMenu />
			<DropdownMenu open={open} onOpenChange={setOpen}>
				<DropdownMenuTrigger asChild aria-label='mobile-menu'>
					<Button variant='default' className='h-[45px] w-[59px]'>
						{open ? <CloseIcon /> : <HamburgerIcon />}
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className='desktop:hidden mt-1 h-[calc(100vh-71px)] w-screen rounded-none border-0 bg-white px-6 pb-0 shadow-none md:px-12'>
					<div className='flex h-full flex-col justify-between space-y-10 pt-10'>
						<nav className='mb-0 flex flex-col gap-6'>
							{navLinks.map(link => (
								<Link key={link.href} href={link.href}>
									<p className='text-2xl font-medium md:text-[28px]'>
										{t(link.label)}
									</p>
								</Link>
							))}
						</nav>
						<div className='mb-7'>
							<p className='mb-4 text-lg font-normal text-gray-500'>
								{t('followUs')}
							</p>
							<div className='mb-7 flex items-center space-x-5'>
								{socialLinks
									.filter(link => link.label !== 'tiktok')
									.map(link => (
										<Link key={link.href} href={link.href}>
											<Button
												variant='outline'
												key={link.href}
												className='h-12 w-12'
											>
												<link.icon
													className='!h-5 !w-5'
													fill={'gray'}
												/>
											</Button>
										</Link>
									))}
							</div>
							<a href='https://academy.birainy.com/'>
								<div className='w-full'>
									<Image
										className='w-full'
										src={'/academy_banner.webp'}
										alt='academy-logo'
										width={400}
										height={120}
										priority
									/>
								</div>
							</a>
						</div>
					</div>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}

export default MobileMenu
