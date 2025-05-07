import HeaderMenu from './HeaderMenu'
import LanguageMenu from './LanguageMenu'
import Logo from './Logo'
import MobileMenu from './MobileMenu'

const Header = () => {
	return (
		<header className='container-site desktop:border-none desktop:static desktop:pt-8 desktop:px-20 fixed top-0 z-10 flex items-center justify-between gap-8 border-b border-[#d9d9d94d] bg-white px-8 py-4 transition-all duration-300'>
			<Logo />
			<HeaderMenu />
			<MobileMenu />
		</header>
	)
}

export default Header
