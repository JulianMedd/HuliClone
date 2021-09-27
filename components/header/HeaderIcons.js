export const HeaderIcons = ({title, Icon}) => {
    return (
        <li className="hover:text-white flex flex-col items-center cursor-pointer group w-12 sm:w-20">
            <Icon className="h-8 m-1 group-hover:animate-bounce"/>
            <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
        </li>
    )
}

export default HeaderIcons;