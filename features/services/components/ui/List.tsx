import { useTranslations } from 'next-intl'

import { ListType } from '../../types'

const List = ({ lists }: { lists: ListType[] }) => {
	const t = useTranslations()
	return lists.map((list, index) => (
		<div key={index}>
			{list.title && (
				<p className='text-sm text-[#000000b8] min-[480px]:text-base'>
					{t(list.title)}
				</p>
			)}
			<ul className='list-disc pl-6'>
				{list.elements.map((item, index) => (
					<li
						className='text-sm leading-[1.5] text-[#000000b8] min-[480px]:text-base'
						key={index}
					>
						{t(item)}
					</li>
				))}
			</ul>
		</div>
	))
}

export default List
