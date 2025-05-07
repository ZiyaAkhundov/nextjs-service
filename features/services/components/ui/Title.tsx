import { useTranslations } from 'next-intl'

const Title = ({ title }: { title: string }) => {
	const t = useTranslations()
	return (
		<p className='dektop:text-[64px] p-0 text-[32px] leading-[1.2] font-bold text-black min-[480px]:text-[40px] md:text-5xl'>
			{t(title)}
		</p>
	)
}

export default Title
