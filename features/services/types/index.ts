import { JSX } from 'react'

export interface ButtonType {
	type: 'yellow' | 'gray'
	link: string
	label: string
	icon?: ({ className }: { className?: string }) => JSX.Element
}

export interface AccordionType {
	trigger: string
	triggerValue: string
	text: string
}

export interface MonitorCardType {
	title: string
	description: string
}

export interface Card {
	title: string
	description: string
	image: ImageType
}

export interface ImageType {
	src: string
	title: string
	width: number
	height: number
}

export interface ListType {
	title?: string
	elements: string[]
}

export interface TabContent {
	tabs?: number
	name?: string
	title?: string
	text?: string
	list?: ListType[]
	buttons?: ButtonType[]
	image?: ImageType
	iframe?: string
	accordion?: AccordionType[]
	monitorCards?: MonitorCardType[]
	cards?: Card[]
}

export interface Tab {
	id: number
	name: string
	children?: TabContent[]
}

export interface ServiceItem extends TabContent {
	id: number
	name: string
}

export type ServiceData = Tab | ServiceItem
