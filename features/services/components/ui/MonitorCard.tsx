import { useTranslations } from 'next-intl'

import { cn } from '@/lib/utils'

import { MonitorCardType } from '../../types'

const MonitorCard = ({ monitorCards }: { monitorCards: MonitorCardType[] }) => {
	const t = useTranslations()
	return (
		<div className='flex w-full flex-col gap-2 md:grid md:grid-cols-2 md:grid-rows-2'>
			{monitorCards.map((card, index) => (
				<div
					key={card.title}
					className={cn(
						'mb-2 flex w-full items-center justify-between rounded-[12px] bg-[#f5f5f7] px-6 py-4',
						index === 2 && 'col-span-2 row-span-2'
					)}
				>
					<p className='text-sm text-nowrap text-[#000000a3] min-[480px]:text-base'>
						{t(card.title)}
					</p>
					<p className='w-4/5 text-right text-[16px] text-black min-[480px]:text-lg md:w-auto md:text-xl'>
						{t(card.description)}
					</p>
				</div>
			))}
		</div>
	)
}

export default MonitorCard
