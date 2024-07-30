const ShoeCard = ({ imageURL, changeBigShoeImage, bigShoeImg }) => {
    const handleClick = () => {
        if (bigShoeImg !== imageURL.bigShoe) {
            changeBigShoeImage(imageURL.bigShoe)
        }
    }

    return (
        <div 
            className={`border-2 rounded-xl ${bigShoeImg === imageURL.bigShoe ? 'border-coral-red' : 'border-none'} cursor-pointer max-sm:flex-1 hover:shadow-xl active:animate-pingReverse`} 
            onClick={handleClick}
        >
            <div className="flex justify-center items-center bg-card bg-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                <img 
                    src={imageURL.thumbnail} 
                    alt="shoe collection" 
                    width={127} 
                    height={103.34} 
                    className="object-contain"
                />
            </div>
        </div>
    )
}

export default ShoeCard