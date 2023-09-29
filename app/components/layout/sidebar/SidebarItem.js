import Link from "next/link";
import classNames from "classnames";

const SidebarItem = ({index,item,onClick}) => {

    return(
        <Link key={index} href={item.href} onClick={() => {item.onClick;onClick()}}>
            <li
                className={classNames({
                    "text-indigo-100 hover:bg-indigo-900": true, //colors
                    "flex gap-4 items-center ": true, //layout
                    "transition-colors duration-300": true, //animation
                    "rounded-md p-2 mx-2": true, //self style
                    "bg-indigo-900": item.active
                })}
            >
            {item.icon} {item.label}
            {item.active}
            </li>
        </Link>
    );
};

export default SidebarItem;