'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

import OrderIcon from '@/icons/Order.icon'
import StarIcon from '@/icons/Star.icon'

const PageInfo = () => {
	const t = useTranslations('services.pageInfo')

	return (
		<div className='dekstop:mt-[72px] desktop:mb-12 mt-6 mb-4 border-b border-[#000000a3] pb-8 min-[480px]:mt-12 min-[480px]:mb-6'>
			<div>
				<StarIcon className='!h-[34px] !w-[34px] min-[480px]:!h-[48px] min-[480px]:!w-[48px]' />
			</div>
			<div className='desktop:mt-8 mt-4 flex items-end justify-between min-[480px]:mt-6'>
				<div className='min-[480px]gap-6 desktop:gap-8 flex flex-col gap-4'>
					<h1 className='desktop:text-7xl text-4xl leading-[1.2] font-normal text-black min-[480px]:text-5xl md:text-[64px]'>
						{t('title')}
					</h1>
					<p className='max-w-[780px] text-sm leading-[1.5] text-[#000000b8] min-[480px]:text-base'>
						{t('description')}
					</p>
				</div>
				<div>
					<a href='' className='desktop:block group hidden'>
						<div className='relative h-[136px] w-[136px] rounded-full bg-[#000] transition-all duration-300'>
							<div className='absolute top-[calc(50%-23px)] left-[calc(50%-29px)] -rotate-30 transition-all duration-300 group-hover:rotate-0'>
								<Image
									src={'/direction.svg'}
									alt='icon'
									width={58}
									height={46}
								/>
							</div>
							<OrderIcon className='relative z-[2] h-[136px] w-[136px] animate-[OrderButton_9s_linear_infinite] fill-white group-hover:[animation-play-state:paused]' />
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}

export default PageInfo
