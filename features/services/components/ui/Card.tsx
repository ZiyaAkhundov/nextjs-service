import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { Card as CardType } from '../../types'

const Card = ({ cards }: { cards: CardType[] }) => {
	const t = useTranslations()
	return (
		<div className='flex flex-col gap-4 md:grid md:grid-cols-2'>
			{cards.map(card => (
				<div
					key={card.title}
					className='flex flex-col justify-between overflow-hidden rounded-[12px] bg-[#f5f5f7]'
				>
					<div className='px-6 pt-6'>
						<p className='mb-1 text-lg text-[#000] min-[480px]:text-xl'>
							{t(card.title)}
						</p>
						<p className='text-sm leading-[1.5] text-[#000000b8] min-[480px]:text-base'>
							{t(card.description)}
						</p>
					</div>
					<div className='ml-auto w-4/5'>
						<Image
							src={card.image.src}
							alt={card.title}
							width={card.image.width}
							height={card.image.height}
							className='h-full w-full'
						/>
					</div>
				</div>
			))}
		</div>
	)
}

export default Card
