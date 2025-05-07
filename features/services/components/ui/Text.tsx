import { useTranslations } from 'next-intl'

const Text = ({ text }: { text: string }) => {
	const t = useTranslations()
	return (
		<p className='text-sm leading-[1.5] break-words whitespace-pre-line text-[#000000b8] min-[480px]:text-base'>
			{t(text)}
		</p>
	)
}

export default Text
