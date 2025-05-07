'use client'

import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui/button'

import { ButtonType } from '../../types'

import { Link } from '@/i18n/navigation'

const Buttons = ({ buttons }: { buttons: ButtonType[] }) => {
	const t = useTranslations()
	return (
		<div className='flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-6'>
			{buttons.map(button => (
				<Link href={button.link} key={button.link}>
					<Button
						variant={button.type}
						className='!px-6 py-5 min-[480px]:!px-10 min-[480px]:py-6'
					>
						{button.icon && (
							<button.icon className='!h-[24px] !w-[24px]' />
						)}
						<span className='text-sm leading-[1.5] text-black min-[480px]:text-base'>
							{t(button.label)}
						</span>
					</Button>
				</Link>
			))}
		</div>
	)
}

export default Buttons
