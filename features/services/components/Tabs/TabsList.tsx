'use client'

import { useTabs } from '../../hooks/useTabs'
import { ServiceData } from '../../types'

import { TabContent } from './TabContent'
import { TabSidebar } from './TabSidebar'

interface TabsListProps {
	services: ServiceData[]
}

export const TabsList = ({ services }: TabsListProps) => {
	const {
		activeServiceId,
		activeTabId,
		handleServiceChange,
		handleSubTabNavigation,
		getActiveTabContent,
		hasChildren
	} = useTabs(services)

	const activeContent = getActiveTabContent()

	return (
		<div className='desktop:flex-row desktop:gap-12 flex w-full flex-col items-start gap-9'>
			<div className='desktop:w-[35%] desktop:sticky relative top-6 mb-6 w-full'>
				<TabSidebar
					services={services}
					activeServiceId={activeServiceId}
					activeTabId={activeTabId}
					onServiceChange={handleServiceChange}
					onSubTabChange={handleSubTabNavigation}
					hasChildren={hasChildren}
				/>
			</div>

			<div className='desktop:w-[65%] flex w-full flex-col gap-6'>
				{activeContent && <TabContent content={activeContent} />}
			</div>
		</div>
	)
}
