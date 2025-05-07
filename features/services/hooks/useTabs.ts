'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { ServiceData, Tab, TabContent } from '../types'

import { useRouter } from '@/i18n/navigation'

export const useTabs = (services: ServiceData[]) => {
	const router = useRouter()
	const searchParams = useSearchParams()

	const idParam = searchParams.get('id')
	const tabParam = searchParams.get('tab')

	const getInitialServiceId = (): string => {
		if (services.length === 0) return '1'

		if (idParam) {
			const serviceExists = services.some(
				service => service.id.toString() === idParam
			)
			if (serviceExists) return idParam
		}

		return services[0]?.id.toString() || '1'
	}

	const [activeServiceId, setActiveServiceId] = useState<string>(
		getInitialServiceId()
	)
	const [activeTabId, setActiveTabId] = useState<string>(tabParam || '')

	useEffect(() => {
		setActiveServiceId(getInitialServiceId())
	}, [idParam, services])

	useEffect(() => {
		setActiveTabId(tabParam || '')
	}, [tabParam])

	const hasChildren = (service: ServiceData): service is Tab =>
		'children' in service && Array.isArray(service.children)

	const handleServiceChange = (serviceId: number) => {
		const idStr = serviceId.toString()
		setActiveServiceId(idStr)

		const selectedService = services.find(
			service => service.id.toString() === idStr
		)
		const query: { id: string; tab?: string } = { id: idStr }

		if (selectedService && hasChildren(selectedService)) {
			const children = selectedService.children || []
			if (children.length > 0) {
				const firstChild = children[0]
				if (firstChild?.tabs) {
					query.tab = firstChild.tabs.toString()
					setActiveTabId(query.tab)
				}
			}
		}

		router.replace({ pathname: '/', query }, { scroll: false })
	}

	const handleSubTabNavigation = (
		subTabId: number,
		parentServiceId: number
	) => {
		const tabIdStr = subTabId.toString()
		setActiveTabId(tabIdStr)

		const query = {
			id: parentServiceId.toString(),
			tab: tabIdStr
		}
		router.replace({ pathname: '/', query }, { scroll: false })
	}

	const getActiveService = (): ServiceData | undefined => {
		return services.find(
			service => service.id.toString() === activeServiceId
		)
	}

	const getActiveTabContent = (): TabContent | null => {
		const activeService = getActiveService()

		if (!activeService) return null

		if (hasChildren(activeService) && activeService.children) {
			const selectedTab = activeService.children.find(
				tab => tab?.tabs?.toString() === activeTabId
			)
			return selectedTab || activeService.children[0] || null
		}

		return activeService
	}

	return {
		activeServiceId,
		activeTabId,
		handleServiceChange,
		handleSubTabNavigation,
		getActiveService,
		getActiveTabContent,
		hasChildren
	}
}
