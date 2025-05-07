const Iframe = ({ src }: { src: string }) => {
	return (
		<div className='relative h-0 overflow-hidden rounded-[12px] pb-[56.25%]'>
			<iframe
				src={src}
				className='absolute top-0 left-0 h-full w-full rounded-[12px]'
			/>
		</div>
	)
}

export default Iframe
