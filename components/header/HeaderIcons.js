export const HeaderIcons = ({title, Icon}) => {
    return (
        <li className="flex flex-col items-center cursor-pointer group">
            <Icon className="h-8 m-1"/>
            <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
        </li>
    )
}

export default HeaderIcons;