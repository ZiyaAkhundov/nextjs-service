import { servicesData } from '../data/services'

import { TabsList } from './Tabs/TabsList'
import PageInfo from './pageInfo/PageInfo'

const Services = () => {
	return (
		<main className='container-site desktop:px-16 desktop:pt-0 px-6 pt-20 min-[480px]:px-8 md:px-12 xl:px-20'>
			<PageInfo />
			<TabsList services={servicesData} />
		</main>
	)
}

export default Services
