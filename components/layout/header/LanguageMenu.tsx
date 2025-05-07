'use client'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { languages } from '@/constants/constants'
import { usePathname, useRouter } from '@/i18n/navigation'
import GlobusIcon from '@/icons/Globus.icon'

const LanguageMenu = () => {
	const router = useRouter()
	const pathname = usePathname()

	const handleChangeLanguage = (value: string) => {
		router.replace({ pathname: pathname }, { locale: value })
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				aria-label='language-menu'
				className='desktop:p-0 desktop:h-9 desktop:w-9 desktop:bg-[#e0dfdf] flex cursor-pointer items-center justify-center rounded-[8px] bg-[#f5f5f7] p-2.5'
			>
				<GlobusIcon />
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align='end'
				className='w-[117px]'
				onCloseAutoFocus={e => e.preventDefault()}
			>
				{languages.map(language => (
					<DropdownMenuItem
						key={language.value}
						onClick={() => handleChangeLanguage(language.value)}
						className='flex items-center justify-center gap-3 px-[12px] py-3'
					>
						<language.icon />
						<p className='text-base font-medium'>
							{language.label}
						</p>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default LanguageMenu
