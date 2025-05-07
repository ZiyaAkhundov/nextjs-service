import { useTranslations } from 'next-intl'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/components/ui/accordion'

import { AccordionType } from '../../types'

interface AccordionElementProps {
	items: AccordionType[]
}

export const AccordionElement = ({ items }: AccordionElementProps) => {
	const t = useTranslations()
	return (
		<Accordion type='single' collapsible>
			{items.map(item => (
				<AccordionItem
					key={item.triggerValue}
					value={item.triggerValue}
				>
					<AccordionTrigger className='flex-row-reverse justify-end gap-4 text-sm tracking-[.08px] min-[480px]:text-base'>
						{t(item.trigger)}
					</AccordionTrigger>
					<AccordionContent className='text-sm min-[480px]:text-base'>
						{t(item.text)}
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	)
}
