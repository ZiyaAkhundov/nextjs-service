import React from 'react'

const StarIcon = ({ className }: { className?: string }) => {
	return (
		<svg
			width='48'
			height='48'
			style={{ width: '48px', height: '48px' }}
			className={className}
			viewBox='0 0 48 48'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M41.25 23.25H5.25M23.25 5.25V41.25M12.75 33.75L33.75 12.75M33.75 33.75L12.75 12.75'
				stroke='black'
				strokeWidth='4.5'
				strokeLinecap='round'
				strokeLinejoin='round'
			></path>
		</svg>
	)
}

export default StarIcon
