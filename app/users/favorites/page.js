'use client';

import { useEffect, useState } from "react";
import classNames from "classnames";
import { HeartIcon,ShareIcon,FunnelIcon} from "@heroicons/react/24/outline";
import { Modal,ModalContent,ModalBody,ModalHeader } from "@nextui-org/react";

const Favorites = () => {

    const [favorites,setFavorites] = useState([]);

    useEffect( () => {

        setFavorites([
            <FavoriteField key={1} message={"Texto favorito 1"} categorie={'Receita'}/>,
            <FavoriteField key={2} message={"Texto favorito 1"} categorie={'Curiosidade'}/>,
            <FavoriteField key={3} message={"Texto favorito 1"} categorie={'Outro'}/>,
            <FavoriteField key={4} message={"Texto favorito 1"} categorie={'Receita'}/>,
            <FavoriteField key={5} message={"Texto favorito 1"} categorie={'Curiosidade'}/>,
            <FavoriteField key={6} message={"Texto favorito 1"} categorie={'Outro'}/>,
            <FavoriteField key={7} message={"Texto favorito 1"} categorie={'Receita'}/>,
            <FavoriteField key={9} message={"Texto favorito 1"} categorie={'Curiosidade'}/>,
            <FavoriteField key={9} message={"Texto favorito 1"} categorie={'Outro'}/>,
            <FavoriteField key={10} message={"Texto favorito 1"} categorie={'Receita'}/>,
        ])
    },[]);

    return (
        <div
            className="h-screen flex flex-col w-full"
        >
            <div className={classNames({
                "text-center": true,
                "bg-white text-zinc-500": true, // colors
                "h-14": true,
                "t-0":true,
                "w-full sticky py-4 shadow-sm": true,
             })}>
                <h1>Meus Favoritos</h1>
            </div>
            <div className="
                w-full
                flex flex-col
                items-end
            ">
                <button className="
                    mx-5 my-3 
                    border 
                    p-2 
                    rounded-lg
                    bg-white
                    shadow-md
                    duration-500
                    hover:bg-gray-200
                ">
                    <FunnelIcon className="h-6 w-6"/>
                </button>
            </div>
            <div className="h-full overflow-y-scroll relative flex flex-col items-center">
                {favorites.length ? (
                    favorites.map(favorite => (favorite)) 
                ) : (
                    <div> Voce ainda não possui favoritos</div>
                )}
            </div>
        </div>
    );
}

const FavoriteField = ({message,categorie}) => {

    function handleCategorie(categorie) {
        const categories = {
            "Receita": "bg-orange border-orange",
            "Curiosidade": "bg-yellow-300 border-yellow-300",
            "Outro": "bg-green-600 border-green-600"
        }

        return categories[categorie] ? categories[categorie] : "red-800"
    }

    const type = handleCategorie(categorie);

    return (
        <div className="py-3 px-5
        w-11/12
        border border-gray-200
        bg-white
        shadow-sm
        my-3
        grid grid-cols-12
        relative
        rounded-lg
        "
        >
            <div className={`
                absolute
                h-full w-1.5
                text-center py-3
                border-2
                ${type}
                duration-500
                overflow-x-hidden
                px-2
                rounded-l-lg
                hover:w-1/3 hover:md:w-1/4
            `}>
                <p className="px-2 text-white font-bold">{categorie}</p>
            </div>
            <div className="col-span-10 mx-5">
                Favorito: {message}
            </div>
            <div className="col-span-2 grid grid-cols-2">
                <button className=" 
                    w-max
                    border
                    p-1
                    rounded-lg
                    bg-white
                    shadow-md
                    duration-500
                    hover:bg-gray-200
                ">
                    <HeartIcon className="h-6 w-6"/>
                </button>
                <button className=" 
                    w-max
                    border
                    p-1
                    rounded-lg
                    bg-white
                    shadow-md
                    duration-500
                    hover:bg-gray-200
                ">
                    <ShareIcon className="h-6 w-6"/>
                </button>
            </div>
        </div>
    )
}

export default Favorites;