import Request from "../../utils/Request";
import { useRouter } from 'next/router';

export const Nav = () => {
    const router = useRouter();
    return (
        <nav>
            <ul className='flex px-10 sm:px-20 text-2xl whitespace-nowrap  space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
                {
                    Object.entries(Request).map(([key, {title, url}])=>{
                        return (
                            <li
                                key={key}
                                className='hover:text-white cursor-pointer active:text-red-500'
                                onClick={()=>router.push(`/genre=${key}`)}
                            >
                                {title}
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Nav;