'use client'

import { ServiceData } from '../types'

import ClickIcon from '@/icons/Click.icon'
import PhoneIcon from '@/icons/Phone.icon'

export const servicesData: ServiceData[] = [
	{
		id: 1,
		name: 'services.software.name',
		children: [
			{
				tabs: 1,
				name: 'services.software.name',
				title: 'services.software.title',
				text: 'services.software.description',
				buttons: [
					{
						type: 'yellow',
						link: '/contact',
						label: 'services.common.contactUs',
						icon: PhoneIcon
					},
					{
						type: 'gray',
						link: '/projects',
						label: 'services.common.projects',
						icon: ClickIcon
					}
				],
				image: {
					src: '/software_image.webp',
					title: 'software image',
					width: 1232,
					height: 675
				}
			},
			{
				tabs: 2,
				name: 'services.fastSearch.name',
				title: 'services.fastSearch.title',
				text: 'services.fastSearch.description',
				buttons: [
					{
						type: 'yellow',
						link: '/contact',
						label: 'services.common.contactUs',
						icon: PhoneIcon
					},
					{
						type: 'gray',
						link: '/projects',
						label: 'services.common.projects',
						icon: ClickIcon
					}
				],
				iframe: 'https://www.youtube.com/embed/YRTe_sJd_2A'
			},
			{
				tabs: 3,
				name: 'services.crm.name',
				title: 'services.crm.title',
				list: [
					{
						title: 'services.crm.system.title',
						elements: [
							'services.crm.system.items.item1',
							'services.crm.system.items.item2',
							'services.crm.system.items.item3'
						]
					},
					{
						title: 'services.erp.system.title',
						elements: [
							'services.erp.system.items.item1',
							'services.erp.system.items.item2',
							'services.erp.system.items.item3',
							'services.erp.system.items.item4'
						]
					}
				],
				buttons: [
					{
						type: 'yellow',
						link: '/contact',
						label: 'services.common.contactUs',
						icon: PhoneIcon
					},
					{
						type: 'gray',
						link: '/projects',
						label: 'services.common.projects',
						icon: ClickIcon
					}
				],
				iframe: 'https://www.youtube.com/embed/qUpIJZT0V4A'
			},
			{
				tabs: 4,
				name: 'services.mobileApp.name',
				title: 'services.mobileApp.title',
				text: 'services.mobileApp.description',
				buttons: [
					{
						type: 'yellow',
						link: '/contact',
						label: 'services.common.contactUs',
						icon: PhoneIcon
					},
					{
						type: 'gray',
						link: '/projects',
						label: 'services.common.projects',
						icon: ClickIcon
					}
				],
				image: {
					src: '/mobile_image.webp',
					title: 'software image',
					width: 1232,
					height: 768
				}
			}
		]
	},
	{
		id: 2,
		name: 'services.website.name',
		title: 'services.website.title',
		text: 'services.website.description',
		buttons: [
			{
				type: 'yellow',
				link: '/contact',
				label: 'services.common.contactUs',
				icon: PhoneIcon
			},
			{
				type: 'gray',
				link: '/projects',
				label: 'services.common.projects',
				icon: ClickIcon
			}
		],
		cards: [
			{
				title: 'services.website.uxui.title',
				description: 'services.website.uxui.description',
				image: {
					src: '/ui-ux_website.webp',
					title: 'uxui image',
					width: 646,
					height: 356
				}
			},
			{
				title: 'services.website.mobileOptimization.title',
				description: 'services.website.mobileOptimization.description',
				image: {
					src: '/optimization_website.webp',
					title: 'mobile optimization image',
					width: 804,
					height: 412
				}
			},
			{
				title: 'services.website.frontend.title',
				description: 'services.website.frontend.description',
				image: {
					src: '/front_website.webp',
					title: 'frontend development image',
					width: 584,
					height: 376
				}
			},
			{
				title: 'services.website.backend.title',
				description: 'services.website.backend.description',
				image: {
					src: '/backend_website.webp',
					title: 'backend development image',
					width: 584,
					height: 412
				}
			},
			{
				title: 'services.website.security.title',
				description: 'services.website.security.description',
				image: {
					src: '/cyber_website.webp',
					title: 'cyber security image',
					width: 804,
					height: 544
				}
			},
			{
				title: 'services.website.seo.title',
				description: 'services.website.seo.description',
				image: {
					src: '/seo_website.webp',
					title: 'seo optimization image',
					width: 674,
					height: 436
				}
			}
		]
	},
	{
		id: 3,
		name: 'services.gaming.name',
		children: [
			{
				tabs: 1,
				name: 'services.gaming.name',
				title: 'services.gaming.title',
				text: 'services.gaming.description',
				buttons: [
					{
						type: 'yellow',
						link: '/contact',
						label: 'services.common.contactUs',
						icon: PhoneIcon
					},
					{
						type: 'gray',
						link: '/projects',
						label: 'services.common.projects',
						icon: ClickIcon
					}
				],
				image: {
					src: '/game_service.webp',
					title: 'gaming apps image',
					width: 1232,
					height: 653
				}
			},
			{
				tabs: 2,
				name: 'services.gaming.vr.name',
				title: 'services.gaming.vr.title',
				text: 'services.gaming.vr.description',
				list: [
					{
						title: 'services.gaming.vr.list.title',
						elements: [
							'services.gaming.vr.list.items.item1',
							'services.gaming.vr.list.items.item2',
							'services.gaming.vr.list.items.item3',
							'services.gaming.vr.list.items.item4'
						]
					}
				],
				buttons: [
					{
						type: 'yellow',
						link: '/contact',
						label: 'services.common.contactUs',
						icon: PhoneIcon
					},
					{
						type: 'gray',
						link: '/projects',
						label: 'services.common.projects',
						icon: ClickIcon
					}
				],
				iframe: 'https://www.youtube.com/embed/NAiTQcoDT0o?si=up4xGBXZiqJyBe8K'
			},
			{
				tabs: 3,
				name: 'services.gaming.web.name',
				title: 'services.gaming.web.title',
				text: 'services.gaming.web.description',
				list: [
					{
						elements: [
							'services.gaming.web.list.items.item1',
							'services.gaming.web.list.items.item2',
							'services.gaming.web.list.items.item3',
							'services.gaming.web.list.items.item4'
						]
					}
				],
				buttons: [
					{
						type: 'yellow',
						link: '/contact',
						label: 'services.common.contactUs',
						icon: PhoneIcon
					},
					{
						type: 'gray',
						link: '/projects',
						label: 'services.common.projects',
						icon: ClickIcon
					}
				],
				iframe: 'https://game.birainy.com'
			},
			{
				tabs: 4,
				name: 'services.gaming.simulator.name',
				title: 'services.gaming.simulator.title',
				text: 'services.gaming.simulator.description',
				accordion: [
					{
						trigger:
							'services.gaming.simulator.accordion.item1.title',
						triggerValue:
							'services.gaming.simulator.accordion.item1.title',
						text: 'services.gaming.simulator.accordion.item1.description'
					},
					{
						trigger:
							'services.gaming.simulator.accordion.item2.title',
						triggerValue:
							'services.gaming.simulator.accordion.item2.title',
						text: 'services.gaming.simulator.accordion.item2.description'
					},
					{
						trigger:
							'services.gaming.simulator.accordion.item3.title',
						triggerValue:
							'services.gaming.simulator.accordion.item3.title',
						text: 'services.gaming.simulator.accordion.item3.description'
					},
					{
						trigger:
							'services.gaming.simulator.accordion.item4.title',
						triggerValue:
							'services.gaming.simulator.accordion.item4.title',
						text: 'services.gaming.simulator.accordion.item4.description'
					},
					{
						trigger:
							'services.gaming.simulator.accordion.item5.title',
						triggerValue:
							'services.gaming.simulator.accordion.item5.title',
						text: 'services.gaming.simulator.accordion.item5.description'
					},
					{
						trigger:
							'services.gaming.simulator.accordion.item6.title',
						triggerValue:
							'services.gaming.simulator.accordion.item6.title',
						text: 'services.gaming.simulator.accordion.item6.description'
					}
				],
				iframe: 'https://www.youtube.com/embed/UjkdWji87Nw'
			},
			{
				tabs: 5,
				name: 'services.gaming.monitor.name',
				title: 'services.gaming.monitor.title',
				text: 'services.gaming.monitor.description',
				monitorCards: [
					{
						title: 'services.gaming.monitor.cards.item1.title',
						description:
							'services.gaming.monitor.cards.item1.description'
					},
					{
						title: 'services.gaming.monitor.cards.item2.title',
						description:
							'services.gaming.monitor.cards.item2.description'
					},
					{
						title: 'services.gaming.monitor.cards.item3.title',
						description:
							'services.gaming.monitor.cards.item3.description'
					}
				],
				iframe: 'https://www.youtube.com/embed/mGGKKrV1OJE'
			}
		]
	},
	{
		id: 4,
		name: 'services.analytics.name',
		children: [
			{
				tabs: 1,
				name: 'services.analytics.name',
				title: 'services.analytics.title',
				text: 'services.analytics.description',
				buttons: [
					{
						type: 'yellow',
						link: '/contact',
						label: 'services.common.contactUs',
						icon: PhoneIcon
					},
					{
						type: 'gray',
						link: '/projects',
						label: 'services.common.projects',
						icon: ClickIcon
					}
				],
				image: {
					src: '/hr_analitika.webp',
					title: 'data analytics image',
					width: 1232,
					height: 732
				}
			},
			{
				tabs: 2,
				name: 'services.analytics.financial.name',
				title: 'services.analytics.financial.title',
				list: [
					{
						title: 'services.analytics.financial.list.title',
						elements: [
							'services.analytics.financial.list.items.item1',
							'services.analytics.financial.list.items.item2',
							'services.analytics.financial.list.items.item3'
						]
					}
				],
				text: 'services.analytics.financial.description',
				buttons: [
					{
						type: 'yellow',
						link: '/contact',
						label: 'services.common.contactUs',
						icon: PhoneIcon
					},
					{
						type: 'gray',
						link: '/projects',
						label: 'services.common.projects',
						icon: ClickIcon
					}
				],
				iframe: 'https://app.powerbi.com/view?r=eyJrIjoiYWRkMDRhMWMtZDQzMC00MWIzLWJkMzYtN2JiYjcwYzkzYjI5IiwidCI6IjQ1ZTcyYmQ4LWVmYjctNGFlMS04M2IzLTI4NGFmNzBmMGM1OSIsImMiOjl9'
			},
			{
				tabs: 3,
				name: 'services.analytics.hr.name',
				title: 'services.analytics.hr.title',
				list: [
					{
						title: 'services.analytics.hr.list.title',
						elements: [
							'services.analytics.hr.list.items.item1',
							'services.analytics.hr.list.items.item2',
							'services.analytics.hr.list.items.item3',
							'services.analytics.hr.list.items.item4'
						]
					}
				],
				text: 'services.analytics.hr.description',
				buttons: [
					{
						type: 'yellow',
						link: '/contact',
						label: 'services.common.contactUs',
						icon: PhoneIcon
					},
					{
						type: 'gray',
						link: '/projects',
						label: 'services.common.projects',
						icon: ClickIcon
					}
				],
				iframe: 'https://app.powerbi.com/view?r=eyJrIjoiMjZkNDczNGQtNjcyYy00ZGM2LWE2OWItZjkwMjAwOTk4ODkxIiwidCI6IjQ1ZTcyYmQ4LWVmYjctNGFlMS04M2IzLTI4NGFmNzBmMGM1OSIsImMiOjl9'
			},
			{
				tabs: 4,
				name: 'services.analytics.optimization.name',
				title: 'services.analytics.optimization.title',
				text: 'services.analytics.optimization.description',
				buttons: [
					{
						type: 'yellow',
						link: '/contact',
						label: 'services.common.contactUs',
						icon: PhoneIcon
					},
					{
						type: 'gray',
						link: '/projects',
						label: 'services.common.projects',
						icon: ClickIcon
					}
				],
				iframe: 'https://app.powerbi.com/view?r=eyJrIjoiMjRjMDJmZmEtZjdjZS00NDgxLTlkNDktODZkZTkwYmFmNGM3IiwidCI6IjQ1ZTcyYmQ4LWVmYjctNGFlMS04M2IzLTI4NGFmNzBmMGM1OSIsImMiOjl9'
			},
			{
				tabs: 5,
				name: 'services.analytics.procurement.name',
				title: 'services.analytics.procurement.title',
				list: [
					{
						title: 'services.analytics.procurement.list.title',
						elements: [
							'services.analytics.procurement.list.items.item1',
							'services.analytics.procurement.list.items.item2',
							'services.analytics.procurement.list.items.item3'
						]
					}
				],
				buttons: [
					{
						type: 'yellow',
						link: '/contact',
						label: 'services.common.contactUs',
						icon: PhoneIcon
					},
					{
						type: 'gray',
						link: '/projects',
						label: 'services.common.projects',
						icon: ClickIcon
					}
				],
				iframe: 'https://app.powerbi.com/view?r=eyJrIjoiNjg5OGQ4MTQtMmRkMS00Y2Y0LTg3ODYtMDc5MDg0Y2VlN2U4IiwidCI6IjQ1ZTcyYmQ4LWVmYjctNGFlMS04M2IzLTI4NGFmNzBmMGM1OSIsImMiOjl9'
			},
			{
				tabs: 6,
				name: 'services.analytics.kpi.name',
				title: 'services.analytics.kpi.title',
				text: 'services.analytics.kpi.description',
				buttons: [
					{
						type: 'yellow',
						link: '/contact',
						label: 'services.common.contactUs',
						icon: PhoneIcon
					},
					{
						type: 'gray',
						link: '/projects',
						label: 'services.common.projects',
						icon: ClickIcon
					}
				],
				iframe: 'https://app.powerbi.com/view?r=eyJrIjoiMDIyOGE1YmQtOTAwMS00MjdmLTk1NTctMjkzYzdjZGQwMDY3IiwidCI6IjQ1ZTcyYmQ4LWVmYjctNGFlMS04M2IzLTI4NGFmNzBmMGM1OSIsImMiOjl9'
			},
			{
				tabs: 7,
				name: 'services.analytics.integration.name',
				title: 'services.analytics.integration.title',
				text: 'services.analytics.integration.description',
				buttons: [
					{
						type: 'yellow',
						link: '/contact',
						label: 'services.common.contactUs',
						icon: PhoneIcon
					},
					{
						type: 'gray',
						link: '/projects',
						label: 'services.common.projects',
						icon: ClickIcon
					}
				]
			},
			{
				tabs: 8,
				name: 'services.analytics.hse.name',
				title: 'services.analytics.hse.title',
				text: 'services.analytics.hse.description',
				buttons: [
					{
						type: 'yellow',
						link: '/contact',
						label: 'services.common.contactUs',
						icon: PhoneIcon
					},
					{
						type: 'gray',
						link: '/projects',
						label: 'services.common.projects',
						icon: ClickIcon
					}
				],
				iframe: 'https://app.powerbi.com/view?r=eyJrIjoiODJjYmVkMDgtMzRkZC00ZGYyLWI5NzItMWQyOGU4ODIzODM1IiwidCI6IjQ1ZTcyYmQ4LWVmYjctNGFlMS04M2IzLTI4NGFmNzBmMGM1OSIsImMiOjl9'
			},
			{
				tabs: 9,
				name: 'services.analytics.sales.name',
				title: 'services.analytics.sales.title',
				text: 'services.analytics.sales.description',
				list: [
					{
						title: 'services.analytics.sales.list.title',
						elements: [
							'services.analytics.sales.list.items.item1',
							'services.analytics.sales.list.items.item2',
							'services.analytics.sales.list.items.item3',
							'services.analytics.sales.list.items.item4',
							'services.analytics.sales.list.items.item5',
							'services.analytics.sales.list.items.item6'
						]
					}
				],
				buttons: [
					{
						type: 'yellow',
						link: '/contact',
						label: 'services.common.contactUs',
						icon: PhoneIcon
					},
					{
						type: 'gray',
						link: '/projects',
						label: 'services.common.projects',
						icon: ClickIcon
					}
				],
				iframe: 'https://app.powerbi.com/view?r=eyJrIjoiMzUzNzk5ODktMmM4My00OGVjLWE4MjMtMzAwYTE0ZWE0ZWJhIiwidCI6IjQ1ZTcyYmQ4LWVmYjctNGFlMS04M2IzLTI4NGFmNzBmMGM1OSIsImMiOjl9'
			},
			{
				tabs: 10,
				name: 'services.analytics.social.name',
				title: 'services.analytics.social.title',
				text: 'services.analytics.social.description',
				list: [
					{
						title: 'services.analytics.social.list.title',
						elements: [
							'services.analytics.social.list.items.item1',
							'services.analytics.social.list.items.item2',
							'services.analytics.social.list.items.item3',
							'services.analytics.social.list.items.item4'
						]
					}
				],
				buttons: [
					{
						type: 'yellow',
						link: '/contact',
						label: 'services.common.contactUs',
						icon: PhoneIcon
					},
					{
						type: 'gray',
						link: '/projects',
						label: 'services.common.projects',
						icon: ClickIcon
					}
				],
				iframe: 'https://app.powerbi.com/view?r=eyJrIjoiZjM4ZGQ0M2EtMmM4Zi00ZWU5LWE5YTEtZWY1ZDVjZmFkYTliIiwidCI6IjQ1ZTcyYmQ4LWVmYjctNGFlMS04M2IzLTI4NGFmNzBmMGM1OSIsImMiOjl9'
			},
			{
				tabs: 11,
				name: 'services.analytics.restaurant.name',
				title: 'services.analytics.restaurant.title',
				text: 'services.analytics.restaurant.description',
				list: [
					{
						title: 'services.analytics.restaurant.list.title',
						elements: [
							'services.analytics.restaurant.list.items.item1',
							'services.analytics.restaurant.list.items.item2',
							'services.analytics.restaurant.list.items.item3',
							'services.analytics.restaurant.list.items.item4',
							'services.analytics.restaurant.list.items.item5',
							'services.analytics.restaurant.list.items.item6',
							'services.analytics.restaurant.list.items.item7',
							'services.analytics.restaurant.list.items.item8',
							'services.analytics.restaurant.list.items.item9',
							'services.analytics.restaurant.list.items.item10',
							'services.analytics.restaurant.list.items.item11',
							'services.analytics.restaurant.list.items.item12',
							'services.analytics.restaurant.list.items.item13'
						]
					}
				],
				buttons: [
					{
						type: 'yellow',
						link: '/contact',
						label: 'services.common.contactUs',
						icon: PhoneIcon
					},
					{
						type: 'gray',
						link: '/projects',
						label: 'services.common.projects',
						icon: ClickIcon
					}
				],
				iframe: 'https://app.powerbi.com/view?r=eyJrIjoiNWY4NGY4NmMtNmQyMi00MGUxLWIyNjItNWM1YjcwOTgxZjA4IiwidCI6IjQ1ZTcyYmQ4LWVmYjctNGFlMS04M2IzLTI4NGFmNzBmMGM1OSIsImMiOjl9'
			}
		]
	}
]
