import { 
    HomeIcon,
    BadgeCheckIcon,
    CollectionIcon,
    LibraryIcon,
    SearchIcon,
    User
} from '@heroicons/react/outline';
import Image from 'next/image';
import { HeaderIcons } from './HeaderIcons';

export const Header = () => {
    return (
        <header>
            <ul>
                <HeaderIcons title="HOME" Icon={HomeIcon}/>
            </ul>
            <Image
                className="object-contain"
                src='https://links.papareact.com/ua6'
                width={200}
                height={100}
            />
        </header>
    )
}

export default Header;
