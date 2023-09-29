import { useRef,useEffect, } from "react";
import classNames from "classnames";

import "./style.css";

export const HamburguerIcon = ({
    onClick,
    isOpen,
    className
}) => {


    const refBtn = useRef();

    // Aplicar animação hamburguer quando isOpen mudar
    useEffect( ()=> {
        refBtn.current.classList.toggle('animHambur');
    },[isOpen]);

    return(
        <button className={className ? className : "h-full w-full"} onClick={onClick}>
            <span className="h-full w-full">
                <span className="hamburguerBtn-container" ref={refBtn}>
                    {/* montar menu hamburguer */}
                </span>
            </span>
        </button>
    )
};

export default HamburguerIcon;