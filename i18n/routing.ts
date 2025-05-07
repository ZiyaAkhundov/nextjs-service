import { defineRouting } from 'next-intl/routing'

export const locales = ['az', 'en'] as const
export const defaultLocale: Locales = 'az'

export const routing = defineRouting({
	locales,
	defaultLocale: 'az',
	localeDetection: false
})

export type Locales = (typeof locales)[number]
