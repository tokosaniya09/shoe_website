import { useNavigate } from 'react-router-dom'
import { arrowTop } from '../assets/icons'
import Button from './Button'

const ScrollToTop = () => {
    const navigate = useNavigate()
    return (
        <a
            className='fixed bottom-0 right-0'
            href={"#top"}
        >
            <Button iconURL={arrowTop} backgroundColor="Class
Properties
Preview 
bg-inherit	background-color: inherit;
bg-current	background-color: currentColor;
bg-transparent	background-color: transparent;
bg-black	background-color: rgb(0 0 0);
bg-white" borderColor="bg-transparent"/>
        </a>
    )
}

export default ScrollToTop