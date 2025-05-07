import { Link } from '@/i18n/navigation'
import LogoIcon from '@/icons/Logo.icon'

const Logo = () => {
	return (
		<Link href='/' className='flex items-center gap-2' aria-label='logo'>
			<LogoIcon />
		</Link>
	)
}

export default Logo
