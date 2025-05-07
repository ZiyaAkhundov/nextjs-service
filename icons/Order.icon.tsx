import React from 'react'

const OrderIcon = ({ className }: { className?: string }) => {
	return (
		<svg
			viewBox='0 0 100 100'
			width='100'
			height='100'
			className={className}
		>
			<defs>
				<path
					id='circle'
					d='M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0'
					fill='white'
				></path>
			</defs>
			<text fontSize='7.59898'>
				<textPath href='#circle' fill='white'>
					ORDER ⚡ ORDER ⚡ ORDER ⚡ ORDER ⚡ ORDER ⚡ ORD ⚡
				</textPath>
			</text>
		</svg>
	)
}

export default OrderIcon
