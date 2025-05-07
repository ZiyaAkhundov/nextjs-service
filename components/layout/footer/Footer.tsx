import FooterAddresses from './FooterAddresses'
import FooterCopyright from './FooterCopyright'
import FooterNavigation from './FooterNavigation'

const Footer = () => {
	return (
		<footer className='mt-[100px] bg-black'>
			<div className='desktop:px-16 w-full px-5 md:px-12 xl:px-20'>
				<FooterNavigation />
				<FooterAddresses />
				<FooterCopyright />
			</div>
		</footer>
	)
}

export default Footer
