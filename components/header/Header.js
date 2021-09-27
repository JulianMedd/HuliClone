import { 
    HomeIcon,
    BadgeCheckIcon,
    LightningBoltIcon,
    CollectionIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline';
import Image from 'next/image';
import { HeaderIcons } from './HeaderIcons';

export const Header = () => {
    return (
        <header className="flex flex-col sm:flex-row m-5 sm:justify-between items-center">
            <ul className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderIcons title="HOME" Icon={HomeIcon}/>
                <HeaderIcons title="TRENDING" Icon={LightningBoltIcon}/>
                <HeaderIcons title="VERIFIED" Icon={BadgeCheckIcon}/>
                <HeaderIcons title="COLLECTIONS" Icon={CollectionIcon}/>
                <HeaderIcons title="SEARCH" Icon={SearchIcon}/>
                <HeaderIcons title="ACCOUNT" Icon={UserIcon}/>
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
