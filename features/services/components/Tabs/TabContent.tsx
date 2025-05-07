'use client'

import { TabContent as TabContentType } from '../../types'
import { AccordionElement } from '../ui/AccordionElement'
import Buttons from '../ui/Buttons'
import Card from '../ui/Card'
import Iframe from '../ui/Iframe'
import ImageElement from '../ui/Image'
import List from '../ui/List'
import MonitorCard from '../ui/MonitorCard'
import Text from '../ui/Text'
import Title from '../ui/Title'

interface TabContentProps {
	content: TabContentType | null | undefined
}

export const TabContent = ({ content }: TabContentProps) => {
	if (!content) {
		return (
			<div className='py-6 text-center text-gray-500'>
				No content available
			</div>
		)
	}

	const contentKeys = Object.keys(content).filter(
		key =>
			content[key as keyof TabContentType] !== undefined &&
			!['id', 'name', 'tabs'].includes(key)
	)

	const renderElement = (key: string, index: number) => {
		switch (key) {
			case 'title':
				return content.title ? (
					<Title key={`title-${index}`} title={content.title} />
				) : null

			case 'text':
				return content.text ? (
					<Text key={`text-${index}`} text={content.text} />
				) : null

			case 'list':
				return content.list ? (
					<List key={`list-${index}`} lists={content.list} />
				) : null

			case 'buttons':
				return content.buttons ? (
					<Buttons
						key={`buttons-${index}`}
						buttons={content.buttons}
					/>
				) : null

			case 'image':
				return content.image ? (
					<ImageElement key={`image-${index}`} data={content.image} />
				) : null

			case 'iframe':
				return content.iframe ? (
					<Iframe key={`iframe-${index}`} src={content.iframe} />
				) : null

			case 'accordion':
				return content.accordion ? (
					<AccordionElement
						key={`accordion-${index}`}
						items={content.accordion}
					/>
				) : null

			case 'monitorCards':
				return content.monitorCards ? (
					<MonitorCard
						key={`monitorCards-${index}`}
						monitorCards={content.monitorCards}
					/>
				) : null

			case 'cards':
				return content.cards ? (
					<Card key={`cards-${index}`} cards={content.cards} />
				) : null

			default:
				return null
		}
	}

	return <>{contentKeys.map((key, index) => renderElement(key, index))}</>
}
