import Image from 'next/image'
import React from 'react'

import { contacts } from '@/constants/footer.constants'
import CheckIcon from '@/icons/Check.icon'

const FooterCopyright = () => {
	return (
		<div className='desktop:flex-row desktop:items-center flex flex-col items-start justify-between gap-6 border-t border-white py-8'>
			<div className='flex items-center'>
				<CheckIcon />
				<p className='mr-3 ml-5 text-base text-white'>Partner with</p>
				<Image
					src={'/Microsoft.svg'}
					alt='partner'
					width={101}
					height={26}
				/>
			</div>
			<div className='flex flex-wrap items-center gap-8 gap-y-4'>
				{contacts.map(contact => (
					<a href={contact.href} key={contact.href}>
						<p className='text-lg font-medium text-white max-[480px]:text-[15px]'>
							{contact.label}
						</p>
					</a>
				))}
			</div>
		</div>
	)
}

export default FooterCopyright
