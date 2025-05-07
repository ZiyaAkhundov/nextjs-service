'use client'

import { useTranslations } from 'next-intl'

import { ServiceData, Tab } from '../../types'

import MinusIcon from '@/icons/Minus.icon'
import PlusIcon from '@/icons/Plus.icon'

interface TabSidebarProps {
	services: ServiceData[]
	activeServiceId: string
	activeTabId: string
	onServiceChange: (serviceId: number) => void
	onSubTabChange: (subTabId: number, parentServiceId: number) => void
	hasChildren: (service: ServiceData) => service is Tab
}

export const TabSidebar = ({
	services,
	activeServiceId,
	activeTabId,
	onServiceChange,
	onSubTabChange,
	hasChildren
}: TabSidebarProps) => {
	const t = useTranslations()

	if (services.length === 0) {
		return (
			<div className='w-full py-4 text-center'>
				No services available.
			</div>
		)
	}

	return (
		<div className='flex w-full flex-col gap-3'>
			{services.map(service => {
				const isSelectedService =
					activeServiceId === service.id.toString() && activeTabId
				const serviceIsTabWithChildren = hasChildren(service)

				return (
					<div
						key={service.id.toString()}
						className='rounded-[12px] border border-[#f5f5f7] bg-[#f5f5f7] transition-all duration-300 hover:border-amber-300'
					>
						<button
							className='flex w-full cursor-pointer items-center justify-between px-7 py-5 min-[1280px]:px-8 min-[1280px]:py-6'
							onClick={() => onServiceChange(service.id)}
						>
							<p className='text-xl leading-[1.33] text-black min-[1280px]:text-2xl'>
								{t(service.name)}
							</p>
							{hasChildren(service) ? (
								isSelectedService &&
								serviceIsTabWithChildren ? (
									<MinusIcon />
								) : (
									<PlusIcon />
								)
							) : null}
						</button>

						{isSelectedService && serviceIsTabWithChildren && (
							<div className='flex flex-col gap-4 border-t-2 border-[#00000029] px-7 py-5 min-[1280px]:px-8 min-[1280px]:py-6'>
								{service.children?.map(childTab => {
									if (childTab && childTab.tabs) {
										const currentChildTabId = childTab.tabs
										const isActiveSubTab =
											activeTabId ===
											currentChildTabId.toString()

										return (
											<button
												key={currentChildTabId}
												className={`cursor-pointer text-start text-xl leading-[1.4] ${
													isActiveSubTab
														? 'text-black'
														: 'text-[#0000007a]'
												}`}
												onClick={() =>
													onSubTabChange(
														currentChildTabId,
														service.id
													)
												}
											>
												{t(childTab.name ?? '')}
											</button>
										)
									}
									return null
								})}
							</div>
						)}
					</div>
				)
			})}
		</div>
	)
}
