import Link from "next/link";
import classNames from "classnames";

const SidebarItem = ({index,item,onClick}) => {

    return(
        <Link 
            key={index} 
            href={item.href} 
            onClick={() => {
                onClick();
                item.onClick ? item.onClick() : null
            }}>
            <li
                className={classNames({
                    "text-text  font-bold hover:bg-primary hover:text-white": true, //colors
                    "flex gap-4 items-center ": true, //layout
                    "transition-colors duration-300": true, //animation
                    "rounded-md p-2 mx-2": true, //self style
                    "bg-primary text-white": item.active
                })}
            >
            {item.icon} {item.label}
            {item.active}
            </li>
        </Link>
    );
};

export default SidebarItem;