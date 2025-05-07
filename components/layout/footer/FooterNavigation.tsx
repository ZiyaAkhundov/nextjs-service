import { useTranslations } from 'next-intl'

import { navLinks, socialLinks } from '@/constants/constants'
import { Link } from '@/i18n/navigation'

const FooterNavigation = () => {
	const t = useTranslations('footer')
	return (
		<div className='desktop:flex-row desktop:items-end flex flex-col items-start justify-between gap-12 px-0 pt-8 pb-16 max-[480px]:pb-8'>
			<div>
				<p className='max-w-[340px] text-[40px] leading-[1.2] text-white max-[480px]:max-w-[260px] max-[480px]:text-[28px] md:text-5xl'>
					{t('title')}
				</p>
				<nav className='mt-8 flex flex-col items-start gap-5 md:flex-row md:items-center md:gap-8'>
					{navLinks
						.filter(link => link.label !== 'contactUs')
						.map(link => (
							<Link
								key={link.href}
								href={link.href}
								aria-label={link.label}
							>
								<p className='text-lg leading-[1.3] text-white'>
									{t(`nav.${link.label}`)}
								</p>
							</Link>
						))}
				</nav>
			</div>
			<div className='desktop:items-end flex flex-col items-start'>
				<p className='max-w-[340px] text-lg leading-[1.3] text-white'>
					{t('nav.followUs')}
				</p>
				<div className='mt-6 flex items-center gap-6'>
					{socialLinks.map(link => (
						<Link
							key={link.href}
							href={link.href}
							aria-label={link.label}
						>
							<div className='flex h-16 w-16 items-center justify-center rounded-full border border-white max-[480px]:h-12 max-[480px]:w-12'>
								<link.icon
									className='h-6 w-6 max-[480px]:h-6 max-[480px]:w-[18px]'
									fill='white'
								/>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

export default FooterNavigation
