import Request from "../../utils/Request";
import { useRouter } from 'next/router';

export const Nav = () => {
    const router = useRouter();
    return (
        <nav className="relative">
            <ul className='flex px-10 sm:px-20 text-2xl whitespace-nowrap  space-x-10 sm:space-x-20 overflow-x-auto scrollbar-hide'>
                {
                    Object.entries(Request).map(([key, {title, url}])=>{
                        return (
                            <li
                                key={key}
                                className='hover:text-white cursor-pointer active:text-red-500'
                                onClick={()=>router.push(`/?genre=${key}`)}
                            >
                                {title}
                            </li>
                        )
                    })
                }
            </ul>
            <div className="absolute top-0 right-0 z-10 h-10 w-1/12 bg-gradient-to-l from-back"></div>
        </nav>
    )
}

export default Nav;