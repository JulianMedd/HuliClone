import Image from 'next/image';
import { HeaderIcons } from './HeaderIcons';

export const Header = () => {
    return (
        <header>
            <div>
                <HeaderIcons/>
            </div>
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
