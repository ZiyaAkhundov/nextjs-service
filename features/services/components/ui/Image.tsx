import Image from 'next/image'

import { ImageType } from '../../types'

const ImageElement = ({ data }: { data: ImageType }) => {
	return (
		<div className='h-full w-full overflow-hidden rounded-[12px]'>
			<Image
				width={data.width}
				height={data.height}
				src={data.src}
				alt={data.title}
				className='h-full w-full'
			/>
		</div>
	)
}

export default ImageElement
