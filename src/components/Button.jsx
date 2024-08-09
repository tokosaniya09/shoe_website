const Button = ({
	label, 
	iconURL, 
	backgroundColor, 
	textColor, 
	borderColor, 
	fullWidth, 
	onClick
}) => {
	return (
		<button  onClick={onClick} className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor} hover:bg-gray-100` : "bg-coral-red text-white border-coral-red hover:bg-red-500 hover:border-red-500"} rounded-full ${fullWidth && "w-full"} active:animate-pingReverse  `}>
				{label}
				{iconURL && <img 
					src={iconURL} 
					alt="arrow right icon" 
					className='ml-2 rounded-full bg-whote w-5 h-5' 
				/>}
		</button>
	)
}

export default Button