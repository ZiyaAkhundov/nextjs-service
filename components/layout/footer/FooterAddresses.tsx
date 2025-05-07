'use client'

import { useTranslations } from 'next-intl'

import { addresses } from '@/constants/footer.constants'

const FooterAddresses = () => {
	const t = useTranslations('footer.address')
	return (
		<div className='grid gap-x-20 gap-y-6 pb-12 max-[1440px]:grid-cols-[2fr_2fr_1fr] max-[1280px]:grid-cols-2 max-[480px]:grid-cols-1 min-[1440px]:grid-cols-3'>
			{addresses.map(address => (
				<div key={address.id}>
					<p className='text-base font-normal text-white md:text-xl'>
						{t(address.name)}
					</p>
					<p className='mt-4 mb-5 text-sm font-normal text-[#ffffffa3] md:text-base'>
						{t(address.address)}
					</p>
				</div>
			))}
		</div>
	)
}

export default FooterAddresses
